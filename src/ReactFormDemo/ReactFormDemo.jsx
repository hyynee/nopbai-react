import React, { Component } from "react";
import CreateProduct from "./CreateProduct";

export default class ReactFormDemo extends Component {
  state = {
    arrProduct: [
      {
        idProduct: "01",
        name: "Iphone X",
        price: "10000",
        type: "phone",
        img: "https://i.pravatar.cc?u=1",
        desc: "provipvlz",
      },
    ],
  };
  addProduct = (prodInfo) => {
    console.log(prodInfo);

    // this.setState
  };
  render() {
    return (
      <div>
        <CreateProduct></CreateProduct>
        <table className="table mt-2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>IMG</th>
              <th>Type</th>
              <th>Desc</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrProduct.map((prod) => {
              return (
                <tr key={prod.idProduct}>
                  <td>{prod.idProduct}</td>
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
                  <td>
                    <img src={prod.img} width={50} alt="" />
                  </td>

                  <td>{prod.type}</td>
                  <td>{prod.desc}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
