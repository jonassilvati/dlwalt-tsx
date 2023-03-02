import react from "react";

const SectionAbout = () => {
  return (
    <section id="como-funciona-energia-solar" className="facts-area dark-bg">
      <div className="container">
        <h2 data-aos="fade-up">Depoimentos</h2>
        <p data-aos="fade-down">Veja o que nossos clientes acham de nós!</p>
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
              width={300}
              height={500}
              src="https://www.youtube.com/embed/2S1F6NBmTbQ"
              title="Depoimento do Marcelo! - D | Walt Engenharia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>

          <div data-aos="fade-up">
            <iframe
              style={{ alignSelf: "center" }}
              width={300}
              height={500}
              src="https://www.youtube.com/embed/Ph7OHBygBVw"
              title="Depoimento da Camila! - D | Walt Engenharia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
          <div data-aos="fade-left">
            <iframe
              style={{ alignSelf: "center" }}
              width={300}
              height={500}
              src="https://www.youtube.com/embed/8S3tFOjnw5c"
              title="Depoimento do Paulo! - D | Walt Engenharia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
