from flask import render_template
from flask_login import current_user

class MainController:

    @staticmethod
    def home():
        return render_template(
            'main/home.html',
            title="Home",
            current_user=current_user if current_user.is_authenticated else None
        )
