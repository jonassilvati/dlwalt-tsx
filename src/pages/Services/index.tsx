import BannerHeading from "../components/BannerHeading";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Services = () => {
  const data:object[] = [
    {
      a: "a",
    },
    {
      a: "a",
    },
    {
      a: "a",
    },
  ];
  return (
    <div className="body-inner">
      <Navbar />
      <BannerHeading title="Serviços" />
      <section id="main-container" className="main-container pb-2">
        <div className="container">
          <div className="row">
            {data.map(service => {
              return (
                <div className="col-lg-4 col-md-6 mb-5">
              <div className="ts-service-box">
                <div className="ts-service-image-wrapper">
                  <img
                    loading="lazy"
                    className="w-100"
                    src="https://cdn.discordapp.com/attachments/921106059375046706/921424996532912168/header.jpg"
                    alt="Imagem de serviço"
                  />
                </div>
                <div className="d-flex">
                  <div className="ts-service-box-img">
                    <img
                      loading="lazy"
                      width={50}
                      height={50}
                      src="https://cdn.discordapp.com/attachments/921106059375046706/922845448522330142/orcamento.svg"
                      alt="service-icon"
                    />
                  </div>
                  <div className="ts-service-info">
                    <h3 className="service-box-title-services-page">
                      <a href="/servicos/orcamento-e-proposta-de-sistema-fotovoltaico">
                        Orçamento e Proposta de Sistema Fotovoltaico
                      </a>
                    </h3>
                    <p>Rápido e gratuito</p>
                    <a
                      className="learn-more d-inline-block"
                      href="/servicos/orcamento-e-proposta-de-sistema-fotovoltaico"
                      aria-label="service-details"
                    >
                      <i className="fa fa-caret-right" /> Ler mais
                    </a>
                  </div>
                </div>
              </div>
            </div>
              )
            })}
            

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
