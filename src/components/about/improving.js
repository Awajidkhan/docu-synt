import React from "react";
import AboutImage3 from "../../assets/images/commonImages/Group 5403.svg";
import AboutImage1 from "../../assets/images/commonImages/Group 5412.svg";
import AboutImage2 from "../../assets/images/commonImages/Group 5415.svg";
import AboutImage4 from "../../assets/images/commonImages/Group 5421.svg";

const Improving = () => {
  return (
    <div className="container-class pt-[60px] pb-[150px]">
      <div className="flex items-start justify-between">
        <div className="w-[30%]">
          <h1 className="text-[#222] text-[40px] font-medium w-[369px]">
            Improving Every Aspect of Accounts Payable
            <span className="text-[#00D588]">.</span>
          </h1>
          <p className="leadinf-[150%] pt-[40px] w-[332px] text-[#222] font-medium text-[18px]">
            Is bill line item data entry overwhelming?
          </p>
          <p className="font-normal leadinf-[200%]  w-[332px] text-[#222] pt-[10px] text-[18px]">
            Eliminate the need for any manual data entry with
          </p>
        </div>
        <div className="w-[65%] bg-[#0048620d] pt-[40px] px-[50px] pb-[94px] rounded-[10px] flex flex-wrap">
          <div className="flex items-start justify-between">
            <div className="w-[42%]">
              <img src={AboutImage1} alt="BusinessSolutionImage1" />
              <div className="pt-[28px]">
                <h1 className="text-[#004862] text-[20px] font-[600] tracking-wide">
                  Instant bill data capture
                </h1>
                <p className="w-[310px] text-[16px] font-light text-[#222] pt-2.5">
                  DocuSynth integrates with QuickBooks Online and Desktop. We
                  sync more data, and in a more useful way, than any other
                  accounts payable tool.
                </p>
              </div>
            </div>

            <div className="w-[42%]">
              <img src={AboutImage2} alt="BusinessSolutionImage1" />
              <div className="pt-[28px]">
                <h1 className="text-[#004862] text-[20px] font-[600] tracking-wide">
                  Approval & authorization
                </h1>
                <p className="w-[310px] text-[16px] font-light text-[#222] pt-2.5">
                  Gain a centralized AP repository for your team. Easily
                  auto-forward bills or receipts to their dedicated inbox, and
                  MakersHub will process them.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between pt-[100px]">
            <div className="w-[42%]">
              <img src={AboutImage3} alt="BusinessSolutionImage1" />
              <div className="pt-[28px]">
                <h1 className="text-[#004862] w- text-[20px] font-[600] tracking-wide">
                  Mapping to QuickBooks
                </h1>
                <p className="w-[310px] text-[16px] font-light text-[#222] pt-2.5">
                  Configure mapping rules one time, and ensure correct coding
                  forever. Auto-create new items or expenses & assign to the
                  Chart of Accounts.
                </p>
              </div>
            </div>
            <div className="w-[42%]">
              <img src={AboutImage4} alt="BusinessSolutionImage1" />
              <div className="pt-[28px]">
                <h1 className="text-[#004862] text-[20px] font-[600] tracking-wide">
                  Embedded payments
                </h1>
                <p className="w-[310px] text-[16px] font-light text-[#222] pt-2.5">
                  Collaborate with full context to streamline the review
                  process. Add notes or documents, and notify your team when
                  ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Improving;
