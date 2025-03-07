const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Welcom on my first nodejs app')
});

server.listen(5050, () => {
    console.log("Application running on port 5050")
});