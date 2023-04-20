import React, { Component } from "react";
import { arrGlasses } from "../assets/data/data";
import Demo from "../StyleDemo/style.module.css";
export default class DemoChangeKinh extends Component {
  state = {
    glassesOb: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: `./img/v1.png`,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },
  };
  renderDataGlasses = () => {
    return arrGlasses.map((glasses, index) => {
      return (
        <div className="col-lg-2 col-md-3 col-sm-4 text-center" key={index}>
          <div className="glasses-item p-2">
            <button
              onClick={() => {
                this.changeGlasses(glasses);
              }}
              className={({ isActive }) =>
                isActive ? " mx-2 " : " bg-light mx-2"
              }
            >
              <img src={glasses.url} width={70} height={60} alt="..." />
            </button>
          </div>
        </div>
      );
    });
  };
  changeGlasses = (newChange) => {
    this.setState({
      glassesOb: newChange,
    });
  };
  render() {
    return (
      <section
        className={Demo.background}
        style={{
          backgroundImage: `url("/img/background.jpg")`,
        }}
      >
        <div className="container">
          <h3>Chọn Kính Muốn Thử</h3>
          <div className="row">
            <div
              className="col-6 p-4"
              style={{
                position: "relative",
              }}
            >
              <div>
                <img src="./img/model.jpg" className="w-75" />
              </div>
              <div
                className={Demo.change}
                style={{
                  position: "absolute",
                  top: "26%",
                  left: "17%",
                }}
              >
                <img src={this.state.glassesOb.url} alt="" className="w-75" />
              </div>
              <div
                className="productTitle"
                style={{
                  position: "absolute",
                  bottom: "4%",
                  background: "orange",
                }}
              >
                <h5
                  style={{
                    color: "yellow",
                  }}
                >
                  {this.state.glassesOb.name}
                </h5>
                <h5>${this.state.glassesOb.price}</h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.glassesOb.desc.replace(
                      /ending /g,
                      "ending <br>"
                    ),
                  }}
                />
              </div>
            </div>
            <div className="col-6 p-4">
              <img src="./img/model.jpg" className="w-75" />
            </div>
          </div>
          <div className="product-select">
            <div className="container">
              <div className="row">{this.renderDataGlasses()}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
