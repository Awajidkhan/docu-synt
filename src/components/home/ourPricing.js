import React, { useState } from "react";

const OurPricing = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  return (
    <div className="container-class">
      <div className="flex flex-col items-center ">
        <h1 className="text-[#222] text-[40px] font-medium">
          Our Pricing<span className="text-[#00D588]">.</span>
        </h1>
        <p className="w-[690px] text-[#222] font-light text-lg text-center pt-[20px]">
          Flexible monthly subscription rates starting at $65 for 100 documents,
          scaling up to $2500 for up to 5000 documents, making our technology
          accessible to businesses of various sizes.
        </p>
      </div>
      <div className="pt-[80px]">
        <div className="flex items-start justify-between">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`w-[30%] h-[490px] border border-[#CCC] rounded-[10px] ${
              isHovered ? "bg-[#004862]" : "bg-white"
            } cursor-pointer`}
          >
            <div className="flex flex-col items-center pt-[50px] pb-[18px]">
              <h1
                className={`text-[34px] ${
                  isHovered ? "text-white" : "text-[#222]"
                } font-semibold`}
              >
                Starter
              </h1>
              <p className="text-[44px] text-[#00D588] font-[700]">
                $99
                <span
                  className={`text-[15px] ${
                    isHovered ? "text-white" : "text-[#0F172A]"
                  }  font-normal`}
                >
                  /Month
                </span>
              </p>
            </div>
            <div className="border border-[#ccc] w-full"></div>
            <div className="flex flex-col items-center pt-[50px] pb-[44px]">
              <p
                className={`text-[18px] ${
                  isHovered ? "text-white" : "text-[#666]"
                } font-normal`}
              >
                100 Invoices
              </p>
              <p
                className={`text-[18px] ${
                  isHovered ? "text-white" : "text-[#666]"
                }  font-normal pt-[32px] w-[140px] text-center`}
              >
                $1.5 per invoice over 100
              </p>
              <div className="pt-[58px]">
                <button
                  type="button"
                  className={`${
                    isHovered ? "text-[#004862]" : "text-[#FFF]"
                  }  ${
                    isHovered ? "bg-white" : "bg-[#004862]"
                  } py-[12px] px-[40px] font-[400] rounded-[6px] text-[16px]`}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            className={`w-[30%] h-[490px] border border-[#CCC] rounded-[10px] ${
              isHovered1 ? "bg-[#004862]" : "bg-white"
            } cursor-pointer`}
          >
            <div className="flex flex-col items-center pt-[50px] pb-[18px]">
              <h1
                className={`text-[34px] ${
                  isHovered1 ? "text-white" : "text-[#222]"
                } font-semibold`}
              >
                Premium
              </h1>
              <p className="text-[44px] text-[#00D588] font-[700]">
                $199
                <span
                  className={`text-[15px] ${
                    isHovered1 ? "text-white" : "text-[#0F172A]"
                  }  font-normal`}
                >
                  /Month
                </span>
              </p>
            </div>
            <div className="border border-[#ccc] w-full"></div>
            <div className="flex flex-col items-center pt-[50px] pb-[44px]">
              <p
                className={`text-[18px] ${
                  isHovered1 ? "text-white" : "text-[#666]"
                } font-normal`}
              >
                200 Invoices
              </p>
              <p
                className={`text-[18px] ${
                  isHovered1 ? "text-white" : "text-[#666]"
                }  font-normal pt-[32px] w-[150px] text-center`}
              >
                $1.25 per invoice over 200
              </p>
              <div className="pt-[58px]">
                <button
                  type="button"
                  className={`${
                    isHovered1 ? "text-[#004862]" : "text-[#FFF]"
                  }  ${
                    isHovered1 ? "bg-white" : "bg-[#004862]"
                  } py-[12px] px-[40px] font-[400] rounded-[6px] text-[16px]`}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            className={`w-[30%] h-[490px] border border-[#CCC] rounded-[10px] ${
              isHovered2 ? "bg-[#004862]" : "bg-white"
            } cursor-pointer`}
          >
            <div className="flex flex-col items-center pt-[50px] pb-[18px]">
              <h1
                className={`text-[34px] ${
                  isHovered2 ? "text-white" : "text-[#222]"
                } font-semibold`}
              >
                Enterprise
              </h1>
              <p className="text-[20px] text-[#00D588] font-[700] pt-[20px] pb-[14px]">
                Call For Pricing
              </p>
            </div>
            <div className="border border-[#ccc] w-full"></div>
            <div className="flex flex-col items-center pt-[82px] pb-[44px]">
              <p
                className={`text-[18px] ${
                  isHovered2 ? "text-white" : "text-[#666]"
                } font-normal w-[255px] text-center`}
              >
                API Access $2500 monthly negotiable on invoice over 1,000 per
                month
              </p>

              <div className="pt-[58px]">
                <button
                  type="button"
                  className={`${
                    isHovered2 ? "text-[#004862]" : "text-[#FFF]"
                  }  ${
                    isHovered2 ? "bg-white" : "bg-[#004862]"
                  } py-[12px] px-[40px] font-[400] rounded-[6px] text-[16px]`}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPricing;
