import React, { Component } from "react";

export default class ShoesCart extends Component {
  renderShoes = () => {
    let { shoesCart, delShoes} = this.props;
    return shoesCart.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <img src={item.image} width={50} alt="" />
          </td>
          <td>{item.price}</td>
          <td>
            <button className="btn btn-success mx-2">+</button>
            {item.soLuong}
            <button className="btn btn-success mx-2">-</button>
          </td>
          <td>{item.soLuong * item.price}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                delShoes(item.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Totalmoney</th>
          </tr>
        </thead>
        <tbody>{this.renderShoes()}</tbody>
      </table>
    );
  }
}
