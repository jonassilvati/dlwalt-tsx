"use client"

import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeaderCarrossel from "@/components/HeaderCarrossel";
import SectionAbout from "./components/SectionAbout";
import SectionFeatures from "./components/SectionFeatures";
import SectionServices from "./components/SectionServices";
import SectionProjects from "./components/SectionProjects";
import SectionTestimonial from "./components/SectionTestimonial";
import { getAllItems } from "@/services/database";
import SectionBYD from "./components/SectionBYD";



export default function Home() {
  const [projects, setProjects] = React.useState<any[]>([]);
  
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


  React.useEffect(() => {
    getAllItems("dlwalt/projects").then((response: any) => {
      setProjects(response);
    });

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(jsonLd);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="body-inner">
      <Navbar />
      <HeaderCarrossel />
      {/*SECTIONS*/}
      <SectionBYD />
      <SectionFeatures />
      <SectionServices />
      <SectionProjects data={projects} />
      <SectionTestimonial />
      {/*SECTIONS*/}
      <FloatingWhatsApp
        phoneNumber="+556892253306"
        accountName="Atendimento D | Walt"
        placeholder="Olá! Preciso de um orçamento de 500kW"
        chatMessage="Vamos realizar seu orçamento agora mesmo?"
        statusMessage="Geralmente responde em 5 minutos"
        avatar="https://cdn.discordapp.com/attachments/893220475663187968/1093602395415650314/316481495_1643357396086827_3975979139853710989_n.png"
      />
      <Footer />
    </div>
  );
}
