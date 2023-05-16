import React from "react";
import Instagram from "../assets/INSTAGRAM.png";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-[#FFFFFF] mt-[500px] text-[26px] font-bold">
      <div className="flex ml-10">
        <p>Contact us:</p>
      </div>
      <div className="flex ml-10">
        <img src={Instagram} />
        <p>@marchelinoraco_</p>
      </div>
      <div className="flex ml-10">
        <img src={Instagram} />
        <p>@juanvicccc</p>
      </div>
    </footer>
  );
};

export default Footer;
