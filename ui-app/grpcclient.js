var grpc = require('grpc');

var protoPath = require('path').join(__dirname, '../src/', 'protos');
var proto = grpc.load({root: protoPath, file: 'RABDgRPC.proto' });

//Create a new client instance that binds to the IP and port of the grpc server.
var rpc = new proto.RABDgRPC.Greeter('localhost:50051', grpc.credentials.createInsecure());



rpc.GetVer(proto.voidGRPC, function(error, version) {
    console.log(version);
});
