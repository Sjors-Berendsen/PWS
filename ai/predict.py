import torch
from transformers import BertTokenizer
from model import ScamDetectorBERT

# Check if CUDA (GPU) is available
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
print(f'Using device: {device}')

# Load the trained model
model_path = './model/scam_detector_model.pth'
loaded_model = ScamDetectorBERT()
loaded_model.load_state_dict(torch.load(model_path, map_location=device))
loaded_model.to(device)
loaded_model.eval()

# Tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

# Use the trained BERT-based model for predictions
def predict_text(text, model, tokenizer, threshold=0.6):
    text = ''.join(char for char in text if char.isprintable())
    tokenized_text = tokenizer(text, return_tensors='pt', truncation=True, max_length=512, padding=True)
    
    input_ids = tokenized_text['input_ids'].to(device)
    with torch.no_grad():
        output = model(input_ids)
    
    certainty_score = output.item() * 100  # Convert to percentage
    predicted_class = 1 if output.item() >= threshold else 0
    return certainty_score, predicted_class

# Read input text from file
input_file_path = './input.txt'
with open(input_file_path, 'r', errors='ignore') as file:
    input_text = file.read()

temp_scores = predict_text(input_text, loaded_model, tokenizer)
certainty_score = temp_scores[0]
scam_score = temp_scores[1]
print(f"Scam Score: {certainty_score:.2f}% \nClass: {scam_score}")
