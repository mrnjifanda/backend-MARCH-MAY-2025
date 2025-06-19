from flask import abort, render_template
from app.models import User
from flask_login import current_user

class MainController:

    @staticmethod
    def dashboard():

        if not current_user.is_authenticated:
            abort(403)

        users = User.get_all_users()
        user_count = len(users)
        admin_count = len([user for user in users if user.is_admin])    
        stats = {
            'user_count': user_count,
            'admin_count': admin_count,
            'regular_users': user_count - admin_count
        }

        return render_template(
            'admin/dashboard.html',
            title="Admin Dashboard",
            users=users,
            stats=stats
        )
