const express = require('express')

const app = express();

app.get('/', (request, response) => {
    response.send('Hello, word :!!!')
})

app.get('/about-us', (request, response) => {

    const fruits = ['mangos', 'appel', 'orange', 'banana']
    let allFruits = ''
    fruits.forEach(fruit => {
        allFruits += ' ' + fruit;
    })
    response.send("Welcom to About us page all fruits: " + allFruits)
})  

app.listen(3000, () => {
    console.log("Your application listening on http:localhost:3000");
})