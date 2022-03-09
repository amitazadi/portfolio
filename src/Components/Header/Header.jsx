import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./header.css";

const Header = () => {
  const codingSymbol = "</>";
  return (
    <div className="navbar">
      <div className="header-body">
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-55}
          duration={1000}
          onClick={() => scroll.scrollToTop()}
          // to="home"
        >
          <div className="header-title">
            <span>{codingSymbol}</span>
          </div>
        </Link>

        <div className="menu">
          <Link activeClass="active" spy={true} smooth={true} offset={-75} duration={1000} to="home">
            <div className="menu-items">Home</div>
          </Link>

          <Link activeClass="active" spy={true} smooth={true} offset={-75} duration={1000} to="about">
            <div className="menu-items">About</div>
          </Link>

          <Link activeClass="active" spy={true} smooth={true} offset={-75} duration={1000} to="experience">
            <div className="menu-items">Experience</div>
          </Link>

          <Link activeClass="active" spy={true} smooth={true} offset={-75} duration={1000} to="projects">
            <div className="menu-items">Projects</div>
          </Link>

          <Link activeClass="active" spy={true} smooth={true} offset={-75} duration={1000} to="skills">
            <div className="menu-items">Skills</div>
          </Link>

          <Link activeClass="active" spy={true} smooth={true} offset={-75} duration={1000} to="contact">
            <div className="menu-items">Contacts</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
