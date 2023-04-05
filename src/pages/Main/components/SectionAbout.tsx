import React from "react";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./css/about.css"

const SectionAbout = () => {

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section id="como-funciona-energia-solar" className="facts-area dark-bg">
      <div className="container">
        <h2 data-aos="fade-up">Depoimentos</h2>
        <p data-aos="fade-down">Veja o que nossos clientes acham de nós!</p>
       
          <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={30}
              pagination={pagination}
              modules={[Pagination]}
          >
            <SwiperSlide>
              <div>
                <iframe
                  style={{ alignSelf: "center" }}
                  width={300}
                  height={500}
                  src="https://www.youtube.com/embed/2S1F6NBmTbQ"
                  title="Depoimento do Marcelo! - D | Walt Engenharia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <iframe
                  style={{ alignSelf: "center" }}
                  width={300}
                  height={500}
                  src="https://www.youtube.com/embed/Ph7OHBygBVw"
                  title="Depoimento da Camila! - D | Walt Engenharia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <iframe
                  style={{ alignSelf: "center" }}
                  width={300}
                  height={500}
                  src="https://www.youtube.com/embed/8S3tFOjnw5c"
                  title="Depoimento do Paulo! - D | Walt Engenharia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </SwiperSlide>
          </Swiper>
    
      </div>
    </section>
  );
};

export default SectionAbout;
