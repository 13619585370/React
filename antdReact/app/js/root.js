import React from "react";
import {render} from "react-dom";
import {Router,Route,browserHistory,Link} from "react-router";
import $ from "jquery";
import {Button} from 'antd';
import 'antd/dist/antd.css';
import Index from "./components/index.js";
import NewsContainer from "./components/pc/newscontainer.js";
class Root extends React.Component{
  render(){
    return(
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Index}></Route>
          <Route path="/nav/:type" component={NewsContainer}></Route>
        </Router>
      </div>
    );
  }
}
render(<Root/>,$("#root")[0]);
