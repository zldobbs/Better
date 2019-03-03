/* Backend server */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {origins: 'http://localhost:3000'});

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

app.io = io;

// routes
const usersAPI = require('./routes/api/users');
const feedAPI = require('./routes/api/feed');
const messagesAPI = require('./routes/api/messages');
app.use('/api/users', usersAPI);
app.use('/api/feed', feedAPI);
app.use('/api/messages', messagesAPI);

// database
const db = require('./model/database')

// set port and launch server
const port = 4000;
server.listen(port, () => console.log('Server started on port ' + port));
