import React from "react";

const AboutMarket = () => {
  return (
    <div className=" bg-[#004862] w-full h-[210px]">
      <div className="container-class">
        <div className="flex items-center justify-between pt-[60px] pb-[40px]">
          <div className="text-center">
            <h1 className="text-[#00D588] text-[36px] font-semibold">
              $22.2 Billion
            </h1>
            <p className="text-[20px] font-medium text-white pt-2.5">
              Total Available Market
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-[#00D588] text-[36px] font-semibold">
              $8.88 Billion
            </h1>
            <p className="text-[20px] font-medium text-white pt-2.5">
              Serviceable Available Market
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-[#00D588] text-[36px] font-semibold">
              $88.8 Million
            </h1>
            <p className="text-[20px] font-medium text-white pt-2.5">
              Share of Market
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMarket;
