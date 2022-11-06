# url
# Store the standard route for our website
# That's where users enter by default
from flask import Blueprint, render_template
# this file is the blueprint of our application
# this file contains a bunch of routes and URLs

views = Blueprint('views', __name__)

@views.route('/') # URL to get to this endpoint

def home(): # this function will run whenever users enter our website
    return render_template("home.html") 
    # it's the main page (home page) of the site
    # the html will be rendered once you go to the slash route(enter the website)
    

