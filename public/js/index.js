var socket = io();
socket.on('connect', function () {
    console.log('Connected to server.')
    socket.emit('createEmail', {
        to: 'jen@example.com',
        text: 'Heya!This is kashish'
    });
    socket.emit('createMessage', {
        to: 'jen@example.com',
        text: 'Heya!This is kashish'
    });
});
socket.on('disconnect', function () {
    console.log('Disconnected to server.')
});
socket.on('newEmail', function (email) {
    console.log('new Email', email)
});
socket.on('newMessage', function (newMessage) {
    console.log('new Message', newMessage)
})