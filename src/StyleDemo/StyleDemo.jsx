import React, { Component } from "react";
import "./style.css";
import objectStyle from "./style.module.css";

export default class StyleDemo extends Component {
  render() {
    const bg = '#000';
    return (
      <div className="color-red">
        StyleDemo
        <p className={objectStyle.colorPrimary}>hello</p>
      <p style={{backgroundColor:bg}}>produce</p>  
      </div>
    );
  }
}
