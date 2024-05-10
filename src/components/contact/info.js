import React from "react";
import ContactImage1 from "../../assets/images/contact/Group 5422.png";
const Information = () => {
  return (
    <div className=" bg-[#004862] w-full h-[210px]">
      <div className="container-class">
        <div className="flex items-center justify-between pt-[60px] pb-[40px]">
          <div className="text-start flex items-center gap-5">
            <div className="w-[80px] h-[80px]">
              <img
                src={ContactImage1}
                alt="ContactImage1"
                className="w-full h-full"
              />
            </div>
            <div>
              <h1 className="text-[#00D588] text-[36px] font-semibold">90%</h1>
              <p className="text-[20px] font-medium text-white pt-2.5">
                Error reduction
              </p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-[#00D588] text-[36px] font-semibold">75%</h1>
            <p className="text-[20px] font-medium text-white pt-2.5">
              Reduce processing time
            </p>
          </div>
          <div className="text-end">
            <h1 className="text-[#00D588] text-[36px] font-semibold">85%</h1>
            <p className="text-[20px] font-medium text-white pt-2.5">
              Improve customer satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
