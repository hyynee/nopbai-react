import React, { Component } from "react";

export default class DemoChangeColor extends Component {
  state = {
    colorHome: "red",
  };
  handleColor = (color) => {
    this.setState({
      colorHome: `${color}`,
    });
  };
  render() {
    return (
      <div className="container">
        <i
          className="fa fa-home display-1"
          style={{ color: this.state.colorHome }}
        ></i>

        <select
          className="mt-2 form-control w-25"
          id=""
          onChange={(color) => {
            let {value} = color.target;
            this.handleColor(value)
          }}
        >
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
      </div>
    );
  }
}
