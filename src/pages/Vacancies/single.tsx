import React from "react";
import { useParams } from "react-router-dom";
import { getAllItems, getItems } from "../../services/database";
import BannerHeading from "../components/BannerHeading";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const VacanciesSingle = () => {
  let { id } = useParams();
  const [vacancie, setVacancie] = React.useState<any>([]);
  const [vacancies, setVacancies] = React.useState<any>([]);

  React.useEffect(() => {
    getItems(`dlwalt/vacancies/${id}`).then((response: any) => {
      setVacancie(response);
      console.log(response);
    });
    getAllItems(`dlwalt/vacancies`).then((response: any) => {
      setVacancies(response);
      console.log(response);
    });
  }, []);

  const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "JobPosting",
    title: vacancie.title,
    description: vacancie.desc,
    datePosted: "2023-02-15",
    validThrough: "2023-03-15",
    employmentType: vacancie.type,
    hiringOrganization: {
      "@type": "Organization",
      name: "D | Walt Engenharia",
      sameAs: "http://www.dlwalt.com",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: vacancie.loc,
        addressCountry: "BR",
      },
    },
  };

  return (
    <div className="body-inner">
      <Navbar />
      <BannerHeading title={vacancie.title} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="sidebar sidebar-left">
                <div className="widget">
                  <h3 className="widget-title">Vagas</h3>
                  <ul className="nav service-menu">
                    {vacancies.map((all: any) => {
                      return (
                        <li className={all.key === id ? "active" : ""}>
                          <a href={all.key}>{all.data.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="widget">
                  <div className="quote-item quote-border">
                    <div className="quote-text-border">
                      Nossos funcionários são nossa família.
                    </div>
                    <div className="quote-item-footer">
                      <img
                        loading="lazy"
                        className="testimonial-thumb"
                        src="https://cdn.discordapp.com/attachments/893220475663187968/1073780088203653180/317659495_705946724476566_8523849399887919370_n.png"
                        alt="testimonial"
                      />
                      <div className="quote-item-info">
                        <h3 className="quote-author">Walter Silva</h3>
                        <span className="quote-subtext">CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/**POST EM SI */}
            <div className="col-xl-8 col-lg-8">
              <div className="content-inner-page">
                <h2 className="column-title mrt-0">{vacancie.title}</h2>
                <div className="row">
                  <div className="col-md-12">
                    <p>{vacancie.desc}</p>
                  </div>
                </div>
                <div className="gap-40" />
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="column-title-small">Sobre a Vaga</h3>
                    <p>{vacancie.resp}</p>
                    <ul className="list-arrow">
                      <li>{vacancie.req}</li>
                    </ul>
                  </div>
                  <div className="col-md-6 mt-5 mt-md-0">
                    <h3 className="column-title-small">Informações Úteis</h3>
                    <div
                      className="accordion accordion-group accordion-classic"
                      id="construction-accordion"
                    >
                      <div className="card">
                        <div
                          className="card-header p-0 bg-transparent"
                          id="heading0"
                        >
                          <h2 className="mb-0">
                            <button
                              className="btn btn-block text-left"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse0"
                              aria-expanded="true"
                              aria-controls="collapse0"
                            >
                              Crescimento pessoal
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse0"
                          className="collapse show"
                          aria-labelledby="heading0"
                          data-parent="#construction-accordion"
                        >
                          <div className="card-body">
                            Oportunidade de crescimento pessoal em uma empresa
                            reconhecida.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div
                          className="card-header p-0 bg-transparent"
                          id="heading1"
                        >
                          <h2 className="mb-0">
                            <button
                              className="btn btn-block text-left"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              Treinamento
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse1"
                          className="collapse show"
                          aria-labelledby="heading1"
                          data-parent="#construction-accordion"
                        >
                          <div className="card-body">
                            Não se preocupe, você terá todo o suporte que
                            precisar!
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div
                          className="card-header p-0 bg-transparent"
                          id="heading3"
                        >
                          <h2 className="mb-0">
                            <button
                              className="btn btn-block text-left"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse3"
                              aria-expanded="true"
                              aria-controls="collapse3"
                            >
                              Bônus
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse3"
                          className="collapse show"
                          aria-labelledby="heading3"
                          data-parent="#construction-accordion"
                        >
                          <div className="card-body">
                            Nós da empresa valorizamos seu esforço, não se
                            preocupe, haverá um bônus por desempenho.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-40" />
                <div className="call-to-action classic">
                  <div className="row align-items-center">
                    <div className="col-md-8 text-center text-md-left">
                      <div className="call-to-action-text">
                        <h3 className="action-title">Interessado?</h3>
                      </div>
                    </div>
                    <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                      <div className="call-to-action-btn">
                        <a
                          className="btn btn-primary"
                          href="https://wa.me/+556892253306"
                        >
                          Enviar Currículo
                        </a>
                      </div>
                    </div>
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

export default VacanciesSingle;
