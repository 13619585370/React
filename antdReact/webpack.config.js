var webpack = require('webpack');
var nginx = 'http://newsapi.gugujiankong.com';
module.exports = {
  entry: __dirname + "/app/js/root.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true,
    stats: {
      chunks: false
    },
    inline: true,
    port: 8088,
    proxy: {
      '/Handler.ashx': {
        target: nginx,
        secure:false,
        changeOrigin: true
      }
    }
  },
  module: {
    loaders: [
      //配置json格式的转换
      {
        test: /\.json$/,
        loader: "json-loader"
      }, {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader"
        //！的意思是同一个文件用两种方案去处理
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=8129"
      }
    ]
  }
}
