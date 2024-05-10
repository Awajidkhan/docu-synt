import React from "react";
import AboutImage from "../../assets/images/about/Group 5419.png";
const Banner = () => {
  return (
    <div className="container-class">
      <div className="flex items-center pt-[130px] pb-[170px]">
        <div>
          <img src={AboutImage} alt="ProcedureImage" />
        </div>
        <div className="pl-[30px]">
          <h2 className="text-[#222] text-[40px] font-medium w-[625px]">
            Transforming the accounts payable process, one company at a time
            <span className="text-[#00D588]">.</span>
          </h2>
          <p className="text-[#222] w-[515px] pt-[30px] text-[18px] font-light">
            Our AP automation solutions are helping more businesses increase
            efficiency, visibility and control in the AP process than ever
            before. Seamlessly integrated with your current accounting system or
            ERP, and connected to one of the largest supplier networks, you’re
            able to process invoices and make payments without touching any
            paper.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
