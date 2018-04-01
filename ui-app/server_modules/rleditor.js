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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleepAsync(ms) {
  console.log('Taking a break...');
  await sleep(ms);
  console.log('Two second later');
}
class RpcApi {
  setScriptFile (projectName, fileName, content) {
    return new Promise((resolve, reject) => {
      const SetScriptFileRequest = {
        Script: {Name: projectName},
        FileName: fileName,
        Content: content
      };
      rpc.SetScriptFile(SetScriptFileRequest, (err, resp) => {
        if (resp.Error == 0) {
          resolve();
        } else {
          console.log("SetScriptFile Error");
          console.log(resp.Error);
          reject(new Error('Intentional Error'))
        }
      })
    })
  }

  loadScript(projectName) {
    const scriptRequest = {
      Name: projectName
    };
    return new Promise((resolve, reject) => {
      rpc.LoadScript(scriptRequest, (err, res) => {
        resolve({Error:res.Ret.Error, ScriptIdx: res.Script.Idx});
      })
    })
  }

  setDebugMode(scriptIdx, mode) {
    const debugModeRequest = {
      Script: {Idx: scriptIdx},
      Mode: mode
    };
    return new Promise((resolve, reject) => {
      rpc.SetScriptDebugMode(debugModeRequest, (err, res) => {
        resolve(res);
      })
    })
  }

  runScript (scriptIdx) {
    const IdxRequest = {
      Idx: scriptIdx
    };
    return new Promise((resolve, reject) => {
      rpc.RunScript(IdxRequest, (err, res) => {
        resolve(res);
      })

    })
  }
}

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




router.post('/saveRl', asyncMiddleware(async (req, res, next) => {
  const rpcApi = new RpcApi();
  var srcNames = [];
  var srcContents = [];
  var luaSrcCount = 0;
  var readLuaSrcCount = 0;
  const {projectName, fileName, content} = req.body;
  console.log("rlEditor: /saveRl ");
  console.log(projectName);
  console.log(fileName);
  console.log(content);
  const resp = await rpcApi.setScriptFile(projectName, fileName, content);
  console.log('OK')
  res.end();
}))

router.post('/runRl', asyncMiddleware(async (req, res, next) => {
  const rpcApi = new RpcApi();
  var srcNames = [];
  var srcContents = [];
  var luaSrcCount = 0;
  var readLuaSrcCount = 0;
  const {projectName} = req.body;
  console.log("rlEditor: /runRL ");
  console.log("Project name: ", projectName);
  const {Error, ScriptIdx} = await rpcApi.loadScript(projectName);
  if (Error == 0) {
    console.log('set debug mode')
    const setDebugModeRes = await rpcApi.setDebugMode(ScriptIdx, proto.RABDgRPC.eX3LuaDebugMode.eDEBUG_UNTIL_BREAK);
    if (setDebugModeRes.Error == 0) {
      console.log('Run the project');
      const rep = await rpcApi.runScript(ScriptIdx);
      if (rep.Error == 0) {
        console.log("run lua OK")
        res.send('Run lua OK');
        res.end();
      }
    } else {
      res.send('Set debug mode error');
      res.end();
    }
  } else {
    res.send({Error: Error});
    res.end();
  }

}))

module.exports = router;
