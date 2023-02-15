import React from "react";
import { getAllItems } from "../../services/database";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Faq = () => {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    getAllItems("dlwalt/faq").then((response: any) => {
      console.log(response);
      setData(response);
    });
  }, []);

  return (
    <div className="body-inner">
      <Navbar />
      <section id="main-container" className="main-container">
        <div className="container">
          {data.length === 0 ? (
            <div className="text-center">
              <h1>Volte mais tarde!</h1>
              <p>Estamos preparando essa página.</p>
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-8">
                <h3 className="border-title border-left mar-t0">
                  Perguntas Frequentes
                </h3>
                <div
                  className="accordion accordion-group accordion-classic"
                  id="construction-accordion"
                >
                  {data.map((f) => {
                    return (
                      <div className="card">
                        <div
                          className="card-header p-0 bg-transparent"
                          id="headingOne"
                        >
                          <h2 className="mb-0">
                            <button
                              className="btn btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              {f.data.question}
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse"
                          aria-labelledby="headingOne"
                          data-parent="#construction-accordion"
                          style={{}}
                        >
                          <div className="card-body">{f.data.answer}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faq;
