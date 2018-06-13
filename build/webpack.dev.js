const merge=require('webpack');
const base=require('./webpack.base');
module.exports=merge(base,{
  devtool: "inline-source-map",
  devServer: {
    contentBase:'./dist',
    port:8006,
    host:'localhost',
    open:true,
    publicPath:'/'

  },
});