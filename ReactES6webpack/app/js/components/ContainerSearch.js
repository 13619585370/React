import React from "react";
import Logo from "../../image/bd_logo1.png";
import "../../css/search.css";

export default class ContainerSearch extends React.Component{
  render(){
    return(
      <div className="search">
        {this.getImage()}
        {this.getSearch()}
      </div>
    );
  }

  getImage(){
    return(
      <div className="search-logo">
        <img src={Logo} alt=""/>
      </div>
    );
  }

  getSearch(){
    return(
      <div >
        <input className="search-input1" type="text"/>
        <input className="search-input2" type="text" value="百度一下"/>
      </div>
    );
  }
}
