const webpack=require('webpack');
const merge=require('webpack-merge');
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin');
const base=require('./webpack.base');


module.exports=merge(base,{
  devtool:'source-map',
  plugins:[
    new UglifyjsWebpackPlugin({
      sourceMap:true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});