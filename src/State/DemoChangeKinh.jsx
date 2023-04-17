import React, { Component } from "react";

export default class DemoChangeKinh extends Component {
  state = {
    changeImg: `./img/v1.png`
  };
  render() {
    return (
      <section>
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
                style={{
                  position: "absolute",
                  top: "26%",
                  left: "17%",
                }}
              >
                <img src={this.state.changeImg} alt="" cla className="w-100" />
              </div>
            </div>
            <div className="col-6 p-4">
              <img src="./img/model.jpg" className="w-75" />
            </div>
          </div>

          <div className="d-flex" style={{ paddingTop: 100 }}>
            <button className="mx-2"
              onClick={() => {
                this.setState({
                  changeImg: `./img/v1.png`,
                });
              }}
            >
              <img src="./img/v1.png" alt="" cla className="w-100" />
            </button>
            <button className="mx-2"
              onClick={() => {
                this.setState({
                  changeImg: `./img/v2.png`,
                });
              }}
            >
              <img src="./img/v2.png" alt="" className="w-100" />
            </button>
            <button className="mx-2"
              onClick={() => {
                this.setState({
                  changeImg: `./img/v3.png`,
                });
              }}
            >
              <img src="./img/v3.png" alt="" className="w-100" />
            </button>
            <button className="mx-2"
              onClick={() => {
                this.setState({
                  changeImg: `./img/v4.png`,
                });
              }}
            >
              <img src="./img/v4.png" alt="" className="w-100" />
            </button>
            <button className="mx-2"
              onClick={() => {
                this.setState({
                  changeImg: `./img/v5.png`,
                });
              }}
            >
              <img src="./img/v5.png" alt="" className="w-100" />
            </button>
            <button className="mx-2"
              onClick={() => {
                this.setState({
                  changeImg: `./img/v6.png`,
                });
              }}
            >
              <img src="./img/v6.png" alt="" className="w-100" />
            </button>
            <button className="mx-2"
              onClick={() => {
                this.setState({
                  changeImg: `./img/v7.png`,
                });
              }}
            >
              <img src="./img/v7.png" alt="" className="w-100" />
            </button>
            <button className="mx-2"
              onClick={() => {
                this.setState({
                  changeImg: `./img/v8.png`,
                });
              }}
            >
              <img src="./img/v8.png" alt="" className="w-100" />
            </button>
            <button className="mx-2"
              onClick={() => {
                this.setState({
                  changeImg: `./img/v9.png`,
                });
              }}
            >
              <img src="./img/v9.png" alt="" className="w-100" />
            </button>
          </div>
        </div>
      </section>
    );
  }
}
