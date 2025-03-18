const home = (req, res) => {
    res.send("Hello, world !!!");
};

const about = (req, res) => {
    res.send("About us page !!!")
};

const blog = (req, res) => {
    res.send("All articles in the blog");
};

const article = (req, res) => {
    const params = req.params;
    const id = params.id
    res.send("One specific article with id: " + id);
};

const category = (req, res) => {
    // const { category, slug } = req.params;
    const category = req.params.category;
    const slug = req.params.slug;
    res.send(`Category is: ${category} and slug is: ${slug}`);
};

module.exports = { home, about, blog, article, category };
