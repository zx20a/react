var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('io connected')
  socket.emit('request', /* */); // emit an event to the socket
  io.emit('broadcast', /* */); // emit an event to all connected sockets
  socket.on('reply', function(){ /* */ }); // listen to the event
  
  
  setInterval(function() {
    io.emit('message');
  }, 1000 );
    
});
server.listen(3000);
