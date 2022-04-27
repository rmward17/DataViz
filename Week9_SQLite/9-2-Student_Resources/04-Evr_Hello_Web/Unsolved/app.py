# 1. Import Flask
import flask

# 2. Create an app
app = flask(__name__)

# 3. Define index route
@app.route("/")
def index():
    return("Hello World")
# 4. Define the about route
@app.route("/about")
def about():
    name = "Rachel"
    location = "America"
    return f"My name is {name}, and I live in {location}."

# 5. Define the contact route


# 6. Define main behavior
