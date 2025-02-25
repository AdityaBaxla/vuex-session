from flask import Flask, jsonify, request
from flask_cors import CORS 

app = Flask(__name__)

CORS(app)

items = [{ 'id': 1, 'name': 'apple', 'price': 120, 'emoji': '🍎' },
            { 'id': 2, 'name': 'carrot', 'price': 50, 'emoji': '🥕' },]


@app.get('/items')
def get_items():
    return jsonify(items)

@app.post('/items')
def add_item():
    data = request.get_json()
    items.append(data)
    return {'message' : 'item added'}


if __name__ == "__main__":
    app.run(debug=True)