const express = require('express');
const app= express();
const http = require('http');
const expressServer = http.createServer(app);

const {Server} = require('socket.io');
let io = new Server(expressServer)

app.get('/',function (req,res){
    res.sendFile(__dirname+"/index.html")
})


io.on('connection', function(socket){
    socket.on('chat',function (msg){
        io.emit('chat_transfer',msg)
    })
})

expressServer.listen(5000, function(){
    console.log("Server Run At 5000");
})