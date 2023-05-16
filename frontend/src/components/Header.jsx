import React from "react";
import FotoBuku from "../assets/FOTO-BUKU.png";
import Hitam from "../assets/HITAM.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="relative">
        <div className="mx-auto">
          <img src={FotoBuku} />
          <div className="absolute top-0">
            <img src={Hitam} />
          </div>
        </div>
        <Link to={`/`}>
          <h1 className="text-[44px] font-bold absolute top-0 text-[#FFFF] inset-0 flex items-center justify-center">
            SUPER PREVIEW
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
