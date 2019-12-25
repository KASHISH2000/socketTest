const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const PublicPath = path.join(__dirname + '/../public');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(PublicPath));

io.on('connection', (socket) => {
    console.log('New user Connected.');
    socket.on('disconnect', () => {
        console.log('User Disconnected.');
    })
    socket.emit('newEmail', {
        from: 'kashish@example.com',
        text: 'Hey! whats up?',
        createdAt: 123
    });
    socket.emit('newMessage', {
        from: 'andrew@example.com',
        text: 'Hello',
        createdAt: 123
    });
    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    });
    socket.on('createMessage', (newMsg) => {
        console.log('createMessage', newMsg);
    });

});    //to build an event.(connection,disconnect are predefined events.)



server.listen(port, () => {
    console.log(`Server is up at ${port}`);
});