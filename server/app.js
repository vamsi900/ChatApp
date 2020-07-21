const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const http = require("http");

server.listen(3000, () => {
  console.log("Listening on port 3000");
});

io.on('connection', (socket) => {
    console.log('New connection made')

    socket.on('join', function(data) {
        socket.join(data.room);
        console.log(data.user + "joined the room" + data.room);
        socket.broadcast.to(data.room).emit('new user joined', {user:data.user, message: 'has joined this room.'});
    })

    socket.on('leave', function(data) {
        console.log(data.user + " left the room " + data.room);
        socket.broadcast.to(data.room).emit('left room', {user:data.user, message: ' has left this room.'});
        socket.leave(data.room);
    })

    socket.on('message', function(data) {
        io.in(data.room).emit('new message', {user: data.user, message: data.message});
        
    })
})