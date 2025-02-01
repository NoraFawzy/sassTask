import React from "react";
import Slider from "../Slider/Slider";
import Navbar from "../Navbar/Navbar";
import Categories from "../Categories/Categories";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div>
      <Slider />
      <div className="bg-[#F4F2EE]">
        <Outlet/>
        {/* <Categories /> */}
      </div>
      <Footer/>
    </div>
  );
}
