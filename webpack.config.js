const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
module.exports={
  entry: {
    app:'./src/main.js',
    print:'./src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'dist'),
    publicPath: '/'
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase:'./dist',
    port: 8006
  },
  module: {
    rules: [
      {
        test:/.css$/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.js/,
        use:['babel-loader']
      },
      {
        test:/\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit:1000
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use:['url-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'Output Management'
    })
  ]
};