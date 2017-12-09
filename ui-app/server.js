var path = require('path');
var express = require('express');
var app = express();
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// app.use(express.static(path.resolve(__dirname, 'dist')));
// app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(8000, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8000');
});
