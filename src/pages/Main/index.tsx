import React from "react";
import { getAllItems } from "../../services/database";
import Footer from "../components/Footer";
import HeaderCarrossel from "../components/HeaderCarrossel";
import Navbar from "../components/Navbar";
import SectionAbout from "./components/SectionAbout";
import SectionFeatures from "./components/SectionFeatures";
import SectionProjects from "./components/SectionProjects";
import SectionServices from "./components/SectionServices";
import SectionTestimonial from "./components/SectionTestimonial";

const Main = () => {
  const [projects, setProjects] = React.useState<any[]>([]);

  React.useEffect(() => {
    getAllItems("dataWebSite/projects").then((response: any) => {
      setProjects(response);
    });
  }, []);
  
  return (
    <div className="body-inner">
      <Navbar />
      <HeaderCarrossel />
      {/*SECTIONS*/}
      <SectionAbout />
      <SectionFeatures />
      <SectionServices />
      <SectionProjects data={projects}/>
      <SectionTestimonial />
      {/*SECTIONS*/}
      <Footer />
    </div>
  );
};

export default Main;
