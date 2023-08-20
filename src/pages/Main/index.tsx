import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import { getAllItems } from "../../services/database";
import Footer from "../components/Footer";
import HeaderCarrossel from "../components/HeaderCarrossel";
import HelmetHeader from "../components/HelmetHeader";
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
      <HelmetHeader
        title={`Página Principal`}
        description="Somos a D | Walt Engenharia, empresa especializada em Energia Solar, entre no nosso site para nos conhecer melhor!"
      />
      <Navbar />
      <HeaderCarrossel />
      {/*SECTIONS*/}
      <SectionAbout />
      <SectionFeatures />
      <SectionServices />
      <SectionProjects data={projects} />
      <SectionTestimonial />
      {/*SECTIONS*/}
      <FloatingWhatsApp
        phoneNumber="+556993009413"
        accountName="Atendimento D | Walt"
        placeholder="Olá! Preciso de um orçamento de 500kW"
        chatMessage="Vamos realizar seu orçamento agora mesmo?"
        statusMessage="Geralmente responde em 5 minutos"
        avatar="https://cdn.discordapp.com/attachments/893220475663187968/1142942264751046787/361285748_1976901905980356_5673523601111169363_n.jpg"
      />
      <Footer />
    </div>
  );
};

export default Main;
