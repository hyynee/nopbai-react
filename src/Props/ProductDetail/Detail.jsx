import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    // lấy từ PropsName của component cha truyền vào
    let { phone, XemChiTiet, addItem } = this.props;
    return (
      <div className="card">
        <img src={phone.hinhAnh} alt="..." height={"100%"} />
        <div className="card-body">
          <h3>{phone.tenSP}</h3>
          <p>{phone.giaBan.toLocaleString()}VND</p>
          <button
            className="btn btn-success"
            onClick={() => {
              XemChiTiet(phone);
            }}
          >
            Xem chi tiết
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              addItem(phone)
            }}
          >
            <i className="fa fa-cart-plus"></i> Thêm Giỏ Hàng
          </button>
        </div>
      </div>
    );
  }
}
