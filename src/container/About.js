import React from "react";
import Header from "../utils/header";
import Banner from "../components/about/banner";
import AboutMarket from "../components/about/aboutMarket";
import Improving from "../components/about/improving";
import IndustryInsider from "../components/about/industryInsider";
import Footer from "../utils/footer";

const About = () => {
  return (
    <div>
      <Header />
      <Banner />
      <AboutMarket />
      <Improving />
      <IndustryInsider />
      <Footer/>
    </div>
  );
};

export default About;
