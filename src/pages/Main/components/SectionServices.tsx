const SectionServices = () => {
  return (
    <section id="ts-service-area" className="ts-service-area pb-0 dark-bg">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="section-title">Nós somos especialistas</h2>
            <h3 className="section-sub-title">No que fazemos</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div data-aos="fade-right" className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  width={60}
                  height={60}
                  src="https://cdn.discordapp.com/attachments/921106059375046706/922845448522330142/orcamento.svg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/servicos/orcamento-e-proposta-de-sistema-fotovoltaico">
                    Orçamento e Proposta de Sistema Fotovoltaico
                  </a>
                </h3>
                <p>Rápido e gratuito.</p>
              </div>
            </div>
            <div data-aos="fade-right" className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  width={60}
                  height={60}
                  src="https://cdn.discordapp.com/attachments/921106059375046706/922846112702943272/manutencao.svg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/servicos/manutencao-de-sistema-fotovoltaico">
                    Manutenção de Sistema Fotovoltaico
                  </a>
                </h3>
                <p>Exclusivo para clientes D Walt.</p>
              </div>
            </div>
            <div data-aos="fade-right" className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  width={60}
                  height={60}
                  src="https://cdn.discordapp.com/attachments/921106059375046706/922847868186927124/instalacao.svg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/servicos/instalacao-de-sistema-fotovoltaico">
                    Instalação de Sistema Fotovoltaico
                  </a>
                </h3>
                <p>Proposta, aprovação e instalação.</p>
              </div>
            </div>
          </div>
          <div
            id="imgCenter"
            data-aos="fade-up"
            className="col-lg-4 text-center"
          >
            <img
              loading="lazy"
              className="img-fluid"
              src="https://cdn.discordapp.com/attachments/778691566168440854/1003739260102398002/Sem_titulo-1.svg"
              alt="service-avater-image"
            />
          </div>
          <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
            <div data-aos="fade-left" className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  width={60}
                  height={60}
                  src="https://cdn.discordapp.com/attachments/921106059375046706/922848269921558528/assistencia.svg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/servicos/assistencia-de-sistema-fotovoltaico">
                    Assistência ao Sistema Fotovoltaico
                  </a>
                </h3>
                <p>
                  Acompanhamos a geração do seu sistema, fornecendo assistência
                  à dúvidas e entregando relatório de produção.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  width={60}
                  height={60}
                  src="https://cdn.discordapp.com/attachments/921106059375046706/922848743953416202/eng-eletrica.svg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/servicos/engenharia-eletrica">
                    Engenharia Elétrica
                  </a>
                </h3>
                <p>
                  Temos engenheiros capacitados para qualquer
                  área da engenharia elétrica.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img
                  loading="lazy"
                  width={60}
                  height={60}
                  src="https://cdn.discordapp.com/attachments/921106059375046706/922848743953416202/eng-eletrica.svg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/servicos/contrucao-civil">Construção Civil</a>
                </h3>
                <p>Temos engenheiros capacitados para qualquer
                  área da engenharia civil.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
