var express = require('express');
var router = express.Router();
const fs = require('fs');
const c = require('./constants/Constants');
// gRPC
var grpc = require('grpc');
var protoPath = require('path').join(__dirname, '../../src/', 'protofile');
var proto = grpc.load({root: protoPath, file: 'RABDgRPC.proto' });
var rpc = new proto.RABDgRPC.Greeter('0.0.0.0:10051', grpc.credentials.createInsecure());
var rimraf = require('rimraf');


router.post('/', function(req, res) {
  res.sendStatus('Birds home page');
});
// define the about route
router.post('/about', function(req, res) {
  res.sendStatus('About birds');
});

router.post('/retriveProjects', (req, res) => {
  var dirNames = [];
  var birthTimes = [];
  var fileNames;
  var stats;
  var jObj;
  console.log("ProjectList: /retriveProjects ");
  try {
   fileNames = fs.readdirSync(c.PROJECTS_DIR);
  } catch (err) {
    console.log("readdirsync err")
    console.log(err)
  }

  fileNames.forEach((fileName) => {
    try {
      if (fs.existsSync(c.PROJECTS_DIR+"/"+fileName+"/LPT.bin")) {
        var stat = fs.statSync(c.PROJECTS_DIR+"/"+fileName);
        dirNames.push(fileName);
        //In Debian atime is not modified while accessing.
        birthTimes.push(stat.atime);
      }
    } catch (err) {
      console.log("statSync err")
      console.log(err)
      return
    }
  })
  jObj = JSON.stringify({projectNames: dirNames,
                         birthTimes: birthTimes,
    })
  console.log(jObj)
  res.send(jObj);
});

router.post('/newProject', function(req, res) {
  console.log("POST: newProject");
  console.log(req.body.name);
  const script = {
    Name: req.body.name
  };
  rpc.NewScript(script, (err, resp) => {
    if (err == null) {
      console.log(resp);
      res.send({errCode: resp.Error});
    } else {
      console.log("RPC NewScript Error");
      console.log(resp);
      res.send({errCode: 0xFFFF});
    }
  })
});

router.post('/rmProject', function(req, res) {
  console.log("POST: rmProject");
  console.log(req.body.name);
  if (req.body.name != "") {
    try {
      rimraf.sync(c.PROJECTS_DIR+"/"+req.body.name);
      console.log("rimraf.sync done.")
      res.send({errCode: 0});
    } catch (err) {
      console.log("rimraf.sync err")
      console.log(err)
      res.send({errCode: 0xFFFF});
    }
  } else {
    console.log("project name is null")
    res.send({errCode: 0xFFFF});
  }
});

module.exports = router;
