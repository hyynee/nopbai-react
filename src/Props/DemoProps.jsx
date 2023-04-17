import React, { Component } from "react";
import Post from "./Post";
import TextDemo from "./TextDemo";
import DemoChangeColor from "../State/DemoChangeColor";

export default class DemoProps extends Component {
  render() {
    const post1 = {
      tiuDe: "cybersoft và những chú gà",
      noiDung: "CyberSoft và những cú lừa",
    };
    const post2 = {
      tiuDe: "học react có khó không",
      noiDung: "Cũng dễ mà không khó mấy",
    };
    return (
      <div className="container">
        <h3>Demo Props</h3>
        <div className="w-25">
          <TextDemo
            name="CyberSoft"
            price="10000"
            img="./img/red-car.jpg"
          ></TextDemo>
        </div>
        <div className="w-25 mt-2">
          <TextDemo
            name="BC43-AnhHuy"
            price="20000"
            img="./img/black-car.jpg"
          ></TextDemo>
        </div>
        <hr />
        <h3>Danh sách bài viết</h3>
        <Post info={post1} TheBaiTap={DemoChangeColor}>
          <div className="alert alert-success">Cho xin lỗi được không</div>
        </Post>
        <Post info={post2}>
          <div className="alert alert-danger">Tớ biết lỗi òi</div>
        </Post>
      </div>
    );
  }
}
