import React from "react";
import ProcedureImage from "../../assets/images/home/Group 5409.png";
import ProcedureImage1 from "../../assets/images/home/Group 5410.png";
const Procedure = () => {
  return (
    <div className="procedure-bg w-full pax-[200px] ">
      <div className="container-class py-[100px]">
        <div className="flex items-center">
          <div>
            <img src={ProcedureImage} alt="ProcedureImage" />
          </div>
          <div className="pl-[99px]">
            <h2 className="text-[#222] text-[40px] font-medium w-[509px]">
              Leave paper invoices and payments in the dust
              <span className="text-[#00D588]">.</span>
            </h2>
            <p className="text-[#222] w-[510px] pt-[20px] text-[18px] font-light">
              Our AP automation solutions are helping more businesses increase
              efficiency, visibility and control in the AP process than ever
              before. Seamlessly integrated with your current accounting system
              or ERP, and connected to one of the largest supplier networks,
              you’re able to process invoices and make payments without touching
              any paper.
            </p>
          </div>
        </div>
        <div className="flex items-center pt-[200px]">
          <div>
            <h2 className="text-[#222] text-[40px] font-medium w-[509px]">
              Pay bills with confidence & context
              <span className="text-[#00D588]">.</span>
            </h2>
            <p className="text-[#222] w-[510px] pt-[20px] text-[18px] font-light">
              Our AI OCR Solution automates invoice data extraction, reduce
              errors, enhance processing efficiency, and facilitate storage and
              retrieval. It integrates with accounting systems ensure accurate
              payments, cross-verification for accuracy. OCR allows cost
              tracking, budget monitoring, and fraud detection. Faster
              processing and payments strengthen vendor relationships and
              maintain compliance.
            </p>
          </div>
          <div className="pl-[56px]">
            <img src={ProcedureImage1} alt="ProcedureImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procedure;
