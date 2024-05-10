import React, { useState } from "react";
import SolutionImage1 from "../../assets/images/commonImages/Group 5412.svg";
import SolutionImage2 from "../../assets/images/commonImages/Group 5415.svg";
import SolutionImage3 from "../../assets/images/commonImages/Group 5403.svg";
const Banner = () => {
  const [arrowHover1, setArrowHover1] = useState(false);
  const [arrowHover2, setArrowHover2] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "We provide the best solution for your business development"
  );
  const optionDescriptions = {
    "We provide the best solution for your business development":
      "A one stop shop for Construction Companies to manage their invoice process.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry":
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  };

  const handleArrowClick = (option) => {
    setSelectedOption(option);
  };

  const handleMouseEnter1 = () => {
    setArrowHover1(true);
  };

  const handleMouseLeave1 = () => {
    setArrowHover1(false);
  };

  const handleMouseEnter2 = () => {
    setArrowHover2(true);
  };

  const handleMouseLeave2 = () => {
    setArrowHover2(false);
  };

  return (
    <div className="container-class py-[120px]">
      <div className="flex  justify-between flex-col">
        {selectedOption && (
          <div className=" flex items-start justify-between h-[200px]">
            <h2 className="w-[510px] text-[#222] text-[40px] font-medium">
              {selectedOption}
              <span className="text-[#00D588]">.</span>
            </h2>
            <div>
              <p className="text-[#222] w-[515px] text-[18px] font-medium">
                {optionDescriptions[selectedOption]}
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-col justify-between ">
          <div className="flex items-center justify-end gap-[20px]">
            <div
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              onClick={() =>
                handleArrowClick(
                  "We provide the best solution for your business development"
                )
              }
              style={{
                backgroundColor: arrowHover1 ? "#004862" : "#0048620d",
              }}
              className="w-[50px] h-[50px]  rounded-[50px] cursor-pointer"
            >
              <div className="flex items-center justify-center h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="9"
                  viewBox="0 0 17 9"
                  fill={arrowHover1 ? "#00D588" : "#004862"}
                >
                  <path
                    d="M0.191568 3.58477C0.191765 3.58458 0.191929 3.58435 0.192156 3.58415L3.60269 0.190067C3.85819 -0.064196 4.27146 -0.0632498 4.52578 0.192286C4.78008 0.447788 4.7791 0.861051 4.5236 1.11535L2.23376 3.39408H16.0568C16.4173 3.39408 16.7095 3.6863 16.7095 4.04679C16.7095 4.40728 16.4173 4.6995 16.0568 4.6995H2.2338L4.52356 6.97824C4.77907 7.23253 4.78005 7.64579 4.52575 7.9013C4.27142 8.15687 3.85813 8.15775 3.60266 7.90352L0.192123 4.50943C0.191929 4.50924 0.191765 4.50901 0.191536 4.50881C-0.0640965 4.25367 -0.0632801 3.83907 0.191568 3.58477Z"
                    fill={arrowHover1 ? "#00D588" : "#004862"}
                  />
                </svg>
              </div>
            </div>
            <div
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              onClick={() =>
                handleArrowClick(
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                )
              }
              style={{
                backgroundColor: arrowHover2 ? "#004862" : "#0048620d",
              }}
              className="w-[50px] h-[50px]  rounded-[50px] cursor-pointer"
            >
              <div className="flex items-center justify-center h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="9"
                  viewBox="0 0 17 9"
                  fill={arrowHover2 ? "#00D588" : "#004862"}
                >
                  <path
                    d="M16.5179 3.58477C16.5177 3.58458 16.5175 3.58435 16.5173 3.58415L13.1068 0.190067C12.8513 -0.064196 12.438 -0.0632498 12.1837 0.192286C11.9294 0.447788 11.9304 0.861051 12.1859 1.11535L14.4757 3.39408H0.652709C0.292218 3.39408 0 3.6863 0 4.04679C0 4.40728 0.292218 4.6995 0.652709 4.6995H14.4757L12.1859 6.97824C11.9304 7.23253 11.9294 7.64579 12.1837 7.9013C12.4381 8.15687 12.8513 8.15775 13.1068 7.90352L16.5173 4.50943C16.5175 4.50924 16.5177 4.50901 16.5179 4.50881C16.7736 4.25367 16.7728 3.83907 16.5179 3.58477Z"
                    fill={arrowHover2 ? "#00D588" : "#004862"}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[78px] flex justify-between items-start">
        <div className="w-[30%]">
          <img src={SolutionImage1} alt="BusinessSolutionImage1" />
          <div className="pt-[28px]">
            <h1 className="text-[#004862] w- text-[20px] font-[600] tracking-wide">
              DocuSynth AI InvoiceFlow
            </h1>
            <p className="w-[310px] text-[16px] font-light text-[#222] pt-2.5">
              AI algorithms consolidate invoices into standardized statements,
              reducing manual effort and errors, enhancing the customer
              experience.
            </p>
          </div>
        </div>
        <div className="w-[30%]">
          <img src={SolutionImage2} alt="BusinessSolutionImage1" />
          <div className="pt-[28px]">
            <h1 className="text-[#004862] text-[20px] font-[600] tracking-wide">
              DocuSynth AI-Enabled Time and Expense Tracking
            </h1>
            <p className="w-[310px] text-[16px] font-light text-[#222] pt-2.5">
              DocuSynth AI-InvoiceFlow automates invoice preparation by tracking
              billable hours and expenses in real-time. It suggests entries
              using historical data, reducing manual work and errors.
            </p>
          </div>
        </div>
        <div className="w-[30%]">
          <img src={SolutionImage3} alt="BusinessSolutionImage1" />
          <div className="pt-[28px]">
            <h1 className="text-[#004862] text-[20px] font-[600] tracking-wide">
              Advanced Client Portal with AI Features
            </h1>
            <p className="w-[310px] text-[16px] font-light text-[#222] pt-2.5">
              Offers real-time transparency, fosters trust, reduces disputes,
              and encourages prompt payment. It also provides insights for cost
              optimization, improving satisfaction and loyalty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
