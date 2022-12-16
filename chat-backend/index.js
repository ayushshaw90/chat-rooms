const express= require('express');
const path=require('path')
const app= express()
const http = require('http').createServer(app);
const io = require("socket.io")(http, {
    cors: {
        origin: ["http://localhost:5173", "http://127.0.0.1"]
    }
})
app.use(express.static(path.join(__dirname, 'frontend')))
io.on('connection', (socket) => {
    console.log("new connection")
    socket.on('set-name', (name) => {
        socket.data.username = name;
        console.log(socket.data.username)
    })
    socket.on('join-room', async (room) => {
        console.log('join', socket.id);
        const rr = socket.data.prevroom;
        if (rr) {
            socket.leave(rr);
            const ss = await io.in(rr).fetchSockets();
            var userlist2 = ss.map(e => e.data.username);
            io.in(rr).emit('user-list', userlist2);
        }
        socket.join(room);
        socket.data.prevroom = room;
        console.log(room)
        const socks = await io.in(room).fetchSockets();
        var userlist = socks.map(e => {
            return e.data.username
        })
        io.to(socket.id).emit('user-list', userlist);
        socket.in(room).emit('user-list', userlist);
    });
    socket.on('disconnect', async () => {
        const rr = socket.data.prevroom; //the room where it was connected before
        if (rr) {
            io.to(rr).emit('left', socket.data.username);
            socket.leave(rr);
            const ss = await io.in(rr).fetchSockets();
            var userlist = ss.map(e => e.data.username);
            io.to(rr).emit('user-list', userlist);
        }
    });
    socket.on('unsubscribe', (room) => {
        socket.to(room).emit('left', socket.data.username)
        socket.leave(room);
    })
    socket.on('chat-message', (msg, room) => {
        console.log(msg)
        console.log(socket.rooms)
        socket.to(room).emit('message', { "message": msg, "by": socket.data.username })
    });
});
const PORT = process.env.PORT || 8000;
http.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}`));
