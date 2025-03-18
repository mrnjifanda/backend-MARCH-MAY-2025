const express = require('express');
const callbacks = require('./logic/callbacks')

const app = express();
app.use(express.json());

app.get("/", callbacks.home);
app.get("/about-us", callbacks.about);
app.get("/blog", callbacks.blog);
app.get("/blog/:id", callbacks.article);
app.get("/blog/:category/:slug", callbacks.category);

app.listen(3000, () => {
    console.log("Application running in http://localhost:3000");
});