import React from "react";
import { Link } from "react-router-dom";
import Search from "../assets/Group 1.png";

const Card = ({ image, name, id }) => {
  return (
    <div>
      <img
        src={image}
        className="ml-[40px] items-center w-[200px] h-[200px]"
        alt=""
      />

      <Link to={`/book/${id}`}>
        <h1 className="text-[#000000] text-[26px]">{name}</h1>
      </Link>
    </div>
  );
};
export default Card;
