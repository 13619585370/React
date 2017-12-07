import React from "react";
import Java from "./java.js";
import Web from "./web.js";
import {Router,Route,hashHistory,Link}  from "react-router";
export default class Index extends React.Component{
  render(){
    return(
      <div>
        <Link to={`/java/${100}`}>
          <button>前往java页面</button>
        </Link>
        <Link to={`/web/`}>
          <button>前往web页面</button>
        </Link>
      </div>
    );
  }
}
