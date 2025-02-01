import React from "react";
import logo from "../../assets/logo.png";
import style from "./slider.module.scss"; // Import SCSS Module

export default function Slider() {
  return (
    <aside className={`w-64 sm:translate-x-0 ${style.sidebar}`}>
      <img src={logo} alt="Logo" />
      <ul>
        <li className={`${style.li} ${style.primary} `}>
        <i class="fa-solid fa-utensils pe-2"></i>  <a href="#">Meals</a>
        </li>
        <li className={`${style.li} ${style.secondary}     `}>
        <i class="fa-solid fa-utensils pe-2"></i>   <a href="#">Ingredients</a>
        </li>
        <li className={`${style.li} ${style.secondary}      `}>
        <i class="fa-solid fa-utensils pe-2"></i>   <a href="#">Area</a>
        </li>
      </ul>
    </aside>
  );
}
