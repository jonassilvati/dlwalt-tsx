import React from "react";
import Footer from "../components/Footer";
import HeaderCarrossel from "../components/HeaderCarrossel";
import Navbar from "../components/Navbar";
import SectionAbout from "./components/SectionAbout";
import SectionFeatures from "./components/SectionFeatures";
import SectionProjects from "./components/SectionProjects";
import SectionServices from "./components/SectionServices";
import SectionTestimonial from "./components/SectionTestimonial";

const Main = () => {
  return (
    <div className="body-inner">
      <Navbar />
      <HeaderCarrossel />
      {/*SECTIONS*/}
      <SectionAbout />
      <SectionFeatures />
      <SectionServices />
      <SectionProjects />
      <SectionTestimonial />
      {/*SECTIONS*/}
      <Footer />
    </div>
  );
};

export default Main;
