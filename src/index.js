import React from "react";
import ReactDOM from "react-dom/client";
import Demo from "./compunent/demo";
import Home from "./HomeComponent/Home";
import HomeBT from "./baitapvenha/HomeBT";
import StyleDemo from "./StyleDemo/StyleDemo";
import DemoChangeFontSize from "./State/DemoChangeFontSize";
import DemoChangeColor from "./State/DemoChangeColor";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <Home></Home> */}
    {/* <HomeBT></HomeBT> */}
    {/* <StyleDemo></StyleDemo> */}
    {/* <p className="color-red">111223</p> // vẫn ăn css do global style css */}
    {/* <DemoChangeFontSize></DemoChangeFontSize> */}
    {/* <DemoChangeColor></DemoChangeColor> */}
    <RenderWithMap></RenderWithMap>
  </div>
);
