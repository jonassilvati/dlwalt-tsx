/* eslint-disable jsx-a11y/alt-text */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import "./css/projects.css";

const SectionProjects = () => {
  const data = [
    {
      id: "adsadge",
      title: "Projeto",
      imageURL:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/06/energia-solar.jpg",
      type: "Comercial",
    },
    {
        id: "adsasadadge",
        title: "Projeto",
        imageURL:
          "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/06/energia-solar.jpg",
        type: "Comercial",
      },
      {
        id: "adsadg34324e",
        title: "Projeto",
        imageURL:
          "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/06/energia-solar.jpg",
        type: "Comercial",
      },
  ];

  return (
    <section id="project-area" className="project-area solid-bg">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h2 className="section-title">Trabalho de Excelência</h2>
            <h3 className="section-sub-title">Projetos Recentes</h3>
          </div>
        </div>

        <Swiper
          effect={"coverflow"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {data.map((project) => {
            return (
              <SwiperSlide>
                <div className="shuffle-item" data-groups={[project.type]}>
                  <div className="project-img-container">
                    <a
                      className="gallery-popup"
                      href={project.imageURL}
                      aria-label="project-img"
                    >
                      <img
                        className="img-fluid"
                        src={project.imageURL}
                        alt="project-img"
                      />
                      <span className="gallery-icon">
                        <i className="fa fa-plus" />
                      </span>
                    </a>
                    <div className="project-item-info">
                      <div className="project-item-info-content">
                        <h3 className="project-item-title">
                          <a href="/projetos/Auto Posto Tucanos">
                            {project.title}
                          </a>
                        </h3>
                        <p className="project-cat">{project.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionProjects;
