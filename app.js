const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = new express();
const server = http.createServer(app);

const host = 'http://localhost';
const port = 3001;

app.use(
    bodyParser.urlencoded({ extended: false }),
    express.static(__dirname + '/public'),
);

server.listen(port, () => console.log(`Server running at port ${port}. ${host}:${port}`));