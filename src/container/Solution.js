import React from "react";
import Header from "../utils/header";
import PaperInvoices from "../components/solutions/paperInvoices";
import BusinessSolution from "../components/home/businessSolution";
import ServeYouBest from "../components/home/serveYouBest";
import Footer from "../utils/footer";
const Solution = () => {
  return (
    <div>
      <Header />
      <BusinessSolution backgroundColor="white" />
      <PaperInvoices />
      <ServeYouBest paddingTop="150px" paddingBottom="100px" />
      <Footer />
    </div>
  );
};

export default Solution;
