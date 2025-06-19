from flask import Blueprint

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
@main_bp.route('/home')
def home():

    return MainController.home()
