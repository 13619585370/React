import React from "react";

export default class Container extends React.Component{
  constructor(){
    super();
    this.state={
      user:true
    }
  }

  HandlerClick(event){
    this.setState({
      user:!this.state.user
    })
  }
  render(){
    return(
      <div>
        {this.props.title}
        <button onClick={this.HandlerClick.bind(this)}>按钮</button>
        <p>
          {
            this.state.user
            ?
            "登录"
            :
            "未登录"
          }
        </p>
      </div>
    );
  }
}
Container.defaultProps={
  title:"未知"
}
