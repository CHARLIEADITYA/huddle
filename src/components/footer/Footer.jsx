import React from "react";
import { NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="logo b">
      <NavLink to="https://www.facebook.com/" target="_blank">
        <BsFacebook />
        </NavLink>
      <NavLink to="https://www.facebook.com/" target="_blank">
        <AiOutlineTwitter />
      </NavLink>
      <NavLink to="https://www.facebook.com/" target="_blank">
        <AiOutlineInstagram />
      </NavLink>
    </footer>
  );
};

export default Footer;
