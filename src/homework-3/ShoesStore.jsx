import React, { Component } from "react";
import { arrAdidas } from "../assets/data/data";
import ShoesCart from "./ShoesCart";
import ShoesItem from "./ShoesItem";
import ShowInfo from "./ShowInfo";
export default class ShoesStore extends Component {
  renderItem = () => {
    return arrAdidas.map((item) => {
      return (
        <div className="col-4 p-4" key={item.id}>
          <ShoesItem
            shoes={item}
            xemChiTiet={this.xemChiTiet}
            AddCart={this.addCart}
          ></ShoesItem>
        </div>
      );
    });
  };
  state = {
    spChiTiet: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    shoesCart: [
      {
        id: 1,
        name: "Adidas Prophere",
        image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
        price: 350,
        soLuong: 1,
      },
    ],
  };
  xemChiTiet = (spClick) => {
    console.log(spClick);
    this.setState({
      spChiTiet: spClick,
    });
  };
  addCart = (spClick) => {
    console.log(spClick);
    spClick = { ...spClick, soLuong: 1 };
    let gioHang = this.state.shoesCart;
    let sp = gioHang.find((item) => item.id === spClick.id);
    if (sp) {
      sp.soLuong += 1;
    } else {
      gioHang.push(spClick);
    }
    this.setState({
      shoesCart: gioHang,
    });
  };
  delShoes = (id) => {
    console.log(id);
  };
  render() {
    let {
      id,
      name,
      alias,
      price,
      description,
      shortDescription,
      quantity,
      image,
    } = this.state.spChiTiet;
    return (
      <div className="container">
        <h3>ShoesCart</h3>
        <ShoesCart
          shoesCart={this.state.shoesCart}
          delShoes={this.delShoes}
        ></ShoesCart>
        <h3 className="text-center">SHOESSTORE</h3>
        <div className="row">{this.renderItem()}</div>
        <ShowInfo spCT={this.state.spChiTiet}></ShowInfo>
      </div>
    );
  }
}
