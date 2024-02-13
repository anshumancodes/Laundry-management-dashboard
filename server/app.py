from flask import Flask,request,jsonify
import json


app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return f"welcome to suddhi home page"



@app.route('/inventory', methods=['GET'])
def inventory():
     with open('laundry_data.json') as f:
        laundry_data = json.load(f)
        if(request.method=='GET'):
             return jsonify(laundry_data)
   
      

 
       
    

@app.route('/support')
def support():
    return 'Welcome to the support page!'

@app.route('/billing')
def billing():
    return 'Welcome to the billing page!'



@app.route('/payments')
def payments():
    return 'Welcome to the payments page!'

if __name__ == '__main__':
    print("Server started")
    app.run(port=8000, debug=True)
