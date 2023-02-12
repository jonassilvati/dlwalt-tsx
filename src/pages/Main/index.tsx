import React from "react";
import Footer from "../components/Footer";
import HeaderCarrossel from "../components/HeaderCarrossel";
import Navbar from "../components/Navbar";
import SectionAbout from "./components/SectionAbout";
import SectionFeatures from "./components/SectionFeatures";

const Main = () => {
  return (
    <div className="body-inner">
      <Navbar />
      <HeaderCarrossel />
      <SectionAbout />
      <SectionFeatures />
      <Footer />
    </div>
  );
};

export default Main;
