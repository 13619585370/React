import React from "react";
import NewsTextBlock from "./news_text_block.js";
import {Row,Col} from 'antd';
import Carusels from "./carusels.js";
export default class IndexContainer extends React.Component{
  render(){
    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Row>
              <Col span={11}>
                <NewsTextBlock />
              </Col>
              <Col span={13}>
                <Carusels  width="550px"/>
              </Col>
            </Row>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
