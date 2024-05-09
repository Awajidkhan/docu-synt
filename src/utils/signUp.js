import React from "react";
import LoginLogo from "../assets/images/userDetails/Group.svg";

const SignUp = () => {
  return (
    <div className="flex h-100vh">
      <div className="login-bg w-[45%]">
        <div className="h-[inherit] w-full flex justify-center items-center">
          <div>
            <div className="flex justify-center">
              <img src={LoginLogo} alt="LoginLogo" />
            </div>
            <div className="flex items-center justify-center pt-[50px]">
              <p className="text-white font-[400] text-[48.629px] cursor-pointer">
                DocuSynth Ai
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  w-[55%] justify-center ">
        <div className="pt-[80px]">
          <div className="pt-[70px]">
            <p className="text-black font-[600] text-[52px]">
              Welcome To DocuSynth
            </p>
            <div className="flex justify-center pt-[18px]">
              <p className="text-[#666] font-[400] text-[18px]  text-center w-[376px]">
                Revolutionizing Construction Companies with AI-powered OCR
              </p>
            </div>
          </div>
          <div className="pt-[30px] ">
            <div
              className="rounded-[20px] p-[30px]"
              style={{
                background:
                  "linear-gradient(125deg, rgba(255, 255, 255, 0.40) 15.83%, rgba(255, 255, 255, 0.55) 100%)",
                backdropFilter: "blur(5px)",
              }}
            >
              <div class="mb-[24px]">
                <input
                  type="text"
                  class="w-full py-[20px] pl-[20px] rounded-[10px] outline-none text-[#52525B] text-sm font-normal border border-[#CCC]"
                  placeholder="Name"
                  style={{
                    background:
                      "linear-gradient(125deg, rgba(255, 255, 255, 0.70) 15.83%, rgba(255, 255, 255, 0.85) 100%)",
                    backdropFilter: "blur(17.5px)",
                  }}
                />
              </div>
              <div class="mb-[14px]">
                <input
                  type="email"
                  class="w-full py-[20px] pl-[20px] rounded-[10px] outline-none text-[#52525B] text-sm font-normal border border-[#CCC]"
                  placeholder="Email"
                  style={{
                    background:
                      "linear-gradient(125deg, rgba(255, 255, 255, 0.70) 15.83%, rgba(255, 255, 255, 0.85) 100%)",
                    backdropFilter: "blur(17.5px)",
                  }}
                />
              </div>
              <div class="mb-[14px]">
                <input
                  type="password"
                  class="w-full py-[20px] pl-[20px] rounded-[10px] outline-none text-[#52525B] text-sm font-normal border border-[#CCC]"
                  placeholder="Password"
                  style={{
                    background:
                      "linear-gradient(125deg, rgba(255, 255, 255, 0.70) 15.83%, rgba(255, 255, 255, 0.85) 100%)",
                    backdropFilter: "blur(17.5px)",
                  }}
                />
              </div>
              <div class="mb-[14px]">
                <input
                  type="password"
                  class="w-full py-[20px] pl-[20px] rounded-[10px] outline-none text-[#52525B] text-sm font-normal border border-[#CCC]"
                  placeholder="Confirm Password"
                  style={{
                    background:
                      "linear-gradient(125deg, rgba(255, 255, 255, 0.70) 15.83%, rgba(255, 255, 255, 0.85) 100%)",
                    backdropFilter: "blur(17.5px)",
                  }}
                />
              </div>
              <div className="py-[24px]">
                <p className="text-[#004862] font-[400] text-[18px]  text-end">
                  Forgot Password?
                </p>
              </div>
              <div className="border border-[#004862] rounded-[5px] bg-[#004862] text-center">
                <button
                  //   onClick={loginUser}
                  className="  py-[18px] text-white text-[16px] font-[600]"
                >
                  Sign Up
                </button>
              </div>
              <div className="pt-[24px]">
                <p className=" text-[#222] font-normal text-[14px]  text-center">
                  Don't have an account?{" "}
                  <span className="text-[#004862] font-semibold">Sign up</span>
                </p>
              </div>

              <div className="pt-[22px] flex  justify-center">
                <input type="checkbox" className="accent-[#00D588] " />
                <label className=" text-[#666] font-[400] text-[14px]  text-center pl-[22px]">
                  I agree to the{" "}
                  <span className="text-[#004862] font-[400] underline">
                    Terms of Use
                  </span>{" "}
                  and {""}
                  <span className="text-[#004862] font-[400] underline">
                    Privacy Policy
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
