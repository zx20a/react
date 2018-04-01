var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
var async = require('async');
const c = require('./constants/Constants');
// gRPC
var grpc = require('grpc');
var protoPath = require('path').join(__dirname, '../../src/', 'protofile');
var proto = grpc.load({root: protoPath, file: 'RABDgRPC.proto' });
var rpc = new proto.RABDgRPC.Greeter('0.0.0.0:10051', grpc.credentials.createInsecure());
var rimraf = require('rimraf');

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

router.post('/', function(req, res) {
  res.sendStatus('Birds home page');
});
// define the about route
router.post('/about', function(req, res) {
  res.sendStatus('About birds');
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleepAsync(ms) {
  console.log('Taking a break...');
  await sleep(ms);
  console.log('Two second later');
}

function rpcCall(projectName, srcNames) {
  return new Promise((resolve, reject) => {
    const scriptFile = {
      Script: {Name: projectName},
      FileName: srcNames,
    };
    rpc.GetScriptFile(scriptFile, (err, resp) => {
        if (resp.Ret.Error == 0) {
          // console.log(resp.Content)
          resolve(resp.Content)
        } else {
          console.log("GetScriptFile Error");
          console.log(resp.Ret.Error)
          reject(new Error('Intentional Error'))
        }
    })
  })
}


router.post('/retriveSrcs', asyncMiddleware(async (req, res, next) => {
  var srcNames = [];
  var srcContents = [];
  var luaSrcCount = 0;
  var readLuaSrcCount = 0;

  const projectName = req.body.name;
  console.log("SourceTabs: /retriveSrcs ");
  console.log(projectName);
  const PATH = c.PROJECTS_DIR+"/"+projectName;
  var isCallEnd = false;
  fs.readdir(c.PROJECTS_DIR+"/"+projectName, async (err, fileNames) => {
    for (name of fileNames) {
      if (path.extname(name) == ".lua") {
        srcNames.push(name);
        const content = await rpcCall(projectName, name);
        srcContents.push(content);
      }
    }
    res.send({srcNames: srcNames, srcContents: srcContents})
  })
}))

module.exports = router;
