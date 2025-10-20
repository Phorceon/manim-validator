from manim_validator import ManimProcessor
from flask import Flask, request, jsonify

app = Flask(__name__)
processor = ManimProcessor()

@app.route('/process', methods=['POST'])
def process():
    data = request.get_json()
    code = data.get('code', '')
    result = processor.process_code(code)
    return jsonify(result)

@app.route('/correct', methods=['POST'])
def correct():
    data = request.get_json()
    code = data.get('code', '')
    result = processor.process_code(code)
    return jsonify(result)

@app.route('/execute', methods=['POST'])
def execute():
    data = request.get_json()
    code = data.get('code', '')
    result = processor.process_code(code)
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
