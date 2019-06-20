//A função expres cria um servidor
const express = require('express');

//Para utilizar o mongodb
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


const app = express();
//Para permitir que o servidor seja acessado pelas views Reactjs e Native
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://localhost:27017/captainlingue', {
    useNewUrlParser: true,
});

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use(cors());
app.use(require('./routes'));

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));



server.listen(3333);