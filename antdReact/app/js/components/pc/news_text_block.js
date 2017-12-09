import React from "react";
import {Menu, Icon,Row,Col} from 'antd';
import $ from "jquery";
import { Pagination } from 'antd';
export default  class NewsTextBlock extends React.Component{
  constructor(){
    super();
    this.state={
      data:[]
    }
  }

  componentWillMount(){
    // var data = {
    //   type:'shehui',
    //   key:'ff2780f6db739c13d532fb66a84574b6'
    // };
    $.ajax({
      type:"get",
      url:"/Handler.ashx?action=getnews&type=guonei&count=15",
      dataType:"json",
      crossDomain:true,
      success:function(json){
        console.log(json);
        if(json!=null){
          this.setState({
            data:json
          })
        }
      }.bind(this)
    })
    // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=shehui&count=15",{
    //   method:'get'
    // })
    // .then(response=>response.json())
    // .then(json=>{
    //   this.setState({
    //     data:json
    //   })
    // })
  }
  render(){
    return(
      <div style={{"padding-top":"20px","padding-left":"30px"}}>
        <ul>
          {
            this.state.data.map(function(item){
              return(
                <li key={item.uniquekey} style={{"padding-top":"8px"}}>
                  <a href={item.url}>{item.title}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
