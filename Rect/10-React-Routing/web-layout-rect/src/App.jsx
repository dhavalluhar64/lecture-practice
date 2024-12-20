import "./App.css";
import React, { Children, useState } from "react";
import HomeCom from "./Layout-Web/Home-File/HomeCom";
// import AboutCom from "./Layout-Web/Home-File/AboutCom";

import About_card from "./Layout-Web/Images-Slider/About_cards";
import ContactCom from "./Layout-Web/Home-File/ContactCom";
import BlogCom from "./Layout-Web/Home-File/BlogCom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeNested from "./Layout-Web/Home-File/NestedPage/HomeNested";
import HomeNested2 from "./Layout-Web/Home-File/NestedPage/HomeNested2";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeCom />}>
            <Route path="/home1" element={<HomeNested />}></Route>

            <Route path="/home2" element={<HomeNested2 />}></Route>
          </Route>

          <Route path="/About_card" element={<About_card />}></Route>

          <Route path="/ContactCom" element={<ContactCom />}></Route>

          <Route path="/BlogCom" element={<BlogCom />}></Route>

          {/* <AboutCom /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
