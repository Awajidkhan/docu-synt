import React from "react";
import BannerImage from "../../assets/images/home/Images.png";
const banner = () => {
  return (
    <div className="pt-[192px] ">
      <div className="container-class flex">
        <div className="w-[640px]">
          <p className="text-[#004862] text-[68px] font-bold leading-[50px]">
            <h3>
              DocuSynth AI<spna className="text-[#00D588]">:</spna>
            </h3>
            <span className="text-[#222] text-[44px] font-[400] ">
              {" "}
              Revolutionizing Construction Companies with AI-powered OCR
            </span>
          </p>
          <div className="pt-[40px]">
            <button
              type="button"
              className="text-[#004862] bg-[#00D588] py-[8px] px-[28px] font-[400] rounded-[6px] text-[16px]"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute right-0 pt-[90px]">
          <img src={BannerImage} alt="BannerImage" />
        </div>
      </div>
    </div>
  );
};

export default banner;
