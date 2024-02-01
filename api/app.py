from flask import Flask, request, render_template, jsonify
from flask_cors import CORS
from predict import main

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/process_string', methods=['POST'])
def process_string():
    data = request.get_json()
    input_string = data.get('input_string')
    output = main(input_string)
    
    a = output[0]
    b = round(output[1])

    result = {'a': a, 'b': b}
    return jsonify(result)

@app.route('/get_sitelist', methods=['GET'])
def get_sitelist():
    file_path = 'domains.txt'  # Replace 'your_file.txt' with the actual path to your text file

    # Open the file and read lines
    with open(file_path, 'r') as file:
        lines = file.readlines()

    # Remove newline characters and create an array of strings
    sitelist = [line.strip() for line in lines]
    return jsonify({'sites': sitelist})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=333)
