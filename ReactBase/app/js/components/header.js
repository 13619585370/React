import React from "react";
import "../../css/header.css";
import NavData from "../data/nav.json";
export default class Header extends React.Component{
  constructor(){
    super();
    this.state={
      NavData:NavData
    }
  }

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
          {
            this.state.NavData.map(function(item){
              return <li><a href={item.url}>{item.name}</a></li>
            })
          }
          <li><a href="#">新闻</a></li>
          <input type="text" value="更多产品"/>
        </ul>
      </div>
    );
  }
}
