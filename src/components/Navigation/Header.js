import React, { useState } from "react";
import { Link } from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { toggleTheme } from '../../actions';
import "./_Header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const dispatch = useDispatch();
  const theme = useSelector(state => state.darkThemeEnabled)

  const handleThemeClick = () => {
    dispatch(toggleTheme())
    closeMobileMenu()
  }

  return (
    <div className={theme ? "header dark-header" : "header"}>
      <div className="header-logo-nav">
        <div className="header-logo-container">
          <a href="/">
            {/* <Logo className="logo" /> */}
            <div className="header-logo">D</div>
          </a>
        </div>
        <ul className={click ? "header-nav-options active" : "header-nav-options"}>
          <li className="option">
            <Link onClick={closeMobileMenu} activeClass="active" to="home" spy={true} smooth={true} duration={1000}>Home</Link>
          </li>
          <li className="option">
            <Link onClick={closeMobileMenu} activeClass="active" to="about" spy={true} smooth={true} duration={1000}>About</Link>
          </li>
          <li className="option">
            <Link onClick={closeMobileMenu} activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>Projects</Link>
          </li>
          <li className="option">
            <Link onClick={closeMobileMenu} activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>Contact</Link>
          </li>
          <li className="option resume">
            <a onClick={closeMobileMenu} href='https://docs.google.com/document/d/1avH_UvdoVNwNwMAFGotJaKEcNEsqEhrw' target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
          <li className="theme option" onClick={handleThemeClick}>
            {!theme && <i className="fas fa-moon fa-2x"></i>}
            {theme && <i className="fas fa-sun fa-2x"></i>}
          </li>
        </ul>
      </div>
      <div>
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