import pandas as pd
from sklearn.model_selection import train_test_split
from torch.utils.data import Dataset, DataLoader
from transformers import BertTokenizer, BertForSequenceClassification
import torch
import torch.nn as nn
import torch.optim as optim
from tqdm import tqdm  # Import tqdm for the progress bar

# Check if CUDA (GPU) is available
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
print(f'Using device: {device}')

# Load the data
data_path = './data.xlsx'
df = pd.read_excel(data_path)

# Preprocess the data
X = df['Text'].astype(str).values
y = df['Class'].values

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Tokenize text data using BERT tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

X_train_tokens = tokenizer(X_train.tolist(), padding=True, truncation=True, return_tensors='pt')
X_test_tokens = tokenizer(X_test.tolist(), padding=True, truncation=True, return_tensors='pt')

# Convert to PyTorch tensors
X_train_tensor = torch.tensor(X_train_tokens['input_ids']).to(device)
y_train_tensor = torch.tensor(y_train, dtype=torch.float32).to(device)
X_test_tensor = torch.tensor(X_test_tokens['input_ids']).to(device)
y_test_tensor = torch.tensor(y_test, dtype=torch.float32).to(device)

# Create PyTorch dataset and dataloaders
class TextDataset(Dataset):
    def __init__(self, input_ids, labels):
        self.input_ids = input_ids
        self.labels = labels

    def __len__(self):
        return len(self.input_ids)

    def __getitem__(self, idx):
        return self.input_ids[idx], self.labels[idx]

train_dataset = TextDataset(X_train_tensor, y_train_tensor)
test_dataset = TextDataset(X_test_tensor, y_test_tensor)

train_dataloader = DataLoader(train_dataset, batch_size=32, shuffle=True)
test_dataloader = DataLoader(test_dataset, batch_size=32, shuffle=False)

# Define a BERT-based model for sequence classification
class ScamDetectorBERT(nn.Module):
    def __init__(self):
        super(ScamDetectorBERT, self).__init__()
        self.bert = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=1)

    def forward(self, input_ids):
        output = self.bert(input_ids)
        return torch.sigmoid(output.logits)

# Instantiate the BERT-based model
model = ScamDetectorBERT().to(device)

# Train the BERT-based model
criterion = nn.BCELoss()
optimizer = optim.AdamW(model.parameters(), lr=2e-5)

epochs = 3  # Adjust as needed

# Use tqdm to add a progress bar
for epoch in range(epochs):
    epoch_loss = 0
    progress_bar = tqdm(train_dataloader, desc=f'Epoch {epoch + 1}/{epochs}', unit='batch', leave=False)
    
    for input_ids, labels in progress_bar:
        optimizer.zero_grad()
        outputs = model(input_ids)
        loss = criterion(outputs.view(-1), labels.view(-1))
        loss.backward()
        optimizer.step()
        
        epoch_loss += loss.item()
        progress_bar.set_postfix(loss=loss.item())

    average_loss = epoch_loss / len(train_dataloader)
    print(f"Epoch {epoch + 1}/{epochs} - Average Loss: {average_loss:.4f}")

# Save the trained model
torch.save(model.state_dict(), './model/scam_detector_model.pth')
print("Model saved successfully.")
