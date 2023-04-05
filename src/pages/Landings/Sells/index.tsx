/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

const Button = () => {
  return (
    <div className="btn pulse">
      <a href="https://wa.me/+556892253306">
        <img width={"80%"} src="/images/landings/sells/btn.png" />
      </a>
    </div>
  );
};

const Sells = () => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        window.location.replace("https://www.dlwalt.com");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="image-container">
        <img className="art" src="/images/landings/sells/1.png" />
        <Button />
      </div>
      <div style={{ width: "100%", height: 200, backgroundColor: "#fff" }}>
        Vídeo do YT aqui
      </div>
      <div className="image-container">
        <img className="art" src="/images/landings/sells/2.png" />
      </div>
      <div className="image-container">
        <img className="art" src="/images/landings/sells/3.png" />
      </div>
      <div className="image-container">
        <img className="art" src="/images/landings/sells/4.png" />
        <div className="swiper-container swiper-prods">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="card">
                <h2>KIT 400kW</h2>
                <img
                  className="card-img"
                  src="https://www.aldo.com.br/cdn-cgi/image/fit=contain,format=auto,metadata=none,onerror=redirect,quality=70,width=2560/OldSite/images/196480_100223171143.jpg"
                />
                <p style={{ marginBottom: 0 }}>POR APENAS</p>
                <h1>R$12.279,50</h1>
                <a className="btn-card" href="https://wa.me/+556892253306">
                  Comprar
                </a>
                <p>ou 84x de R$000,00 sob análise de crédito</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h2>KIT 400kW</h2>
                <img
                  className="card-img"
                  src="https://www.aldo.com.br/cdn-cgi/image/fit=contain,format=auto,metadata=none,onerror=redirect,quality=70,width=2560/OldSite/images/196480_100223171143.jpg"
                />
                <p style={{ marginBottom: 0 }}>POR APENAS</p>
                <h1>R$12.279,50</h1>
                <a className="btn-card" href="https://wa.me/+556892253306">
                  Comprar
                </a>
                <p>ou 84x de R$000,00 sob análise de crédito</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="image-container">
        <img className="art" src="/images/landings/sells/5.png" />
      </div>
      <div className="image-container">
        <img className="art" src="/images/landings/sells/f.png" />
        <Button />
      </div>
    </div>
  );
};

export default Sells;
