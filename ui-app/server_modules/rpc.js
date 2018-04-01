// gRPC
var grpc = require('grpc');
var protoPath = require('path').join(__dirname, '../../src/', 'protofile');
var proto = grpc.load({root: protoPath, file: 'RABDgRPC.proto' });
var rpc = new proto.RABDgRPC.Greeter('0.0.0.0:10051', grpc.credentials.createInsecure());
