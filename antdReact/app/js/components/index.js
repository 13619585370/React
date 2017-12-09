import React from "react";
import {Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
import '../../css/init.css';
import '../../css/g.css';
import Header from "./pc/header.js";
import IndexContainer from "./pc/indexcontainer.js";

export default  class Index extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <IndexContainer />
      </div>
    );
  }
}
