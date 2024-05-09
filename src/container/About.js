import React from "react";
import Header from "../utils/header";
import Banner from "../components/about/banner";
import AboutMarket from "../components/about/aboutMarket";
import Improving from "../components/about/improving";

const About = () => {
  return (
    <div>
      <Header />
      <Banner />
      <AboutMarket />
      <Improving />
    </div>
  );
};

export default About;
