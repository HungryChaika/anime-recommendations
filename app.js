const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = new express();
const server = http.createServer(app);

const host = 'http://localhost';
const port = 3001;

const DB = require('./application/DB/DB');
const db = new DB();

app.use(
    bodyParser.urlencoded({ extended: false }),
    express.static(__dirname + '/public'),
);

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
  })
  

server.listen(port, () => console.log(`Server running at port ${port}. ${host}:${port}`));