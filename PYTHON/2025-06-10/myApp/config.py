import os

class Config:
    SQLALCHEMY_DATABASE_URI='mysql+pymysql://root:password@127.0.0.1:3306/new_level_4_flask'
    SQLACHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'secret_key'