import React from "react";
import ReactDOM from "react-dom/client";
import Demo from "./compunent/demo";
import Home from "./HomeComponent/Home";
import HomeBT from "./baitapvenha/HomeBT";
import StyleDemo from "./StyleDemo/StyleDemo";
import DemoChangeFontSize from "./State/DemoChangeFontSize";
import DemoChangeColor from "./State/DemoChangeColor";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoLogin from "./State/DemoLogin";
import DemoChangeKinh from "./State/DemoChangeKinh";
import "./assets/css/index.css";
import ChangeCar from "./baitapchonxe/ChangeCar";
import DemoProps from "./Props/DemoProps";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <Home></Home> */}
    {/* <StyleDemo></StyleDemo> */}
    {/* <p className="color-red">111223</p> // vẫn ăn css do global style css */}
    {/* <DemoChangeFontSize></DemoChangeFontSize> */}
    {/* <DemoChangeColor></DemoChangeColor> */}
    {/* <RenderWithMap></RenderWithMap> */}
    {/* <DemoLogin></DemoLogin> */}
    {/* <ChangeCar></ChangeCar> */}
    {/* <DemoProps></DemoProps> */}
    {/* <HomeBT></HomeBT> */}
    <DemoChangeKinh></DemoChangeKinh>
  </div>
);
