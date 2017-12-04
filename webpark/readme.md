1.为什么要使用webpack
  1.模块化
  2.编译的工作：es6->es5  typescript->js  cofferscript-js
  3.Scss,less
  ...
  4.他和gulp和grunt的区别
  5.自带服务器：基于node的服务器

--------------------------------------------------------------

2.安装webpack
  1.安装全局的webpack
    命令：npm install -g webpack
  2.初始化生成package.json文件（进入到当前项目文件中）
    文件意义：存储开发者信息，存储当前第三方依赖插件的版本等
    命令：npm init
  3.安装项目依赖的webpack
    命令：npm install webpack --save-dev
  4.创建文件夹app和build
    app：保存源码
    build：编译之后的文件
  5.在build文件夹下创建index.html文件
    文件中添加根元素
  6.在app文件夹下创建app.js和hello.js文件
    hello.js:
      module.exports = function(){
        var hello = document.createElement("div");
        hello.textContent = "Hello";
        return hello;
      }
    app.js:
      var Hello = require("./hello.js");
      document.getElementById("root").appendChild(Hello);
  7.使用webpack编译:
    命令：webpack  路径/入口文件   路径/出口文件
    webpack app/app.js build/bundle.js
  8.在index.html文件中引入编译之后生成的bundle.js文件
    在浏览器中执行

3.编写webpack配置文件
  1.在项目根目录下创建webpack.config.js文件
  2.配置webpack.config.js文件
    1.entry:入口文件路径
    2.output:输出文件
    3.__dirname:nodejs中的路径获取方案
    4.配置代码：
      module.exports = {
        entry:__dirname+"/app/app.js",
        output:{
          path:__dirname+"/build",
          filename:"bundle.js"
        }
      }
    5.执行：webpack
-------------------------------------------------------------

4.让调试变得更容易
  生成错误信息文件
  配置webpack.config.js文件
  添加devtool:"eval-source-map"

------------------------------------------------------------

5.快捷的执行方式
  注意：以下配置是在package.json文件中书写
  "scripts": {
    "start":"webpack"
  }
  执行：npm start

-------------------------------------------------------------

6.创建webpack服务器（注意：webpack的服务器是基于nodejs）
  1.webpack服务器全局安装
    命令：npm install -g webpack-dev-server
  2.安装项目依赖
    命令：npm install webpack-dev-server --save-dev
  3.webpack的服务器默认端口是8080，可以通过port进行修改
  4.运行webpack服务器
    启动：webpack-dev-server
  5.配置服务器
    注意：以下配置是在package.json文件中书写
    "scripts": {
      "start": "webpack",
      "build": "webpack-dev-server"
    }
    运行：npm run build
  6.配置热更新
    命令：webpack-dev-server --content-base build --inline --hot
  7.将热更新命令加入到配置中：
  		"scripts": {
  		    "start": "webpack",
  		    "build": "webpack-dev-server --content-base build --inline --hot"
  		}
      运行：npm run build
  8.服务器参数：
		content-base:默认路径的文件
		port:端口，默认8080
		color：在控制台可以看到不一样颜色的内容
		inline hot：主动刷新页面

--------------------------------------------------------------

7.Loaders：
    loader是webpack可以通过配置脚本，或者外部依赖来执行一些功能
      1.配置loader需要在webpack.config.js文件下:
        1.test:一个匹配loader要做操作的文件的一个正则表达式（必须）
        2.loader：loader要执行的任务的名字（必须）
        3.query:为loader提供一些外部选项配置
      2.json格式的数据转化成js的对象
          1.安装一个json的loader：
            1.命令：npm install --save-dev json-loader
            2.配置：需要在webpack.config.js文件中loader的配置
            3.创建一个json格式的数据文件
              module:{
                loaders:[
                  //配置json格式的转换
                  {
                    test:/\.json$/,
                    loader:"json-loader"
                  }
                ]
              }
      3.创建json文件
      4.执行
-----------------------------------------------------------------------

8.babel
  1.提供给我用来对es6进行编译成es5，jsx语法他也可以进行编译
  2.babel安装：
		1.安装依赖包
			命令：npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react  (一次性安装所有的)
		2.配置webpack.config.js文件
      {
        test:/\.js$/,
        exclude:"node_modules",
        loader:"babel-loader",
        query:{
          presets:["es2015","react"]
        }
      }
		3.搭建react环境
			安装：npm install --save-dev react  react-dom
		4.修改hello.js文件和app.js文件
      hello.js：
        import React from "react";
        export default class Hello extends React.Component{
          render(){
            return(
              <div>我是Hello文件的信息</div>
            )
          }
        }
      app.js:
        import React from "react";
        import ReactDOM from "react-dom";
        import Hello from "./hello.js";
        class App extends React.Component{
          render(){
            return(
              <div>
                <Hello />
              </div>
            )
          }
        }

        ReactDOM.render(<App />,document.getElementById("root"));
    以上需要注意的：
      1.es6的语法
      2.react es6 的写法

---------------------------------------------------------

9.CSS
  webpack提供了两个处理样式表：css-loader和style-loader
  1.安装：npm install --save-dev style-loader css-loader
  2.配置：
			{
				test:/\.css$/,
				loader:"style!css"
				//！的意思是同一个文件用两种方案去处理
			}

------------------------------------------------------------

10.图片
  webpack提供了图片的处理方案
  1.安装 npm install --save-dev file-loader url-loader
  2.配置：
    {
      test:/\.(png|jpg|gif)$/,
      loader:"url-loader?limit=8129"
    }
  3.引入关系：
    import myImg from "./yx.jpg";
    <img src={myImg} />

11.安装
  npm install：根据package.json文件中的依赖版本，回去帮你主动下载所有的内容
