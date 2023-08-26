import React from "react";
import { getAllItems } from "../../services/database";
import BannerHeading from "../components/BannerHeading";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Vacancies = () => {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    getAllItems("dlwalt/vacancies").then((response: any) => {
      console.log(response);
      setData(response);
    });
  }, []);

  return (
    <div className="body-inner">
      <Navbar />
      <BannerHeading title="Vagas" />

      <section id="main-container" className="main-container pb-2">
        <div className="container">
          {data.length === 0 ? (
            <div className="text-center">
              <h1 style={{marginBottom: '60px'}}>Estamos sem vagas no momento.</h1>
            </div>
          ) : (
            <div className="row">
              {data.map((v) => {
                return (
                  <div className="col-lg-4 col-md-6 mb-5">
                    <div className="ts-service-box">
                      <div className="ts-service-image-wrapper">
                        <img
                          loading="lazy"
                          className="w-100"
                          src={v.data.banner || "https://www.ospcontabilidade.com.br/wp-content/uploads/2020/01/vendas.jpg"}
                          alt="vaga"
                        />
                      </div>
                      <div className="d-flex">
                        <div className="ts-service-box-img">
                          <img
                            loading="lazy"
                            width={50}
                            height={50}
                            src="/images/icons/assistencia.svg"
                            alt="service-icon"
                          />
                        </div>
                        <div className="ts-service-info">
                          <h3 className="service-box-title-services-page">
                            <a href={"/vagas/" + v.key}>{v.data.title}</a>
                          </h3>
                          <p>{v.data.desc.slice(0, 100) + "..."}</p>
                          <a
                            className="learn-more d-inline-block"
                            href={"/vagas/" + v.key}
                            aria-label="service-details"
                          >
                            <i className="fa fa-caret-right" /> Ler mais
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vacancies;
