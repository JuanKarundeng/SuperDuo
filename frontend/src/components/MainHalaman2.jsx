import React from "react";
import { Link } from "react-router-dom";

const MainHalaman2 = ({ image, name, id }) => {
  return (
    <div>
      <div className="mx-auto w-max">
        <img className="" src={image} alt="" />

        <h1 className="text-[#000000] text-[26px]">{name}</h1>
      </div>
      <Link to={`/preview`}>
        <h1 className="text-[#000000] text-[26px]">Preview</h1>
      </Link>

      <Link to={`/tautan`}>
        <h1 className="text-[#000000] text-[26px]">Tautan</h1>
      </Link>
    </div>
  );
};
export default MainHalaman2;
