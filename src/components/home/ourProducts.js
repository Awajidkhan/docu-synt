import React from "react";
import OurProductImage from "../../assets/images/home/productnew 1.png";
const OurProducts = () => {
  return (
    <div className="ourProduct-bg">
      <div className="relative">
        <div className="container-class flex items-center h-[777px]">
          <h1 className="text-white text-[40px] font-medium">
            Our product<span className="text-[#00D588]">.</span>
          </h1>
        </div>
        <div className="absolute top-[-100px] right-[0px] ">
          <img src={OurProductImage} alt="OurProductImage" />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
