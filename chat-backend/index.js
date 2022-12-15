const http = require('http').createServer();
const io= require("socket.io")(http, {
    cors: {
        origin: "http://localhost:5173"
    }
})
// let rooms={}
let users = {};
io.on('connection',(socket)=>{
    console.log("new connection")
    // console.log(socket)
    socket.on('set-name', (name)=>{
        socket.data.username = name;
        console.log(socket.data.username)
    })
    socket.on('join-room', (room)=>{
        const rr=socket.rooms;
        socket.leave(rr);
        socket.join(room);
        console.log(room)
        // socket.to(room).emit()
        // console.log('name: ', name)
        // socket.data.username = name;
        // io.to(room).broadcast.emit('new-user', socket.data.username);
        //get 
        // users[socket.id]=name;
        // io.emit('user-list', Object.values(users))
    });
    socket.on('disconnect', ()=>{
        const rr= socket.rooms; //the rooms where it was connected
        socket.to(rr).emit('left', socket.data.username);
        socket.leave(rr);
        // delete users[socket.id];
    });
    socket.on('unsubscribe', (room)=>{
        socket.to(room).emit('left', socket.data.username)
        socket.leave(room);
    })
    socket.on('chat-message', (msg,room)=>{
        console.log(msg)
        console.log(socket.rooms)
        socket.to(room).emit('message', {"message": msg, "by": socket.data.username})
    });
    socket.on('test',(msg)=>{
    	console.log("testing "+msg);
    	socket.emit('testing',msg);
    })
});
const PORT = process.env.PORT || 8000;
http.listen(PORT, ()=> console.log(`server listening at http://localhost:${PORT}`));
