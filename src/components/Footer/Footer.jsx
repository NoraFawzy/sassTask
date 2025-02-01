import React from "react";
import style from "./footer.module.scss";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style["footer-content"]}>
        <a href="" className={style.logo}>
          <img src={logo} alt="logo" />
          <span className={style["logo-text"]}>Recipe</span>
        </a>
        <span className={style["route-text"]}>Route</span>
      </div>
      <hr className={style.divider} />
      <span className={style["footer-note"]}>
        © 2025 Nora Fawzy™. All Rights Reserved.
      </span>
    </footer>
  );
}