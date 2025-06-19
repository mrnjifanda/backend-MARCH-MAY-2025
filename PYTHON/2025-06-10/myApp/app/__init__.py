from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config

db = SQLAlchemy()

def create_app():

    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)

    from app.routes.blog import article
    from app.routes.admin import admin

    app.register_blueprint(article)
    app.register_blueprint(admin)

    with app.app_context():
        db.create_all()

    return app