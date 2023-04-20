import React, { Component } from "react";

export default class ShowInfo extends Component {
  render() {
    let { spCT } = this.props;
    return (
      <div className="row">
        <div className="col-6">
          <img src={spCT.image} alt="" />
        </div>
        <div className="col-6">
          <h3>Thông Số</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <td>{spCT.id}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{spCT.name}</td>
              </tr>
              <tr>
                <th>Alias</th>
                <td>{spCT.alias}</td>
              </tr>
              <tr>
                <th>Price</th>
                <td>{spCT.price}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{spCT.description}</td>
              </tr>
              <tr>
                <th>ShortDescription</th>
                <td>{spCT.shortDescription}</td>
              </tr>
              <tr>
                <th>Quantity</th>
                <td>{spCT.quantity}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
