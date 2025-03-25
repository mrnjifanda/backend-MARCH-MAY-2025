// Exo Use fs module and Promise to clone google home page

const fs = require('fs')

fetch('https://www.google.com')
    .then(response => response.text())
    .then(page => {

        const replace_url_in_page = page.replaceAll("/images/", "https://www.google.com/images/")
        fs.writeFile('google.html', replace_url_in_page, (error) => {
            console.log(error);
        })
    })
    .catch(error => {
        console.log(error);
    })
