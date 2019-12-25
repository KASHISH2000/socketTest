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

    socket.on('createMessage', (newMsg) => {
        console.log('createMessage', newMsg);
        io.emit('newMessage', {
            from: newMsg.from,
            text: newMsg.text,
            createdAt: 123
        }); //emits msg to all connected systems
    });

});    //to build an event.(connection,disconnect are predefined events.)



server.listen(port, () => {
    console.log(`Server is up at ${port}`);
});