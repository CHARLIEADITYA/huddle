import logo from "../../assets/images/logo.svg";
import React from "react";
import "./header.css";
function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;
