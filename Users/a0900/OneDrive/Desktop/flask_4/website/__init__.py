# __init__ will make website a python package
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import current_app as app
from os import path

db = SQLAlchemy() # don't add app
DB_NAME = "minor_project_database.db"


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = '33550336'
    # encrypt or secure the cookies and session data for the website
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    db.init_app(app) # connect database with app
    
    from .views import views # import views variables in views.py
    from .auth import auth
    
    app.register_blueprint(views, url_prefix = '/')
    app.register_blueprint(auth, url_prefix = '/')
    # all urls that are inside the prefix file must have the prefix
    
    from . import models
    # import models before creating the db
    
    with app.app_context():
        db.create_all()
    # create_database()
    
    return app

# def create_database():
#     if not path.exists(f'website/{DB_NAME}'):
#         print('Database created!')
#         db.create_all() # app is deprecated
#         print('Database created!')