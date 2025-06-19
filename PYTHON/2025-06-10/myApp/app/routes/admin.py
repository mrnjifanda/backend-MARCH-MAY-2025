from flask import Blueprint, redirect, render_template, request, url_for
from app.models.Article import Article
from app import db

admin = Blueprint('admin', __name__)

@admin.route('/admin/list')
def list():
    articles = Article.query.order_by(
        Article.created_at.desc()
    ).all()

    return render_template('admin/list.html', articles=articles)

@admin.route('/admin/create', methods=['GET', 'POST'])
def create():

    if request.method == 'POST':

        title = request.form['title']
        content = request.form['content']

        new_article = Article(title=title, content=content)

        db.session.add(new_article)
        db.session.commit()
        return redirect(url_for('admin.list'))
    else:
        return render_template('admin/create.html')

@admin.route('/admin/edit/<int:id>', methods=['GET', 'POST'])
def edit(id):

    article = Article.query.get_or_404(id)
    if request.method == 'POST':

        article.title = request.form['title']
        article.content = request.form['content']
        db.session.commit()
        return redirect(url_for('admin.list'))
    else:
        return render_template('admin/edit.html', article=article)
    
@admin.route('/admin/delete/<int:id>')
def delete(id):

    article = Article.query.get_or_404(id)
    db.session.delete(article)
    db.session.commit()
    return redirect(url_for('admin.list'))

