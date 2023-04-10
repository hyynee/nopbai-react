import React, { Component } from "react";

export default class RenderWithMap extends Component {
  products = [
    {
      id: 1,
      name: "red-car",
      price: 10000,
      img: "./img/red-car.jpg",
    },
    {
      id: 2,
      name: "black-car",
      price: 10000,
      img: "./img/black-car.jpg",
    },
    {
      id: 3,
      name: "silver-car",
      price: 10000,
      img: "./img/silver-car.jpg",
    },
    {
      id: 4,
      name: "steel-car",
      price: 10000,
      img: "./img/steel-car.jpg",
    },
  ];

  //   renderProduct = () => {
  //     let output = []; // mảng các thẻ tr chứa dữ liệu của product
  //     for (let prod of this.products) {
  //       let jsxTr = (
  //         <tr key={prod.id}>
  //           <td>{prod.id}</td>
  //           <td>{prod.name}</td>
  //           <td>{prod.price}</td>
  //           <td>
  //             <img src={prod.img} alt="" style={{ height: 50 }} />
  //           </td>
  //         </tr>
  //       );
  //       // đưa jsxTr vào mảng
  //       output.push(jsxTr);
  //     }
  //     return output; // [<tr></tr>, <tr></tr>, <tr></tr>...]
  //   };

  renderMapTr = () => {
    let arrTr = this.products.map((prod) => {
      return (
        <tr key={prod.id}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <img src={prod.img} alt="" style={{ height: 50 }} />
          </td>
        </tr>
      );
    });
    return arrTr;
  };
  renderCard = () => {
    let card = this.products.map((prod) => {
      return (
        <div className="col-3">
          <div className="card" key={prod.id}>
            <div className="card-body">
              <p>{prod.id}</p>
              <p>{prod.name}</p>
              <p>{prod.price}</p>
              <img src={prod.img} alt="" style={{ width:50 }} />
            </div>
            <div className="card-footer">
                <p>quanlity</p>
            </div>
          </div>
        </div>
      );
    });
    return card;
  };
  render() {
    return (
      <div className="container">
        <h3>danh sách sản phẩm</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.renderProduct()} */}
            {this.renderMapTr()}
            {/* <tr>
                <td>{this.products[0].id}</td>
                <td>{this.products[0].name}</td>
                <td>{this.products[0].price}</td>
                <td><img src={this.products[0].img} style={{width:50}}></img></td>
            </tr>
            <tr>
                <td>{this.products[1].id}</td>
                <td>{this.products[1].name}</td>
                <td>{this.products[1].price}</td>
                <td><img src={this.products[1].img} style={{width:50}}></img></td>
            </tr> */}
          </tbody>
        </table>
        <hr />
        <h3 className="text-center">Products List</h3>
        <div className="row">{this.renderCard()}</div>
      </div>
    );
  }
}
