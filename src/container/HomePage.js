import React from "react";
import Banner from "../components/home/banner";
import Header from "../utils/header";
import AccountPayable from "../components/home/accountPayable";
import Procedure from "../components/home/procedure";
import BusinessSolution from "../components/home/businessSolution";
import OurProducts from "../components/home/ourProducts";
import ServeYouBest from "../components/home/serveYouBest";
import OurPricing from "../components/home/ourPricing";
import Footer from "../utils/footer";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <AccountPayable />
      <Procedure />
      <BusinessSolution />
      <OurProducts />
      <ServeYouBest />
      <OurPricing />
      <Footer />
    </div>
  );
};

export default HomePage;
