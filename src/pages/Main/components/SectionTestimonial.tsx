const SectionTestimonial = () => {
  return (
    <section className="content dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="column-title">Avaliações</h3>
            <div
              data-aos="fade-right"
              id="testimonial-slide"
              className="testimonial-slide"
            >
              <div className="elfsight-app-1538fdb7-22ac-4e64-8fc3-262296b93049" />
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <h3 className="column-title">Já conhece o nosso app?</h3>
            <p>
              Esse é um dos <b>diferenciais</b> que só a D | Walt oferece.
            </p>
            <h3>
              <b>D | Walt Connect: Cliente</b>
            </h3>
            <p>Nele você pode:</p>
            <ul>
              <li>Acompanhar seus projetos;</li>
              <li>Estar notificado sobre tudo;</li>
              <li>Visualizar todos os documentos do projeto;</li>
              <li>Contribuir com dados;</li>
              <li>Ver as fotos do projeto;</li>
              <li>Solicitar chamados;</li>
              <li>Fazer reclamações;</li>
            </ul>
            <h3>
              <b>E MUITAS OUTRAS FUNÇÕES!</b>
            </h3>
            <div className="row">
              {/*<div class="col">
      <img src="/images/celulares.png" width="150" alt="" srcset="" />
    </div>*/}
              <div className="col">
                <img
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
            <a
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
