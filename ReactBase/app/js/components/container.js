import React from "react";
import ContainerSearch from "./ContainerSearch.js"
import TwoCode from "./twoCode.js"
export default class Container extends React.Component{
  render(){
    return(
      <div>
        <ContainerSearch />
        <TwoCode />
      </div>
    );
  }
}
