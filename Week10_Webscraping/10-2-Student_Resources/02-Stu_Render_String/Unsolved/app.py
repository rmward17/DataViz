# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
app = Flask(__name__)
# @TODO:  Create a route and view function that takes in a string and renders index.html template
@app.route("/")
def index():
    return render_template("index.html", name='Amy', hobby='yoga')

#def index():
    #return render_template("index.html", name='Rachel', hobby='cooking')
@app.route("/bonus")
def bonus():
    return render_template('bonus.html', name='Amy', hobby='yoga')

if __name__ == "__main__":
    app.run(debug=True)
