import React, { Component } from "react";

export default class DemoChangeFontSize extends Component {
  state = {
    fSize: 20
  };
  render() {
    return (
      <div>
        <h3>Tăng giảm fontsize</h3>
        <p style={{ fontSize: `${this.state.fSize}px` }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          beatae perferendis corporis odio voluptatum repudiandae, praesentium
          delectus ab voluptate id consequuntur ipsam, repellendus ipsum modi
          numquam totam cupiditate dolorum unde!
        </p>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize + 5
            });
          }}
        >
          +
        </button>
        <button className="btn btn-danger"
         onClick={() => {
            this.setState({
              fSize: this.state.fSize - 5
            });
          }}>-</button>
      </div>
    );
  }
}
