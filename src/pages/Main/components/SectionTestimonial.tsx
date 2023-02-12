const SectionTestimonial = () => {
  return (
    <section className="content dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="column-title" data-aos="zoom-out-right">Avaliações</h3>
            <div
              data-aos="fade-right"
              id="testimonial-slide"
              className="testimonial-slide"
            >
              <div className="elfsight-app-1538fdb7-22ac-4e64-8fc3-262296b93049" />
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <h3 className="column-title" data-aos="zoom-out-down">Já conhece o nosso app?</h3>
            <p  data-aos="zoom-out-left">
              Esse é um dos <b>diferenciais</b> que só a D | Walt oferece.
            </p>
            <h3 data-aos="flip-down">
              <b>D | Walt Connect: Cliente</b>
            </h3>
            <p  data-aos="fade-down-left">Nele você pode:</p>
            <ul>
              <li data-aos="fade-right">Acompanhar seus projetos;</li>
              <li data-aos="fade-right">Estar notificado sobre tudo;</li>
              <li data-aos="fade-right">Visualizar todos os documentos do projeto;</li>
              <li data-aos="fade-right">Contribuir com dados;</li>
              <li data-aos="fade-right">Ver as fotos do projeto;</li>
              <li data-aos="fade-right">Solicitar chamados;</li>
              <li data-aos="fade-right">Fazer reclamações;</li>
            </ul>
            <h3>
              <b data-aos="fade-up-right">E MUITAS OUTRAS FUNÇÕES!</b>
            </h3>
            <div className="row">
              {/*<div class="col">
      <img src="/images/celulares.png" width="150" alt="" srcset="" />
    </div>*/}
              <div className="col">
                <img
                 data-aos="flip-left"
                  style={{
                    position: "absolute",
                    top: "-300px",
                    width: 115,
                    right: 52,
                  }}
                  src="/images/celular.png"
                  width={150}
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
            <a data-aos="fade-down-right"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.dlwalt.cliente&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            >
              <img
                alt="Disponível no Google Play"
                width={200}
                src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonial;
