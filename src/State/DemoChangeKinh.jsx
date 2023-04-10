import React, { Component } from "react";

export default class DemoChangeKinh extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <h3>Chọn Kính Muốn Thử</h3>
          <div className="row">
            <div className="col-6 p-4">
              <img src="./img/model.jpg" className="w-100" />
            </div>
            <div className="col-6 p-4">
              <img src="./img/model.jpg" className="w-100" />
            </div>
          </div>

          <div className="d-flex" style={{paddingTop: 100}}>
             <button>
                <img src="./img/v1.png" alt="" cla
                className="w-100" />
              </button>
              <button>
                <img src="./img/v2.png" alt="" className="w-100" />
              </button>
              <button>
                <img src="./img/v3.png" alt="" className="w-100" />
              </button>
              <button>
                <img src="./img/v4.png" alt="" className="w-100" />
              </button>
              <button>
                <img src="./img/v5.png" alt="" className="w-100" />
              </button>
              <button>
                <img src="./img/v6.png" alt="" className="w-100" />
              </button>
              <button>
                <img src="./img/v7.png" alt="" className="w-100" />
              </button>
              <button>
                <img src="./img/v8.png" alt="" className="w-100" />
              </button>
              <button>
                <img src="./img/v9.png" alt="" className="w-100" />
              </button>
             </div>
        </div>
      </section>
    );
  }
}
