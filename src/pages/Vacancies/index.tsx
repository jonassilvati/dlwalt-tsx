import BannerHeading from "../components/BannerHeading";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Vacancies = () => {
  return (
    <div className="body-inner">
      <Navbar />
      <BannerHeading title="Vagas" />
     
      <section id="main-container" className="main-container pb-2">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-5">
        <div className="ts-service-box">
          <div className="ts-service-image-wrapper">
            <img
              loading="lazy"
              className="w-100"
              src="https://www.ospcontabilidade.com.br/wp-content/uploads/2020/01/vendas.jpg"
              alt="service-image"
            />
          </div>
          <div className="d-flex">
            <div className="ts-service-box-img">
              <img
                loading="lazy"
                width={50}
                height={50}
                src="images/icons/assistencia.svg"
                alt="service-icon"
              />
            </div>
            <div className="ts-service-info">
              <h3 className="service-box-title-services-page">
                <a href="/vagas/executivo-de-vendas">Executivo de Vendas</a>
              </h3>
              <p>
                Trabalho com venda de equipamentos de energia solar e
                atendimento ao cliente
              </p>
              <a
                className="learn-more d-inline-block"
                href="/vagas/executivo-de-vendas"
                aria-label="service-details"
              >
                <i className="fa fa-caret-right" /> Ler mais
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-5">
        <div className="ts-service-box">
          <div className="ts-service-image-wrapper">
            <img
              loading="lazy"
              className="w-100"
              src="https://www.ospcontabilidade.com.br/wp-content/uploads/2020/01/vendas.jpg"
              alt="service-image"
            />
          </div>
          <div className="d-flex">
            <div className="ts-service-box-img">
              <img
                loading="lazy"
                width={50}
                height={50}
                src="images/icons/assistencia.svg"
                alt="service-icon"
              />
            </div>
            <div className="ts-service-info">
              <h3 className="service-box-title-services-page">
                <a href="/vagas/consultor-de-eficiencia-energetica">
                  Consultor de Eficiência Energética
                </a>
              </h3>
              <p>
                Trabalho com venda de equipamentos de energia solar e
                atendimento ao cliente
              </p>
              <a
                className="learn-more d-inline-block"
                href="/vagas/consultor-de-eficiencia-energetica"
                aria-label="service-details"
              >
                <i className="fa fa-caret-right" /> Ler mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default Vacancies;
