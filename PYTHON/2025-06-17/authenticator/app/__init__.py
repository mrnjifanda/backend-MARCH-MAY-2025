from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_bcrypt import Bcrypt
from config import Config

# Initiate DB
db = SQLAlchemy()
login_manager = LoginManager()
bcrypt = Bcrypt()

def create_default_admin():
    pass

def create_app(config_class=Config):

    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)
    login_manager.init_app(app)
    bcrypt.init_app(app)

    login_manager.login_view = 'auth.login'
    login_manager.login_message = 'Please log in to access this page.'
    login_manager.login_message_category = 'info'

    # Import all blueprints here

    with app.app_context():
        db.create_all()
        # create_default_admin()

    return app

