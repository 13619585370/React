import React from "react";
import {render} from "react-dom";
import Header from "./components/header.js";
import Container from "./components/container.js";
import Footer from "./components/footer.js";
import "../css/init.css";
class Index extends React.Component{
  render(){
    return(
      <div>
        <div>
          <Header />
        </div>
        <div className="container">
          <Container />
        </div>
        <Footer />
      </div>
    );
  }
}

render(<Index />,document.getElementById('root'));
