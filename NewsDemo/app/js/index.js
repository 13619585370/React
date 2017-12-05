import React from "react";
import {render} from "react-dom";
import $ from "jquery";
import Container from "./components/container.js";

class Index extends React.Component{
  constructor(){
    super();
    this.state={
      container:""
    }
  }

  componentWillMount(){
    $.ajax({
      type:"get",
      url:"https://api.douban.com/v2/user/abei",
      dataType:"json",
      success:function(data){
        if(data){
          this.setState({
            container:data.created
          })
        }
      }.bind(this)
    })
  }

  render(){
    return(
      <div>
        <Container title={this.state.title}/>
      </div>
    );
  }
}


render(<Index />,$("#root")[0]);
