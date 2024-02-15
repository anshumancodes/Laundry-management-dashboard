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




@app.route('/api', methods=['GET', 'POST'])
def api():
    with open('laundry_data.json') as f:
        laundry_data = json.load(f)

    return jsonify(laundry_data)






@app.route('/dashboard/billing', methods=['POST'])
def createbilling():
       data = request.get_json()
       print(data)

       with open('laundry_data.json', 'r') as f:
        laundry_data = json.load(f)
        laundry_data.append(data)


       

       with open('laundry_data.json', 'w') as f:
        json.dump(laundry_data, f, indent=4)
        return jsonify(message="Data added to the file"), 201


      

    
   




if __name__ == '__main__':
    print("Server started")
    app.run(port=8000, debug=True)