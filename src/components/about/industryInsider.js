import React from "react";
import VideoBannerImage from "../../assets/images/about/div.background.png";
const IndustryInsider = () => {
  return (
    <div className="pb-[150px]">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-[#222] font-medium text-[40px]">
          Created by an industry insider
          <span className="text-[#00D588]">.</span>
        </h1>
        <div>
          <p className="text-[#222] text-[18px] font-[300] pt-[20px] w-[496px] text-center">
            Is bill line item data entry overwhelming? Eliminate the need for
            any manual data entry with
          </p>
        </div>
      </div>
      <div className="industry-insider-bg mt-[350px] relative ">
        <video
          className=" h-[540px] w-[64.5%] object-cover rounded-[10px] absolute  top-[-250px] right-[331px]"
          controls
          autoPlay
          poster={VideoBannerImage}
        >
          <source
            className="w-full h-full"
            src="src/assets/images/about/pexels-zura-narimanishvili-5490419 (1080p).mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {/* <div className="industry-insider-bg mt-[350px] relative">
        
      </div> */}
    </div>
  );
};

export default IndustryInsider;
