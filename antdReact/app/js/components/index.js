import React from "react";
import {Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
import '../../css/init.css';
import '../../css/g.css';
import Header from "./pc/header.js";

export default  class Index extends React.Component{
  render(){
    return(
      <div>
        <Header />
      </div>
    );
  }
}
