import React from "react";
import { Carousel } from 'antd';
import $ from "jquery";
import Img1 from "../../../image/2.jpg";
import Img2 from "../../../image/3.jpg";
import Img3 from "../../../image/4.jpg";
import Img4 from "../../../image/5.jpg";
import Img5 from "../../../image/6.jpg";

export default class Carusels extends React.Component{
  constructor(){
    super();
    this.state={
      data:[]
    }
  }

  componentWillMount(){
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
  }
  render(){
    const setting={
      dots:true,
      infinite:true,
      speed:500,
      slidesToShow:1,
      autoplay:true
    }
    return(
      <div style={{width:this.props.width,"padding-top":"20px"}}>
        <Carousel {...setting}>
          {
            this.state.data.map(function(item){
              return(
                <div>
                  <img style={{width:"100%"}} src={item.thumbnail_pic_s} />
                </div>
              )
            })
          }

          {/* <div>
            <img style={{width:"100%"}} src={Img2} />
          </div>
          <div>
            <img style={{width:"100%"}} src={Img3} />
          </div>
          <div>
            <img style={{width:"100%"}} src={Img4} />
          </div>
          <div>
            <img style={{width:"100%"}} src={Img4} />
          </div> */}
        </Carousel>
      </div>
    );
  }
}
