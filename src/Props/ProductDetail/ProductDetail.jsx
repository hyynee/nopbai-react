import React, { Component } from "react";
import Detail from "./Detail";

const dataPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class ProductDetail extends Component {
  renderPhone = () => {
    let arrJSX = dataPhone.map((item) => {
      return (
        <div className="col-md-4 mt-2" key={item.maSP}>
          <Detail phone={item} XemChiTiet = {this.xemChiTiet}></Detail>
        </div>
      );
    });
    return arrJSX;
  };
  state = {
    spChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };
  xemChiTiet = (spClick) => {
    // console.log(spClick)
    this.setState({
      spChiTiet: spClick,
    });
  };
  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.state.spChiTiet;
    return (
      <div className="container">
        <h3>Danh Sách Sản Phẩm</h3>
        <div className="row">
          {this.renderPhone()}
          {/* <div className="col-md-4 mt-2">
            <div className="card">
              <img src="./img/applephone.jpg" alt="..." height={"100%"} />
              <div className="card-body">
                <h3>Product name</h3>
                <p>Price</p>
                <button className="btn btn-success">Xem chi tiết</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <div className="card">
              <img src="./img/applephone.jpg" alt="..." height={"100%"} />
              <div className="card-body">
                <h3>Product name</h3>
                <p>Price</p>
                <button className="btn btn-success">Xem chi tiết</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <div className="card">
              <img src="./img/applephone.jpg" alt="..." height={"100%"} />
              <div className="card-body">
                <h3>Product name</h3>
                <p>Price</p>
                <button className="btn btn-success">Xem chi tiết</button>
              </div>
            </div>
          </div> */}
        </div>
        <div className="row" style={{ minHeight: 400, paddingTop: 100 }}>
          <div className="col-3">
            <h3 className="text-center">{tenSP}</h3>
            <img src={hinhAnh} alt="" className="w-100" />
          </div>
          <div className="col-9">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <td>{cameraSau}</td>
                </tr>
                <tr>
                  <th>Ram</th>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <th>Rom</th>
                  <td>{rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}