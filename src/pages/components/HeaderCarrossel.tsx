import react from "react";

const HeaderCarrossel = () => {
  return (
    <div className="banner-carousel banner-carousel-1 mb-0">
      <div
        className="banner-carousel-item"
        style={{
          backgroundImage:
            "url(https://cdn.discordapp.com/attachments/893220475663187968/1072349661110730792/Sem_titulo-1.jpg)",
        }}
      >
        <div className="slider-content text-left">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12">
                <h2 className="slide-title" data-animation-in="slideInLeft">
                  6 anos de excelência em
                </h2>
                <h3
                  className="slide-sub-title"
                  data-animation-in="slideInRight"
                >
                  Engenharia
                </h3>
                <p
                  data-animation-in="slideInRight"
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: "bold",
                    borderRadius: 50,
                    margin: 0,
                  }}
                >
                  Elétrica & Civil
                </p>
                <p data-animation-in="slideInLeft" data-duration-in="1.2">
                  <a href="/servicos" className="slider btn btn-primary">
                    Nossos serviços
                  </a>
                  <a href="/contato" className="slider btn btn-primary border">
                    Entrar em contato agora
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="banner-carousel-item"
        style={{
          backgroundImage:
            "url(https://cdn.discordapp.com/attachments/893220475663187968/1045785008331296848/eng_1.jpg)",
        }}
      >
        <div className="slider-content">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12 text-center">
                <h2 className="slide-title" data-animation-in="slideInLeft">
                  EM TODA
                </h2>
                <h3
                  className="slide-sub-title"
                  data-animation-in="slideInRight"
                >
                  RONDÔNIA
                </h3>
                <p data-animation-in="slideInLeft" data-duration-in="1.2">
                  <a href="/servicos" className="slider btn btn-primary">
                    Nossos serviços
                  </a>
                  <a href="/contato" className="slider btn btn-primary border">
                    Entrar em contato agora
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="banner-carousel-item"
        style={{
          backgroundImage:
            "url(https://cdn.discordapp.com/attachments/893220475663187968/1045785467448205373/header_1.jpg)",
        }}
      >
        <div className="slider-content text-left">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12">
                <h2 className="slide-title" data-animation-in="slideInLeft">
                  Orçamento
                </h2>
                <h3
                  className="slide-sub-title"
                  data-animation-in="slideInRight"
                >
                  Prático e rápido
                </h3>
                <p data-animation-in="slideInLeft" data-duration-in="1.2">
                  <a href="/servicos" className="slider btn btn-primary">
                    Nossos serviços
                  </a>
                  <a href="/contato" className="slider btn btn-primary border">
                    Entrar em contato agora
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="banner-carousel-item"
        style={{
          backgroundImage:
            "url(https://cdn.discordapp.com/attachments/893220475663187968/1045785590425206784/house-eng-hero-anim_1.jpg)",
        }}
      >
        <div className="slider-content">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12 text-center">
                <h2 className="slide-title" data-animation-in="slideInLeft">
                  Energia solar para seu
                </h2>
                <h3
                  className="slide-sub-title"
                  data-animation-in="slideInRight"
                >
                  estabelecimento
                </h3>
                <p data-animation-in="slideInLeft" data-duration-in="1.2">
                  <a href="/servicos" className="slider btn btn-primary">
                    Nossos serviços
                  </a>
                  <a href="/contato" className="slider btn btn-primary border">
                    Entrar em contato agora
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCarrossel;
