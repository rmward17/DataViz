# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
# CODE GOES HERE
app = Flask(__name__)
# @TODO: Create a list of dictionaries
pets = [
    {"name": "Fido", "type": "Lab"},
    {"name": "Spot", "type": "Dalmation"},
    {"name": "Artie", "type": "French Terrier"}
]

# @TODO:  Create a route and view function that takes in a dictionary and renders index.html template
# CODE GOES HERE
@app.route("/")
def index(dict):
    return render_template('index.html')
    
if __name__ == "__main__":
    app.run(debug=True)
