import React from "react";
import "./r-header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <ul className="items">
        <li>Home Page</li>
        <li>Contact</li>
        <li>Login/Register</li>
      </ul>
    </div>
  );
};

export default Header;
