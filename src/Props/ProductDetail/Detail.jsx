import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    // lấy từ PropsName của component cha truyền vào
    let { phone, XemChiTiet } = this.props;
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
        </div>
      </div>
    );
  }
}
