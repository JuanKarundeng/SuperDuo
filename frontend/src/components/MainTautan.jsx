import React from "react";

const MainTautan = ({ image, name, link, id }) => {
  return (
    <div>
      <div className="mx-auto w-max">
        <img className="" src={image} alt="" />

        <h1 className="text-[#000000] text-[26px]">{name}</h1>
      </div>

      <p className="text-[#000000]">{link}</p>
    </div>
  );
};
export default MainTautan;
