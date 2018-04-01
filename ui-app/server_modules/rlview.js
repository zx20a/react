var express = require('express');
var router = express.Router();
const fs = require('fs');
const c = require('./constants/Constants');
// gRPC
var grpc = require('grpc');
var protoPath = require('path').join(__dirname, '../../src/', 'protofile');
var proto = grpc.load({root: protoPath, file: 'RABDgRPC.proto' });
var rpc = new proto.RABDgRPC.Greeter('0.0.0.0:10051', grpc.credentials.createInsecure());


// // middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });
// define the home page route
router.post('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.post('/about', function(req, res) {
  res.send('About birds');
});

router.post('/retriveProjects', (req, res) => {
  var dirNames = [];
  var birthTimes = [];
  var fileNames;
  var stats;
  var jObj;
  console.log("RlView: /retriveProjects ");
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
    console.log(resp);
    if(resp.Error == 0) {
      console.log('OK');
      res.send(resp.Error);
      res.end("OK");
    } else {
      res.send(resp.Error);
      res.end("Error.");
    }
  })
});

router.post('/saveRl', (req, res) => {
  console.log("POST: Save RL");
  console.log(req.body.fileName);
  var fileName = req.body.fileName;
  var content = req.body.rlCode;

  fs.writeFile("../bin/linux/"+fileName, content, (err) => {
    if(err) {
      res.send('Write RL failed.');
      return console.log(err);
    }
    console.log("The file was saved!");
  });
  var script = {
    Name: 'test',
  };
  rpc.NewScript(script, (err, res) => {
    console.log(res);
    if(res.Error == 0) {
      console.log('OK');
      res.end("OK");
    } else {
      res.end("Error.");
    }
  })
});

router.post('/runRl', (req, res) => {
  console.log("POST: Run RL");
  console.log(req.body.fileName);

  rpc.LoadScript(proto.voidGRPC, (error, res) => {
      console.log(version);
  });
  res.end("OK");
});
module.exports = router;
