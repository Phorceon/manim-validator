#!/usr/bin/env python3
import json
import os

try:
    import google.generativeai as genai
    GEMINI_AVAILABLE = True
except ImportError:
    GEMINI_AVAILABLE = False

from flask import Flask, request, jsonify

class ManimValidator:
    def correct_manim_code(self, code: str) -> dict:
        """Validate and correct Manim code using Gemini"""
        
        if GEMINI_AVAILABLE:
            try:
                api_key = os.getenv("GOOGLE_API_KEY")
                if not api_key:
                    return {"error": "GOOGLE_API_KEY not set"}
                
                genai.configure(api_key=api_key)
                model = genai.GenerativeModel("gemini-2.5-flash")
                
                prompt = f"""Check if this Manim code is valid. If there are errors, fix them. Return ONLY the corrected code in a code block.

CODE:
````python
{code}
```"""
                
                response = model.generate_content(prompt)
                corrected_code = response.text
                
                if "```python" in corrected_code:
                    corrected_code = corrected_code.split("```python")[1].split("```")[0].strip()
                elif "```" in corrected_code:
                    corrected_code = corrected_code.split("```")[1].split("```")[0].strip()
                
                return {
                    "corrected": True,
                    "code": corrected_code
                }
            except Exception as e:
                return {"error": str(e)}
        
        return {"error": "Gemini not available"}

app = Flask(__name__)
validator = ManimValidator()

@app.route('/correct', methods=['POST'])
def correct():
    data = request.json
    result = validator.correct_manim_code(data.get('code', ''))
    return jsonify(result)

@app.route('/validate', methods=['POST'])
def validate():
    data = request.json
    result = validator.correct_manim_code(data.get('code', ''))
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
