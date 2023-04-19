import React, { Component } from "react";
import Header from "../baitapvenha/Header";
import Carousel from "./Carousel";
import Footer from "../baitapvenha/Footer";
import ProductItem from "./ProductItem";

export default class Home extends Component {
  render() {
    return (
      <div>
      <Header></Header>
        <div>
          <Carousel></Carousel>
        </div>
        <div>
         <ProductItem></ProductItem>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
