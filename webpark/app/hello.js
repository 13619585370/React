// var info = require("./info.json");
// module.exports  = function(){
//   var hello = document.createElement("div");
//   hello.textContent = info.personInfo;
//   return hello;
// }

import React from "react";
import Info from "./info.json";
import "./init.css";
import myImg from "./9.jpg";

export default class Hello extends React.Component{
  render(){
    return(
      <div className="container">
        <img src={myImg}/>
        {
          Info.personInfo
        }
      </div>
    )
  }
}
