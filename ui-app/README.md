# React UI Application

## 1. Install dependency 
- Install dependency

```sh
    sudo apt-get install libtool autoconf automake m4 nasm pkg-config gettext libtool pngquant libpng-dev libkrb5-dev libzmq3-dev
```

- Install nvm, npm and node

Get nvm and check the version.

```sh
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
    source ~/.bashrc
    nvm -v
```

Use nvm to install node v8 (LTS).

```sh    
    nvm install 8
```
## 2. Install modules and start server
- Install modules
In the ui root directory...

```sh
    npm install
```

- Start server

Fire up the server

port: 8000

Node-Red path: /red

```sh
    node server.js
```
## 3. Webpack build for distribution

Build the applicatoin to `dist` folder
```sh
    npm run build
```


## 4. Bugs and Workaround
### - Note: It runs module in JS version if the fix is not applied.
- bson MODULRS_NOT_FOUND

Replace each:

`bson = require('../build/Release/bson');` in node_modules 
with:

`bson = require('bson');`





