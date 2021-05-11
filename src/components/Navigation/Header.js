import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./_Header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="header-logo-nav">
        <div className="header-logo-container">
          <a href="#">
            <Logo className="logo" />
          </a>
        </div>
        <ul className={click ? "header-nav-options active" : "header-nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Home</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">About</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Projects</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="header-mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;