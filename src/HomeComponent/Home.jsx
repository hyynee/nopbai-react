import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>

      <div className="d-flex">
        <div className="w-25"><Navigation></Navigation></div>
        <div className="w-75"><Content></Content></div>
      </div>
      <div>
        <Footer></Footer>
      </div>
      </div>
    );
  }
}
