from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def index():
    return f"welcome to suddhi home page"

@app.route('/inventory', methods=['GET'])
def inventory():
    with open('laundry_data.json') as f:
        laundry_data = json.load(f)
        isActive = 0  # Initialize the counter for active items
        isreceived = 0  
        yetToReceive=isActive-isreceived
        
        for item in laundry_data:
            if item["Active"]:
                isActive += 1
                # isreceived-=isreceived
            if item["received"]:
                isreceived+=1  
       
          

            sumData={
                 "active_count": isActive,
                 "received_Total":isreceived,
                 "yet_toRecieve":isActive-isreceived

            }
                
        return jsonify(sumData)







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