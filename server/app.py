from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        return "adding data....."
    else:
        return f"Welcome to apna laundry"

@app.route('/support')
def support():
    return 'Welcome to the support page!'

@app.route('/billing')
def billing():
    return 'Welcome to the billing page!'

@app.route('/inventory')
def inventory():
    return 'Welcome to the inventory page!'

@app.route('/payments')
def payments():
    return 'Welcome to the payments page!'

if __name__ == '__main__':
    print("Server started")
    app.run(port=8000, debug=True)
