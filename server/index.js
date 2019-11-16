var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  console.log('a user connected');
  io.emit('user status', "a user connected");
  socket.on('disconnect', function(){
    console.log('user disconnected');
    io.emit('user status', "a user disconnected");
  });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    socket.broadcast.emit('chat message', msg);
  });
});
