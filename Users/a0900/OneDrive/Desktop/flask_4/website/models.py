# database model
# for user and posts

from . import db # import db from __init__.py
# from . import db
# import from current package (website)
from flask_login import UserMixin
from sqlalchemy.sql import func

class User(db.Model, UserMixin): # inherit db.Model and UserMixin
    # define the schema
    id = db.Column(db.Integer, primary_key=True) # including unique=True
    email = db.Column(db.String(150), unique=True) # not users can share the same email
    password = db.Column(db.String(150))
    user_name = db.Column(db.String(150))
    posts = db.relationship('Post') # add a post id each time a post is created
    # the Post is capitalized opposed to posts
    
class Post(db.Model): # 1 user can have many posts ; 1 post is created by 1 user
    id = db.Column(db.Integer, primary_key=True)
    # if id is not defined, it'll be auto-created
    # post_title = db.Column(db.String(100))
    post_content = db.Column(db.String(10000))
    date = db.Column(db.DateTime(timezone=True), default=func.now())
    # func.now() will auto-collect the time for us whenever we create a new post
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    # User class is referenced as lowercase in db
    # one user can have many posts
    # the db.Integer type must align
    # the foreign key refers to another column in another table in the db
    # the blueprint of an object to be stored in the db