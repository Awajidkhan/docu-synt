import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container-class pt-[100px]">
        <div className="bg-[#004862] w-full rounded-[20px] h-[300px]">
          <div className="h-[inherit] flex justify-between items-center px-[80px]">
            <div>
              <h1 className="text-[#FFF] text-[36px] font-medium w-[425px]">
                Ready to start analyzing your Documents
                <span className="text-[#00D588]">?</span>
              </h1>
            </div>
            <div class="relative flex h-[48px] w-[436px] ">
              <button
                className="!absolute right-1 top-1 z-10 select-none rounded-[10px] bg-[#00D588] py-[8px] px-[18px] text-center align-middle text-[16px] font-[400] uppercase text-[#004862] shadow-md  "
                type="button"
                data-ripple-light="true"
              >
                Get Started
              </button>
              <input
                type="email"
                className="peer h-full w-full rounded-[10px] border border-white bg-white px-3 py-2.5 pr-[146px] font-sans text-sm font-normal text-[#222] outline outline-0 transition-all  "
                placeholder="Email Address "
                required
              />
            </div>
          </div>
        </div>
        <div className="pt-[100px]">
          <div className="flex items-start justify-between">
            <div className="w-[44%]">
              <h5 className="text-[16px] text-[#222] font-medium">
                About DocuSynth
              </h5>
              <p className="w-[512px] text-[#666] text-[14px] font-[400] py-[30px]">
                DocuSynthAi, we revolutionize document processing for the
                construction and manufacturing sectors with our cutting-edge
                AI-powered Document Analyzer. Leveraging advanced OCR
                technology, our platform offers a seamless, automated solution
                for managing invoices, enhancing accuracy and efficiency. We
                help businesses reduce manual data entry, minimize errors, and
                streamline financial operations, transforming the way companies
                handle their documentation workflows. Trust us to empower your
                organization with faster, smarter decision-making capabilities
                through superior data integration and analysis.
              </p>
            </div>
            <div className="w-[10%] flex flex-col gap-[21px]">
              <h5 className="text-[16px] text-[#222] font-medium">Company</h5>
              <p className=" cursor-pointer text-[#666] text-[14px] font-[400] ">
                About
              </p>
              <p className="cursor-pointer text-[#666] text-[14px] font-[400] ">
                Solution
              </p>
              <p className="cursor-pointer text-[#666] text-[14px] font-[400] ">
                Contact
              </p>
              <p className="cursor-pointer text-[#666] text-[14px] font-[400] ">
                Career
              </p>
            </div>
            <div className="w-[14%] flex flex-col gap-[21px]">
              <h5 className="text-[16px] text-[#222] font-medium">Help</h5>
              <p className=" cursor-pointer text-[#666] text-[14px] font-[400]">
                Customer Support
              </p>
              <p className="cursor-pointer text-[#666] text-[14px] font-[400] ">
                Delivery Details
              </p>
              <p className="cursor-pointer text-[#666] text-[14px] font-[400] ">
                Terms & Conditions
              </p>
              <p className="cursor-pointer text-[#666] text-[14px] font-[400] ">
                Privacy Policy
              </p>
            </div>
            <div className="w-[14%] flex flex-col gap-[21px]">
              <h5 className="text-[16px] text-[#222] font-medium">Resources</h5>
              <p className=" cursor-pointer text-[#666] text-[14px] font-[400]">
                Free eBooks
              </p>
              <p className="cursor-pointer text-[#666] text-[14px] font-[400] ">
                Development Tutorial
              </p>
              <p className="cursor-pointer text-[#666] text-[14px] font-[400] ">
                How to - Blog
              </p>
              <p className="cursor-pointer text-[#666] text-[14px] font-[400]">
                Youtube Playlist
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[50px]">
        <div className="bg-[#222] py-[24px] w-full">
          <div className="container-class">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[#FFF] font-semibold text-[16px] cursor-pointer">
                  © DocuSynth 2024
                </h1>
              </div>
              <div className="flex w-[200px] items-center justify-between">
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                  >
                    <path
                      d="M15.9991 2.35408C15.3991 2.61946 14.7658 2.78532 14.0992 2.88484C14.7658 2.48677 15.2991 1.8565 15.5325 1.09353C14.8992 1.45843 14.1992 1.72381 13.4326 1.88967C12.8326 1.2594 11.966 0.861328 11.0327 0.861328C9.23282 0.861328 7.76623 2.32091 7.76623 4.11221C7.76623 4.37759 7.79957 4.6098 7.86623 4.842C5.16638 4.70931 2.73318 3.41559 1.09994 1.42526C0.833287 1.92284 0.666629 2.4536 0.666629 3.0507C0.666629 4.17856 1.23326 5.17373 2.13321 5.77083C1.59991 5.73765 1.09994 5.60497 0.633298 5.37276V5.40593C0.633298 6.9982 1.76657 8.32509 3.26648 8.62364C2.99983 8.68999 2.69985 8.72316 2.39987 8.72316C2.19988 8.72316 1.96656 8.68999 1.76657 8.65682C2.19988 9.95053 3.39981 10.9125 4.83306 10.9125C3.69979 11.775 2.29987 12.3058 0.766624 12.3058C0.499972 12.3058 0.23332 12.3058 0 12.2726C1.46658 13.2014 3.16649 13.7322 5.03305 13.7322C11.066 13.7322 14.3659 8.75633 14.3659 4.44393C14.3659 4.31125 14.3659 4.14538 14.3659 4.0127C14.9992 3.58146 15.5658 3.01753 15.9991 2.35408Z"
                      fill="#00D588"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                  >
                    <path
                      d="M3.01307 17.6362V9.72246H0.337158V6.63832H3.01307V4.36386C3.01307 1.72436 4.63292 0.287109 6.99883 0.287109C8.13213 0.287109 9.10614 0.371083 9.38999 0.408616V3.16704L7.7491 3.16778C6.46239 3.16778 6.21325 3.77629 6.21325 4.66923V6.63832H9.28194L8.88239 9.72246H6.21324V17.6362H3.01307Z"
                      fill="#00D588"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M10.4272 1.7394C13.017 1.7394 13.3237 1.74906 14.3467 1.79548C14.9619 1.80297 15.5711 1.91538 16.1481 2.12783C16.5665 2.28841 16.9464 2.5344 17.2635 2.84997C17.5806 3.16554 17.8278 3.54369 17.9891 3.96008C18.2026 4.53427 18.3155 5.14063 18.3231 5.75281C18.3693 6.77098 18.3794 7.07621 18.3794 9.65359C18.3794 12.231 18.3697 12.5362 18.3231 13.5544C18.3155 14.1666 18.2026 14.7729 17.9891 15.3471C17.8278 15.7635 17.5806 16.1416 17.2635 16.4572C16.9464 16.7728 16.5665 17.0188 16.1481 17.1794C15.5711 17.3918 14.9619 17.5042 14.3467 17.5117C13.3241 17.5577 13.0175 17.5678 10.4272 17.5678C7.83703 17.5678 7.53034 17.5581 6.50774 17.5117C5.89262 17.5042 5.28335 17.3918 4.70641 17.1794C4.28802 17.0188 3.90806 16.7728 3.59097 16.4572C3.27389 16.1416 3.02671 15.7635 2.86536 15.3471C2.6519 14.7729 2.53895 14.1666 2.53142 13.5544C2.48523 12.5362 2.47507 12.231 2.47507 9.65359C2.47507 7.07621 2.48477 6.77098 2.53142 5.75281C2.53895 5.14063 2.6519 4.53427 2.86536 3.96008C3.02671 3.54369 3.27389 3.16554 3.59097 2.84997C3.90806 2.5344 4.28802 2.28841 4.70641 2.12783C5.28335 1.91538 5.89262 1.80297 6.50774 1.79548C7.5308 1.74952 7.83749 1.7394 10.4272 1.7394ZM10.4272 0C7.79453 0 7.4629 0.0110321 6.42829 0.0579188C5.62326 0.0738547 4.82677 0.225553 4.07271 0.50656C3.42585 0.749114 2.83995 1.12922 2.35591 1.62035C1.86197 2.10226 1.47972 2.68568 1.23585 3.32987C0.953494 4.08033 0.801069 4.87302 0.785056 5.6742C0.738868 6.70295 0.727783 7.033 0.727783 9.65313C0.727783 12.2733 0.738868 12.6033 0.78598 13.633C0.801992 14.4342 0.954418 15.2269 1.23677 15.9773C1.48037 16.6214 1.86231 17.2048 2.35591 17.6868C2.84022 18.1781 3.42644 18.5582 4.07364 18.8006C4.8277 19.0816 5.62419 19.2333 6.42922 19.2493C7.46383 19.2952 7.79407 19.3072 10.4282 19.3072C13.0623 19.3072 13.3925 19.2962 14.4271 19.2493C15.2321 19.2333 16.0286 19.0816 16.7827 18.8006C17.4268 18.5521 18.0118 18.1726 18.5001 17.6863C18.9884 17.2 19.3694 16.6176 19.6186 15.9764C19.901 15.2259 20.0534 14.4333 20.0694 13.6321C20.1156 12.6033 20.1267 12.2733 20.1267 9.65313C20.1267 7.033 20.1156 6.70295 20.0685 5.67329C20.0525 4.8721 19.9001 4.07941 19.6177 3.32895C19.3741 2.68485 18.9922 2.10143 18.4986 1.61943C18.0143 1.12819 17.428 0.748076 16.7809 0.50564C16.0268 0.224633 15.2303 0.0729354 14.4253 0.0569995C13.3916 0.0110322 13.06 0 10.4272 0Z"
                      fill="#00D588"
                    />
                    <path
                      d="M10.4255 4.69629C9.44036 4.69629 8.47735 4.98702 7.65824 5.53171C6.83914 6.07641 6.20072 6.8506 5.82373 7.7564C5.44674 8.66219 5.3481 9.6589 5.54029 10.6205C5.73248 11.5821 6.20686 12.4653 6.90346 13.1586C7.60005 13.8519 8.48756 14.324 9.45376 14.5153C10.42 14.7065 11.4215 14.6084 12.3316 14.2332C13.2417 13.858 14.0196 13.2226 14.567 12.4074C15.1143 11.5922 15.4064 10.6338 15.4064 9.6534C15.4064 8.3387 14.8816 7.07783 13.9475 6.14819C13.0134 5.21856 11.7465 4.69629 10.4255 4.69629ZM10.4255 12.8711C9.78603 12.8711 9.16093 12.6824 8.62924 12.3288C8.09755 11.9753 7.68315 11.4727 7.43844 10.8848C7.19373 10.2968 7.1297 9.64983 7.25446 9.02566C7.37921 8.40148 7.68714 7.82814 8.1393 7.37814C8.59147 6.92813 9.16756 6.62168 9.79473 6.49752C10.4219 6.37336 11.072 6.43708 11.6628 6.68063C12.2535 6.92417 12.7585 7.33659 13.1138 7.86574C13.469 8.39489 13.6586 9.017 13.6586 9.6534C13.6586 10.5068 13.318 11.3252 12.7117 11.9287C12.1053 12.5321 11.283 12.8711 10.4255 12.8711Z"
                      fill="#00D588"
                    />
                    <path
                      d="M15.6039 5.65867C16.2467 5.65867 16.7678 5.14005 16.7678 4.5003C16.7678 3.86054 16.2467 3.34192 15.6039 3.34192C14.9611 3.34192 14.4399 3.86054 14.4399 4.5003C14.4399 5.14005 14.9611 5.65867 15.6039 5.65867Z"
                      fill="#00D588"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.74219 0C4.60059 0 0.464111 4.11672 0.464111 9.23377C0.464111 13.312 3.13156 16.7747 6.80413 18.0058C7.26803 18.0828 7.42267 17.8135 7.42267 17.5442C7.42267 17.3133 7.42267 16.7362 7.42267 15.9667C4.83254 16.5438 4.29132 14.7356 4.29132 14.7356C3.86607 13.6583 3.24753 13.389 3.24753 13.389C2.39704 12.8119 3.32485 12.8119 3.32485 12.8119C4.25266 12.8888 4.75522 13.7737 4.75522 13.7737C5.56705 15.1972 6.92011 14.774 7.46133 14.5432C7.53864 13.9276 7.7706 13.5429 8.04121 13.312C5.9923 13.0812 3.82741 12.2732 3.82741 8.7336C3.82741 7.73328 4.17534 6.88685 4.79388 6.27127C4.71656 6.04042 4.36863 5.11704 4.8712 3.80893C4.8712 3.80893 5.64437 3.57808 7.42267 4.77078C8.15718 4.57841 8.96902 4.46299 9.74219 4.46299C10.5154 4.46299 11.3272 4.57841 12.0617 4.77078C13.84 3.57808 14.6132 3.80893 14.6132 3.80893C15.1157 5.07857 14.8065 6.00195 14.6905 6.27127C15.2704 6.92532 15.657 7.73328 15.657 8.7336C15.657 12.2732 13.4921 13.0427 11.4045 13.2735C11.7524 13.5429 12.023 14.12 12.023 14.9664C12.023 16.1976 12.023 17.1979 12.023 17.5057C12.023 17.7365 12.1777 18.0443 12.6802 17.9674C16.3528 16.7747 19.0203 13.312 19.0203 9.23377C19.0203 4.11672 14.8838 0 9.74219 0Z"
                      fill="#00D588"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-[50px]">
                <h1 className="text-[#FFF] font-semibold text-[16px] cursor-pointer">
                  Terms
                </h1>
                <h1 className="text-[#FFF] font-semibold text-[16px] cursor-pointer">
                  Privacy
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
