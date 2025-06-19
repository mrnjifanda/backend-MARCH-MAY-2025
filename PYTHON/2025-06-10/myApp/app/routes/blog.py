from flask import Blueprint, render_template
from app.models.Article import Article

article = Blueprint('main', __name__)

@article.route('/')
def home():
    articles = Article.query.order_by(
        Article.created_at.desc()
    ).all()

    return render_template('home.html', articles=articles)

@article.route('/article/<int:id>')
def view(id):

    article = Article.query.get_or_404(id)
    return render_template('article.html', article=article)
