import React from "react";
import "../../css/header.css";
export default class Header extends React.Component{
  render(){
    return(
      <div>
        {this.getNav()}
      </div>
    );
  }

  getNav(){
    return(
      <div className="nav-container">
        <ul>
          <li><a href="#">新闻</a></li>
          <li><a href="#">hao123</a></li>
          <li><a href="#">地图</a></li>
          <li><a href="#">视频</a></li>
          <li><a href="#">贴吧</a></li>
          <li><a href="#">学术</a></li>
          <li><a href="#">登录</a></li>
          <li><a href="#">设置</a></li>
          <input type="text" value="更多产品"/>
        </ul>
      </div>
    );
  }
}
