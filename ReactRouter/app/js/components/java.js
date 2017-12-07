import React from "react";

export default class Java extends React.Component{
  render(){
    return(
      <div>
        我是Java页面
        {this.props.params.id}
      </div>
    );
  }
}
