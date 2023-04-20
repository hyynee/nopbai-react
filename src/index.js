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
import ProductList from "./Props/ProductList/ProductList";
import ProductDetail from "./Props/ProductDetail/ProductDetail";
// Cấu hình router dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeTemplates from "./Templates/HomeTemplates";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ReactFormDemo from "./ReactFormDemo/ReactFormDemo";
import ShoesStore from "./homework-3/ShoesStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplates></HomeTemplates>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="cart" element={<ProductDetail></ProductDetail>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route
            path="react-form"
            element={<ReactFormDemo></ReactFormDemo>}
          ></Route>
          <Route path="demo" element={<HomeBT></HomeBT>}></Route>
          <Route
            path="glasses"
            element={<DemoChangeKinh></DemoChangeKinh>}
          ></Route>
          <Route path="shoestore" element={<ShoesStore></ShoesStore>}></Route>
          <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

{
  /* <Home></Home> */
}
{
  /* <StyleDemo></StyleDemo> */
}
{
  /* <p className="color-red">111223</p> // vẫn ăn css do global style css */
}
{
  /* <DemoChangeFontSize></DemoChangeFontSize> */
}
{
  /* <DemoChangeColor></DemoChangeColor> */
}
{
  /* <RenderWithMap></RenderWithMap> */
}
{
  /* <DemoLogin></DemoLogin> */
}
{
  /* <ChangeCar></ChangeCar> */
}
{
  /* <DemoProps></DemoProps> */
}
{
  /* <ProductList></ProductList> */
}
{
  /* <ProductDetail></ProductDetail> */
}

{
  /* bài tập về nhà */
}
{
  /* <HomeBT></HomeBT> */
}
{
  /* <DemoChangeKinh></DemoChangeKinh> */
}
