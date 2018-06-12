const path=require('path');


module.exports={
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,'dist')
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
            loader: "url-loader",
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
  }
};