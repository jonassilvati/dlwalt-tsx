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
    getAllItems("dlwalt/projects").then((response: any) => {
      setProjects(response);
    });
  }, []);

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "D | Walt Engenharia",
    url: "https://www.dlwalt.com/",
    logo: "/images/ogimages/index.jpg",
    sameAs: [
      "https://www.facebook.com/dlwalt",
      "https://www.instagram.com/dlwalt.engenharia/",
    ],
    description:
      "Somos a D | Walt Engenharia, empresa especializada em Energia Solar, entre no nosso site para nos conhecer melhor!",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.dlwalt.com/pesquisa?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="body-inner">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <Navbar />
      <HeaderCarrossel />
      {/*SECTIONS*/}
      <SectionAbout />
      <SectionFeatures />
      <SectionServices />
      <SectionProjects data={projects} />
      <SectionTestimonial />
      {/*SECTIONS*/}
      <Footer />
    </div>
  );
};

export default Main;
