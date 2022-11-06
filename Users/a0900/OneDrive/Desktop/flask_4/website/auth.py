from flask import Blueprint
from flask import render_template
from flask import request
from flask import flash
from flask import redirect
from flask import url_for
from .models import User
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
from . import db



auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST']) # can accept get and post requests
def login():
    # if request.method == 'POST':
    #     email = request.form.get()
    return render_template("login.html")

@auth.route('/logout')
def logout():
    return render_template("logout.html")

@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        print(email)
        user_name = request.form.get('user_name')
        print(user_name)
        password1 = request.form.get('password1')
        print(password1)
        password2 = request.form.get('password2')
        # applying message flashing in flask
        if len(email) < 4:
            flash('The email must be greater than 4 characters.', category='error')
            # error or success ; displayed in different colors
        elif len(user_name) < 2:
            flash('The user name must be greater than 1 character.', category='error')
        elif len(password1) < 7:
            flash('The password don\'t match.', category='error')
        elif password1 != password2:
            flash('The password must be at least 7 characters.', category='error')
        else:
            new_user = User(email=email,
                            user_name = user_name,
                            password=generate_password_hash(password1, method='sha256'))
            db.session.add(new_user)
            db.session.commit()
            flash('Account created!', category='success')
            return redirect(url_for('views.home'))
            # add user to database
    return render_template("sign_up.html")

# 2 requests:
# 1 get request
# loading a webiste, retrieving information
# retrieving the html

# 2 post request
# making changes to the state of the website
# add or change the informatino of the database
# when submitting sign up info, you are posting requests
# and the site(backend) should do something to the request