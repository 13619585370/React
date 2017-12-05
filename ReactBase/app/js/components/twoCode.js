import React from "react";
import "../../css/twoCode.css";
import LogoTwo from "../../image/twoCode.png";
export default class TwoCode extends React.Component{
  render(){
    return(
      <div>
        {this.getCode()}
      </div>
    );
  }

  getCode(){
    return(
      <div>
        <img className="logo-twoCode" src={LogoTwo} />
        <p>手机百度</p>
      </div>
    )
  }
}
