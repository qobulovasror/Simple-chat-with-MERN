const express = require('express');
const app = express();
const http = require('http');
require('dotenv').config();
require('./services/db')();
app.use(express.json());
app.use(express.urlencoded());
require('./startup/startup')(app);
const server = http.createServer(app);
require('./startup/chatSocket')(server)


server.listen(5000, () => 'Server is running on port 5000');