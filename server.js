const express=require('express');
const webpack=require('webpack');
const webpackDevMiddleware=require('webpack-dev-middleware');

const  app=express();
const config=require('./webpack.config');
const compiler=webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.listen(8006,function () {
  console.log('启动项目了');
});

