from manim_validator import ManimValidator
from manim_executor import ManimExecutor
from flask import Flask, request, jsonify, send_file
import base64
from io import BytesIO

app = Flask(__name__)
validator = ManimValidator()
executor = ManimExecutor()

last_video = None

@app.route('/correct', methods=['POST'])
def correct():
    data = request.get_json()
    code = data.get('code', '')
    result = validator.correct_manim_code(code)
    return jsonify(result)

@app.route('/validate', methods=['POST'])
def validate():
    data = request.get_json()
    code = data.get('code', '')
    result = validator.correct_manim_code(code)
    return jsonify(result)

@app.route('/execute', methods=['POST'])
def execute():
    global last_video
    data = request.get_json()
    code = data.get('code', '')
    result = executor.execute_manim_code(code)
    if result.get('success'):
        last_video = result.get('file')
    return jsonify(result)

@app.route('/download', methods=['GET'])
def download():
    if not last_video:
        return "No video available", 404
    
    video_bytes = BytesIO(base64.b64decode(last_video))
    return send_file(video_bytes, mimetype='video/mp4', as_attachment=True, download_name='output.mp4')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
