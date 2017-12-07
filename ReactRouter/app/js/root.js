 import React from "react";
 import {render} from "react-dom";
 import {Router,Route,hashHistory,Link}  from "react-router";
 import $ from "jquery";
 import Java from "./components/java.js";
 import Web from "./components/web.js";
 import Index from "./components/index.js";

 class Root extends React.Component{
   render(){
     return(
       <div>
         <Router history={hashHistory}>
           <Route path="/" component={Index}></Route>
           <Route path="/java/:id" component={Java}></Route>
           <Route path="/web" component={Web}></Route>
         </Router>
       </div>
     );
   }
 }
 render(<Root/>,$("#root")[0]);
