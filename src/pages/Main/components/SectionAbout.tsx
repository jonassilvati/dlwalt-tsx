import react from "react";

const SectionAbout = () => {
  return (
    <section id="como-funciona-energia-solar" className="facts-area dark-bg">
      <div className="container">
        <h2 data-aos="fade-up">Sobre a empresa</h2>
        <p data-aos="fade-down">
          Veja o vídeo abaixo e tire algumas de suas dúvidas.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div data-aos="fade-right">
            <iframe
              style={{ alignSelf: "center" }}
              width={320}
              height={560}
              src="https://www.youtube.com/embed/MnKQZYqWSZI"
              title="Apresentação sobre a empresa"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            />
          </div>
          {/**
             * 
          <div data-aos="fade-up">
            <iframe
             style={{alignSelf: 'center'}}
              width={320}
              height={560}
              src="https://www.youtube.com/embed/MnKQZYqWSZI"
              title="Apresentação sobre a empresa"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            />
          </div>
          <div data-aos="fade-left">
            <iframe
             style={{alignSelf: 'center'}}
              width={320}
              height={560}
              src="https://www.youtube.com/embed/MnKQZYqWSZI"
              title="Apresentação sobre a empresa"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            />
          </div>
             */}
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
