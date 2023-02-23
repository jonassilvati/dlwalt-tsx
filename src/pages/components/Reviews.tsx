import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "./css/reviews.css";


const testemonials = [
  {
    name: "Girlanda Areal",
    text: "Super indico! Profissionais qualificados e prestativos. Sempre dando o suporte necessário! Sem dúvidas, a melhor! 👏😊 …",
    image:
      "https://lh3.googleusercontent.com/a-/ACB-R5R-bazVJIfkmdrWMUVNf-jssBPBA4jUYu5p7FedUZA=w36-h36-p-c0x00000000-rp-mo-br100",
  },
  {
    name: "Valtemir Silva",
    text: "Empresa com um ótimo atendimento, serviços de qualidade e sempre preocupada com os clientes. Recomendo 👍",
    image:
      "https://lh3.googleusercontent.com/a-/ACB-R5SZqnSrTqy2_jQWiHahGigwHVW51WMRQvXmcLYMIuE=w36-h36-p-c0x00000000-rp-mo-br100",
  },
];

const Stars = () => {
  return (
    <div>
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  );
};

export default function Reviews() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="reviewsSwiper"
      >
        {testemonials.map((t) => {
          return (
            <SwiperSlide className="reviewsSwiper-slide">
              <div style={{ textAlign: "center", padding: "50px" }}>
                <img style={{ margin: "0 auto" }} src={t.image} alt={t.name} />
                <h3 style={{ paddingTop: "30px" }}>{t.name}</h3>
                <Stars />
                <p>"{t.text}"</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
