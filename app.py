from flask import Flask, render_template, jsonify, send_from_directory
import json
import os

app = Flask(__name__)

DATA_FILE = os.path.join(os.path.dirname(__file__), 'content.json')

def load_content():
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

@app.route('/')
def index():
    data = load_content()
    return render_template('index.html', 
                       news=data['news'],
                       badges=data['badges'],
                       categories=data['categories'])

@app.route('/api/news')
def api_news():
    data = load_content()
    return jsonify(data)

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('static', filename)

@app.route('/favicon.ico')
def favicon():
    return send_from_directory('.', 'favicon.ico')

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)