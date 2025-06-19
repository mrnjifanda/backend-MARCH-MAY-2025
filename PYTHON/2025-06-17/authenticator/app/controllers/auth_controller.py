from flask import flash, redirect, render_template, request, url_for
from app.forms.auth_form import LoginForm
from flask_login import login_user
from app.models.User import User

class AuthController:

    @staticmethod
    def login():

        form = LoginForm()

        if form.validate_on_submit():

            email = form.email.data
            password = form.password.data

            user = User.get_user_by_email(email)

            if user and user.check_password(password):

                if user.is_active:
                    login_user(user)
                    user.update_last_login()

                    next_page = request.args.get('next')
                    if next_page:
                        return redirect(next_page)
                    
                    flash("Login successful", "success")
                    return redirect(url_for('admin.dashboard'))
                else:
                    flash("Your account is inactive. Please contact support.", "warning")
                    return redirect(url_for('auth.login'))
            else:
                flash("Invalid email or password", "danger")
                return redirect(url_for('auth.login'))

        return render_template(
            'auth/login.html',
            form=form,
            title="Login"
        )