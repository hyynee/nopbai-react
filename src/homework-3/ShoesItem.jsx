import React, { Component } from "react";

export default class ShoesItem extends Component {
  render() {
    let { shoes, xemChiTiet, AddCart } = this.props;
    return (
      <div className="card {item.id}">
        <div className="card-body" style={{ minHeight: 248 }}>
          <img src={shoes.image} width={100} alt="" />
          <h3>{shoes.name}</h3>
          <h3>${shoes.price}</h3>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-dark"
            onClick={() => {
              AddCart(shoes);
            }}
          >
            Add to cart
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              xemChiTiet(shoes);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
