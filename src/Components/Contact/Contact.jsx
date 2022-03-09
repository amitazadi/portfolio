import React from "react";
import contact from "../../images/contact.png";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Element } from "react-scroll";

import "./contact.css";

const Contact = () => {
  return (
    <Element name="contact" className="contact-body">
      <div className="aboutme-heading">
        <div className="aboutme-heading1">Get In Touch</div>
      </div>

      <div className="contact-info">
        <div className="contact-img">
          {" "}
          <img src={contact} />
        </div>

        <div className="contact-details">
          <div className="contact-details-para">
            I'm available on LinkedIn, Twitter and Instagram. Mail and LinkedIn are the best ways to communicate. You
            can contact me at any time..
          </div>
          <div className="contact-button">
            <div className="about-button">Send Email</div>
          </div>
          <div className="contact-social">
            <a href="https://github.com/amitazadi" target="_blank" rel="noreferrer">
              <span>Github</span>
            </a>{" "}
            |{" "}
            <a href="https://www.linkedin.com/in/amit-kumar-azadi/" target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
            </a>{" "}
            |{" "}
            <a href="https://www.instagram.com/amitazadi/" target="_blank" rel="noreferrer">
              <span>Instagram</span>
            </a>{" "}
            |{" "}
            <a href="https://www.facebook.com/amitazadi/" target="_blank" rel="noreferrer">
              <span>Facebook</span>
            </a>
          </div>
          <div className="copyright">
            <AiOutlineCopyrightCircle />
            Copyright-2022 amitazadi
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
