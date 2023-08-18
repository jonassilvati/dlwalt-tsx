/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/effect-cards";
import "./index.css";

const data = [
  {
    id: 1,
    title: "Kit 400kW",
    image: "",
    valueAvista: "12.279,00",
    valueParcelado: "",
  },
  {
    id: 2,
    title: "Kit 500kW",
    image: "",
    valueAvista: "15.391,00",
    valueParcelado: "",
  },
  {
    id: 3,
    title: "Kit 600kW",
    image: "",
    valueAvista: "17.800,00",
    valueParcelado: "",
  },
  {
    id: 4,
    title: "Kit 700kW",
    image: "",
    valueAvista: "20.268,00",
    valueParcelado: "",
  },
  {
    id: 5,
    title: "Kit 800kW",
    image: "",
    valueAvista: "22.780,00",
    valueParcelado: "",
  },
  {
    id: 6,
    title: "Kit 900kW",
    image: "",
    valueAvista: "25.988,00",
    valueParcelado: "",
  },
  {
    id: 7,
    title: "Kit 1000kW",
    image: "",
    valueAvista: "27.221,00",
    valueParcelado: "",
  },
  {
    id: 8,
    title: "Kit 1200kW",
    image: "",
    valueAvista: "35.247,00",
    valueParcelado: "",
  },
  {
    id: 9,
    title: "Kit 1500kW",
    image: "",
    valueAvista: "40.203,00",
    valueParcelado: "",
  },
  {
    id: 10,
    title: "Kit 1800kW",
    image: "",
    valueAvista: "54.374,00",
    valueParcelado: "",
  },
  {
    id: 11,
    title: "Kit 2000kW",
    image: "",
    valueAvista: "59.841,00",
    valueParcelado: "",
  },
  {
    id: 12,
    title: "Kit 2200kW",
    image: "",
    valueAvista: "63.665,00",
    valueParcelado: "",
  },
  {
    id: 13,
    title: "Kit 2500kW",
    image: "",
    valueAvista: "71.334,00",
    valueParcelado: "",
  },
  {
    id: 14,
    title: "Kit 2800kW",
    image: "",
    valueAvista: "77.698,00",
    valueParcelado: "",
  },
  {
    id: 15,
    title: "Kit 3000kW",
    image: "",
    valueAvista: "84.491,00",
    valueParcelado: "",
  },
  {
    id: 16,
    title: "Kit 3500kW",
    image: "",
    valueAvista: "94.681,00",
    valueParcelado: "",
  },
  {
    id: 17,
    title: "Kit 4000kW",
    image: "",
    valueAvista: "108.215,00",
    valueParcelado: "",
  },
  {
    id: 18,
    title: "Kit 4500kW",
    image: "",
    valueAvista: "121.372,00",
    valueParcelado: "",
  },
  {
    id: 19,
    title: "Kit 5000kW",
    image: "",
    valueAvista: "131.570,00",
    valueParcelado: "",
  },
  {
    id: 20,
    title: "Kit 6000kW",
    image: "",
    valueAvista: "160.289,00",
    valueParcelado: "",
  },
  {
    id: 21,
    title: "Kit 7000kW",
    image: "",
    valueAvista: "182.267,00",
    valueParcelado: "",
  },
  {
    id: 22,
    title: "Kit 8000kW",
    image: "",
    valueAvista: "201.389,00",
    valueParcelado: "",
  },
];

const Button = () => {
  return (
    <div className="btn-sells pulse">
      <a href="https://wa.me/+556993009413">
        <img width={"80%"} src="/images/landings/sells/btn.png" />
      </a>
    </div>
  );
};

const Sells = () => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        /*alert("Essa página não é compatível com desktop");
        window.location.replace("https://www.dlwalt.com");*/
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main-content">
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
          <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
            {data.map((item) => {
              return (
                <SwiperSlide>
                  <div className="card-sells">
                    <h2>{item.title}</h2>
                    <img
                      className="card-img"
                      src={
                        item.image === ""
                          ? "/images/landings/sells/produto.png"
                          : item.image
                      }
                    />
                    <p style={{ marginBottom: 0 }}>POR APENAS</p>
                    <h1>
                      R$
                      {(
                        Number(
                          item.valueAvista.replace(".", "").replace(",", ".")
                        ) * 1.1
                      )
                        .toFixed(2)
                        .replace(".", ",")}
                    </h1>
                    <a
                      className="btn-sells-card pulse"
                      href={`https://api.whatsapp.com/send?phone=556892253306&text=${encodeURI(
                        `Olá, eu tenho interesse no ${item.title}`
                      )}`}
                    >
                      Comprar
                    </a>
                    <p></p>
                    <p>
                      {item.valueParcelado === ""
                        ? ""
                        : `ou 84x de R$${item.valueParcelado} sob análise de crédito`}
                    </p>
                    <p></p>
                    <p>
                      ARRASTE <i className="fa fa-arrow-right"></i>
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
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

      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <a
          href="https://wa.me/+556993009413"
          style={{
            position: "fixed",
            width: "60px",
            height: "60px",
            bottom: "40px",
            right: "170px",
            backgroundColor: "#25d366",
            color: "#FFF",
            borderRadius: "50px",
            textAlign: "center",
            fontSize: "30px",
            boxShadow: "1px 1px 2px #888",
            zIndex: 1000,
          }}
          target="_blank" rel="noreferrer"
        >
          <i style={{ marginTop: "16px" }} className="fa fa-whatsapp" />
        </a>
      </div>
    </div>
  );
};

export default Sells;
