import React from "react";
import Typewriter from "typewriter-effect";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import img3 from "../../images/img3.png";
import { Element } from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";

import "./home.css";

const Home = () => {
  return (
    <Element name="home" className="home-body-data">
      <div className="homeleftright">
        <div className="home-body-data-left">
          <div className="name">
            Hi, I'm <span>Amit</span> Kumar
          </div>
          <div className="typing">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Competitive Programmer",
                  "Problem Solver",
                  "Open Source Contributor",
                  "DS-Algo Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                changeDelay: 150,
              }}
            />
          </div>
          <Link activeClass="active" spy={true} smooth={true} offset={-105} duration={500} to="about">
            <div className="home-button">More About me</div>
          </Link>
          <div className="social-icons">
            <a href="https://github.com/amitazadi" target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/amit-kumar-azadi/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/amitazadi/" target="_blank" rel="noreferrer">
              <AiOutlineInstagram />
            </a>
            <a href="https://www.facebook.com/amitazadi/" target="_blank" rel="noreferrer">
              <BsFacebook />
            </a>
          </div>
        </div>
        <div className="home-body-data-right">
          <img src={img3} />
        </div>
      </div>
    </Element>
  );
};

export default Home;
