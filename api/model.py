import torch
import torch.nn as nn
from transformers import BertForSequenceClassification

class ScamDetectorBERT(nn.Module):
    def __init__(self):
        super(ScamDetectorBERT, self).__init__()
        self.bert = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=1)

    def forward(self, input_ids):
        output = self.bert(input_ids)
        return torch.sigmoid(output.logits)
