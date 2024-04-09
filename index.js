const express = require('express');
const app= express();
const http = require('http');
const expressServer = http.createServer(app);


app.get('/',function (req,res){
    res.sendFile(__dirname+"/index.html")
})

expressServer.listen(5000, function(){
    console.log("Server Run At 5000");
})