# import necessary libraries
from flask import Flask, render_template, flash

# @TODO: Initialize your Flask app here
# CODE GOES HERE
app = Flask(__name__)
# @TODO: Create a list of dictionaries
animals = [
    {"name": "Airbud", "type": "Golden Retriever"},
    {"name": "Buster", "type": "Pitbull"},
    {"name": "Nike", "type": "Cat"}
]

# @TODO:  Create a route and view function that takes in a dictionary and renders index.html template
# CODE GOES HERE
@app.route("/")
def index():
    return render_template("index.html", length = len(animals), pets = animals)
    
    
if __name__ == "__main__":
    app.run(debug=True)
