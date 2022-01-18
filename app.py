# Runner of website
from flask import Flask, render_template, redirect, url_for, request
from datetime import datetime
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")
    

@app.route("/<usr>")
def user(usr):
    return f"{usr}"
if __name__ == "__main__":
    app.run(debug=True)