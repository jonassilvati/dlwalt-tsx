import react from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer bg-overlay">
      <div className="footer-main">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6 footer-widget footer-about">
              <h3 className="widget-title">Sobre Nós</h3>
              <img
                loading="lazy"
                width="200px"
                className="footer-logo"
                src="https://cdn.glitch.global/e3790b73-514c-45b3-a987-85c9a4b7481f/d%20walt%20logo%20nova.svg?v=1644971753268"
                alt="Constra"
              />
              <p>
                Com mais de 5 anos de experiência no mercado, nós acreditamos em
                um serviço de atendimento aos clientes de altíssima qualidade –
                mas também somos da opinião de que todos os nossos clientes
                merecem vivenciar uma experiência de compra inesquecível, e é
                por isso que tentamos proporcionar produtos excelentes a um
                preço acessível.
              </p>
              <div className="footer-social">
                <ul>
                  <li>
                    <a
                      href="https://facebook.com/dwalt.eng"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/dlwalt.eng"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <h3 className="widget-title">Endereço</h3>
              <p>
                Rua Acácia, 1686, sala A, Setor 01 - Ariquemes - Rondônia /
                CNPJ: 26.711.744/0001-08
              </p>
            </div>
            <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
              <h3 className="widget-title">Horário de Funcionamento</h3>
              <div className="working-hours">
                Trabalhamos 6 dias por semana, todos os dias, exceto feriados
                importantes. Contate-nos em caso de emergência, através da nossa
                linha direta e formulário de contato.
                <br />
                <br /> Segunda - Sexta:{" "}
                <span className="text-right">08:00 - 18:00</span>
                <br /> Sábado e feriados:{" "}
                <span className="text-right">08:00 - 11:00</span>
                <br /> Domingo: <span className="text-right">Fechado</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
              <h3 className="widget-title">Serviços</h3>
              <ul className="list-arrow">
                <li>
                  <a href="/servicos/orcamento-e-proposta-de-sistema-fotovoltaico ">
                    Orçamento e Proposta de Sistema Fotovoltaico
                  </a>
                </li>
                <li>
                  <a href="/servicos/manutencao-de-sistema-fotovoltaico ">
                    Manutenção de Sistema Fotovoltaico
                  </a>
                </li>
                <li>
                  <a href="/servicos/instalacao-de-sistema-fotovoltaico ">
                    Instalação de Sistema Fotovoltaico
                  </a>
                </li>
                <li>
                  <a href="/servicos/assistencia-de-sistema-fotovoltaico ">
                    Assistência ao Sistema Fotovoltaico
                  </a>
                </li>
                <li>
                  <a href="/servicos/engenharia-eletrica ">
                    Engenharia Elétrica
                  </a>
                </li>
                <li>
                  <a href="/servicos/contrucao-civil ">Construção Civil</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
              <h3 className="widget-title">Formas de Pagamento</h3>
              <ul style={{ listStyle: "none" }}>
                <div className="row">
                  <li>
                    <i
                      style={{ fontSize: 50, margin: "0px 5px 0px 5px" }}
                      className="fab fa-cc-stripe"
                    />
                  </li>
                  <li>
                    <i
                      style={{ fontSize: 50, margin: "0px 5px 0px 5px" }}
                      className="fab fa-cc-visa"
                    />
                  </li>
                  <li>
                    <i
                      style={{ fontSize: 50, margin: "0px 5px 0px 5px" }}
                      className="fab fa-cc-mastercard"
                    />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="copyright-info text-center text-md-left">
                <span>
                  Copyright D Walt Engenharia © Todos os Direitos Reservados
                </span>
              </div>
            </div>
          </div>
          <div
            id="back-to-top"
            data-spy="affix"
            data-offset-top={10}
            className="back-to-top position-fixed"
          >
            <button className="btn btn-primary" title="Back to Top">
              <i className="fa fa-angle-double-up" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
