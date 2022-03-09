import React from "react";
import azadi from "../../images/azadi.jpg";
import { Element } from "react-scroll";

import "./aboutme.css";

const Aboutme = () => {
  return (
    <Element className="aboutme-body" name="about">
      <div className="aboutme-heading">
        <div className="aboutme-heading1">About Me</div>
      </div>

      <div className="about-info-section">
        <div className="aboutimage">
          <img src={azadi} />
        </div>
        <div className="aboutinfo">
          <div className="info-greet">Hello There!</div>
          <div className="aboutinfo-1">
            I'm a prefinal year student pursuing an Integrated Post Graduate (B.Tech + M.Tech) in the Department of
            Information Technology at IIIT Gwalior. Recently, I'm a front-end developer with one year of experience. and
            I have been working with React/Redux and related libraries/frameworks since 2021.
          </div>
          <div className="aboutinfo-1">
            Currently, I'm Looking for a Summer Internship in the SDE role and I'm most passionate about solving real
            life problems through programming and I aim to pursue this passion in the field of software engineering.
          </div>
          <a
            href="https://drive.google.com/drive/folders/1Xr_NdFu4FGGQX8ZGRcAEhcxC98417WTw"
            target="_blank"
            rel="noreferrer"
          >
            <div className="info-button">
              <div className="about-button">Download Resume</div>
            </div>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Aboutme;
