// gRPC
var grpc = require('grpc');
var protoPath = require('path').join(__dirname, '../src/', 'protos');
var proto = grpc.load({root: protoPath, file: 'RABDgRPC.proto' });
var rpc = new proto.RABDgRPC.Greeter('0.0.0.0:10051', grpc.credentials.createInsecure());

const scriptFile = {
  Script: {Name: "BBB"},
  FileName: "main.lua",
};


class Api {
  constructor () {
    this.user = { id: 1, name: 'test' }
    this.friends = [ this.user, this.user, this.user ]
    this.photo = 'not a real photo'
  }

  getUser () {
    return new Promise((resolve, reject) => {
      //setTimeout(() => resolve(this.user), 200)
        rpc.GetScriptFile(scriptFile, (err, resp) => {
            console.log('in')
            console.log(scriptFile.FileName)
            if (resp.Ret.Error == 0) {
                srcContents.push(resp.Content);
                console.log(resp.Content)
            } else {
                console.log("GetScriptFile Error");
                console.log(resp.Ret.Error)
            }
            resolve(resp.Content)
        })
         
    })
  }

  getFriends (userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.friends.slice()), 200)
    })
  }

  getPhoto (userId) {
    return new Promise((resolve, reject) => {
      //setTimeout(() => resolve(this.photo), 200)
      resolve(this.photo)
    })
  }

  throwError () {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Intentional Error')), 200)
    })
  }
}


async function asyncAwaitIsYourNewBestFriend () {
  const api = new Api()
  const user = await api.getUser()
  const friends = await api.getFriends(user.id)
  const photo = await api.getPhoto(user.id)
  console.log('asyncAwaitIsYourNewBestFriend', { user, friends, photo })
  console.log('done');
}
var srcNames = [];
var srcContents = [];
asyncAwaitIsYourNewBestFriend()


array = [1, 2 ,3];
index = 1;
array.splice(index, 1);
array.splice(index, 0, 9);
index = 3;
array.splice(index, 1);
array.splice(index, 0, 9);

console.log(array)

