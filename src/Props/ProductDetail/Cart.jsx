import React, { Component } from "react";

export default class Cart extends Component {
  renderArrGioHang = () => {
    let { arrGioHang, delSP, countUpDown } = this.props;
    return arrGioHang.map((item) => {
      return (
        <tr key={item.maSP}>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img src={item.hinhAnh} width={50} alt="" />
          </td>
          <td>{item.giaBan}</td>
          <td>
            <button
              className="btn btn-success mx-2"
              onClick={() => {
                countUpDown(item.maSP,1);
              }}
            >
              +
            </button>
            {item.soLuong}
            <button
              className="btn btn-success mx-2"
              onClick={() => {
                countUpDown(item.maSP,-1);
              }}
            >
              -
            </button>
          </td>
          <td>{Number(item.giaBan) * Number(item.soLuong)}</td>
          <td>
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                delSP(item.maSP);
              }}
            >
              Xóa
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
            <th>Mã SP</th>
            <th>Tên SP</th>
            <th>Hình ảnh</th>
            <th>Giá bán</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>{this.renderArrGioHang()}</tbody>
      </table>
    );
  }
}
