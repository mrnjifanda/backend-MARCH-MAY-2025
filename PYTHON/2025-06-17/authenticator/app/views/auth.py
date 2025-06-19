from flask import Blueprint, request, redirect, jsonify
from app.controllers.auth_controller import AuthController
from flask_login import current_user

auth_bp = Blueprint('auth', __name__)
@auth_bp.route('/login', methods=['GET', 'POST'])
def login():

    if current_user.is_authenticated:
        return redirect('admin.home')
    
    return AuthController.login()
