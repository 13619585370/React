import React from "react";

export default class NewsContainer extends React.Component{
  render(){
    return(
      <div>
        {this.props.params.type}
      </div>
    );
  }
}
