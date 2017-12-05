import React from "react";
import "../../css/footer.css";
export default class Footer extends React.Component{
  render(){
    return(
      <div>
        {this.getFooter()}
      </div>
    );
  }

  getFooter(){
    return(
      <div className="footer">
        <p>
          ©2017 Baidu 使用百度前必读 意见反馈 京ICP证030173号  京公网安备11000002000001号
        </p>
      </div>
    );
  }
}
