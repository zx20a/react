var path = require('path');
var bodyParser = require('body-parser');
const fs = require('fs');
//servers
var http = require('http');
var express = require('express');
const url = require('url');
const cors = require('cors');
var app = express();
var router = express.Router();
// ws
const WebSocket = require('ws');
// node-red
var RED = require("node-red");
// webpack
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);
// gRPC
var grpc = require('grpc');
var protoPath = require('path').join(__dirname, '../src/', 'protofile');
var proto = grpc.load({root: protoPath, file: 'RABDgRPC.proto' });
var rpc = new proto.RABDgRPC.Greeter('0.0.0.0:10051', grpc.credentials.createInsecure());

var count = 1
// Other server modules
var projectList = require('./server_modules/projectlist');
var sourceTabs = require('./server_modules/sourcetabs');
var rlEditor = require('./server_modules/rleditor');

////Mqtt
var mqtt = require('mqtt')
var mqttclient  = mqtt.connect('mqtt://localhost:1883')

mqttclient.on('connect', function () {
  mqttclient.subscribe('test')
})

mqttclient.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
})


var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('io connected')
  socket.emit('request', /* */); // emit an event to the socket
  io.emit('broadcast', /* */); // emit an event to all connected sockets
  socket.on('reply', function(){ /* */ }); // listen to the event


  // setInterval(function() {
  //   count++;
  //   console.log(count);
  //   io.emit('message', count);
  // }, 1000 );

});
server.listen(3000);


//Node-Red
// Create a server
// var redServer = http.createServer(app);
//
// var redSettings = {
//     httpAdminRoot:"/red",
//     httpNodeRoot: "/api",
//     userDir:"./nodered/",
//     functionGlobalContext: { }    // enables global context
// };
//
// // node red settings
// RED.init(redServer, redSettings);
//
// redServer.listen(1880);
//
//
// // Serve the editor UI from /red
// app.use(redSettings.httpAdminRoot,RED.httpAdmin);
// // Serve the http nodes UI from /api
// app.use(redSettings.httpNodeRoot,RED.httpNode);
//
// RED.start();

// app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(express.static(path.resolve(__dirname, 'dist')));

sourceTabs

app.use('/projectList', projectList);
app.use('/sourceTabs', sourceTabs);
app.use('/rlEditor', rlEditor);
const test1 = (req, res) => {
  console.log("test1");
}
// app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(8000, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  rpc.GetVer(proto.voidGRPC, (error, version) => {
    if (version != null) {
      console.log("RADSRobotics: "+version.Ver)
    } else {
      console.log("RADSRobotics is not started.")
    }
  });
  console.log('Listening at http://localhost:8000');
});


app.post('/tests/c', (test1));
