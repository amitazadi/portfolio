import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";

const Card = ({ title, content, technologies }) => {
  return (
    <div className="card-info">
      <div className="card-icons-info">
        <div className="card-icons-gitlogo">
          <BsGithub />
        </div>
        <div className="card-icons-rocket">
          <BiRocket />
        </div>
      </div>
      <div className="card-content-title">{title}</div>

      <div className="card-content-body">{content}</div>

      <div className="card-content-body">
        <span>Technologies Used: </span>
        {technologies}
      </div>
    </div>
  );
};

export default Card;
