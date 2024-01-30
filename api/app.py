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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=333)
