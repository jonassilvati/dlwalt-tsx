import React from "react";
import BannerHeading from "../components/BannerHeading";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { getAllItems } from "../../services/database";
import LoadingServer from "../components/LoadingServer";

const Projects = () => {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    getAllItems("dataWebSite/projects").then((response: any) => {
      console.log(response);
      setData(response);
    });
  }, []);

  return (
    <div className="body-inner">
      <Navbar />
      <BannerHeading title="Projetos" />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="shuffle-btn-group">
                <label className="active" htmlFor="all">
                  <input
                    type="radio"
                    name="shuffle-filter"
                    id="all"
                    defaultValue="all"
                  />
                  Todos
                </label>
                <label htmlFor="residencial" className="">
                  <input
                    type="radio"
                    name="shuffle-filter"
                    id="residencial"
                    defaultValue="residencial"
                  />
                  Residencial
                </label>
                <label htmlFor="comercial" className="">
                  <input
                    type="radio"
                    name="shuffle-filter"
                    id="comercial"
                    defaultValue="comercial"
                  />
                  Comercial
                </label>
                <label htmlFor="usina" className="">
                  <input
                    type="radio"
                    name="shuffle-filter"
                    id="usina"
                    defaultValue="usina"
                  />
                  Usina
                </label>
              </div>

              {data.length === 0 ? (
                <LoadingServer />
              ) : (
<div
                className="row shuffle-wrapper shuffle"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: 864,
                  transition: "height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s",
                }}
              >
                {data.map((project) => {
                  return (
                    <div key={project.key}>
                      <div className="col-1 shuffle-sizer" />
                      <div
                        className="col-lg-4 col-md-6 shuffle-item shuffle-item--visible"
                        data-groups={[project.data.type]}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          visibility: "visible",
                          willChange: "transform",
                          opacity: 1,
                          transitionDuration: "250ms",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionProperty: "transform, opacity",
                          transform: "translate(0px, 0px) scale(1)",
                        }}
                      >
                        <div className="project-img-container">
                          <a
                            className="gallery-popup cboxElement"
                            href="images/projects/project1.jpg"
                          >
                            <img
                              className="img-fluid"
                              src="images/projects/project1.jpg"
                              alt="projectimage"
                            />
                            <span className="gallery-icon">
                              <i className="fa fa-plus" />
                            </span>
                          </a>
                          <div className="project-item-info">
                            <div className="project-item-info-content">
                              <h3 className="project-item-title">
                                <a href="projects-single.html">
                                {project.data.title}
                                </a>
                              </h3>
                              <p className="project-cat">
                              {project.data.type}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              )}

              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
