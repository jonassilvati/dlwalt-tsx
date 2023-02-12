import BannerHeading from "../components/BannerHeading";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Projects = () => {
  return (
    <div className="body-inner">
      <Navbar />
      <BannerHeading title="Projetos"/>
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
          <label htmlFor="commercial" className="">
            <input
              type="radio"
              name="shuffle-filter"
              id="commercial"
              defaultValue="commercial"
            />
            Residencial
          </label>
          <label htmlFor="education" className="">
            <input
              type="radio"
              name="shuffle-filter"
              id="education"
              defaultValue="education"
            />
            Comercial
          </label>
          <label htmlFor="government" className="">
            <input
              type="radio"
              name="shuffle-filter"
              id="government"
              defaultValue="government"
            />
            Usina
          </label>
        </div>
        {/* project filter end */}
        <div
          className="row shuffle-wrapper shuffle"
          style={{
            position: "relative",
            overflow: "hidden",
            height: 864,
            transition: "height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
          }}
        >
          <div className="col-1 shuffle-sizer" />
          <div
            className="col-lg-4 col-md-6 shuffle-item shuffle-item--visible"
            data-groups='["government","healthcare"]'
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              visibility: "visible",
              willChange: "transform",
              opacity: 1,
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "transform, opacity",
              transform: "translate(0px, 0px) scale(1)"
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
                  alt="project-image"
                />
                <span className="gallery-icon">
                  <i className="fa fa-plus" />
                </span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="projects-single.html">Capital Teltway Building</a>
                  </h3>
                  <p className="project-cat">Commercial, Interiors</p>
                </div>
              </div>
            </div>
          </div>
          {/* shuffle item 1 end */}
          <div
            className="col-lg-4 col-md-6 shuffle-item shuffle-item--visible"
            data-groups='["healthcare"]'
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              visibility: "visible",
              willChange: "transform",
              opacity: 1,
              transform: "translate(360px, 0px) scale(1)",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "transform, opacity"
            }}
          >
            <div className="project-img-container">
              <a
                className="gallery-popup cboxElement"
                href="images/projects/project2.jpg"
              >
                <img
                  className="img-fluid"
                  src="images/projects/project2.jpg"
                  alt="project-image"
                />
                <span className="gallery-icon">
                  <i className="fa fa-plus" />
                </span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="projects-single.html">Ghum Touch Hospital</a>
                  </h3>
                  <p className="project-cat">Healthcare</p>
                </div>
              </div>
            </div>
          </div>
          {/* shuffle item 2 end */}
          <div
            className="col-lg-4 col-md-6 shuffle-item shuffle-item--visible"
            data-groups='["infrastructure","commercial"]'
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              visibility: "visible",
              willChange: "transform",
              opacity: 1,
              transform: "translate(0px, 288px) scale(1)",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "transform, opacity"
            }}
          >
            <div className="project-img-container">
              <a
                className="gallery-popup cboxElement"
                href="images/projects/project3.jpg"
              >
                <img
                  className="img-fluid"
                  src="images/projects/project3.jpg"
                  alt="project-image"
                />
                <span className="gallery-icon">
                  <i className="fa fa-plus" />
                </span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="projects-single.html">TNT East Facility</a>
                  </h3>
                  <p className="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          {/* shuffle item 3 end */}
          <div
            className="col-lg-4 col-md-6 shuffle-item shuffle-item--visible"
            data-groups='["education","infrastructure"]'
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              visibility: "visible",
              willChange: "transform",
              opacity: 1,
              transform: "translate(360px, 288px) scale(1)",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "transform, opacity"
            }}
          >
            <div className="project-img-container">
              <a
                className="gallery-popup cboxElement"
                href="images/projects/project4.jpg"
              >
                <img
                  className="img-fluid"
                  src="images/projects/project4.jpg"
                  alt="project-image"
                />
                <span className="gallery-icon">
                  <i className="fa fa-plus" />
                </span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="projects-single.html">Narriot Headquarters</a>
                  </h3>
                  <p className="project-cat">Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
          {/* shuffle item 4 end */}
          <div
            className="col-lg-4 col-md-6 shuffle-item shuffle-item--visible"
            data-groups='["infrastructure","education"]'
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              visibility: "visible",
              willChange: "transform",
              opacity: 1,
              transform: "translate(0px, 576px) scale(1)",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "transform, opacity"
            }}
          >
            <div className="project-img-container">
              <a
                className="gallery-popup cboxElement"
                href="images/projects/project5.jpg"
              >
                <img
                  className="img-fluid"
                  src="images/projects/project5.jpg"
                  alt="project-image"
                />
                <span className="gallery-icon">
                  <i className="fa fa-plus" />
                </span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="projects-single.html">Kalas Metrorail</a>
                  </h3>
                  <p className="project-cat">Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
          {/* shuffle item 5 end */}
          <div
            className="col-lg-4 col-md-6 shuffle-item shuffle-item--visible"
            data-groups='["residential"]'
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              visibility: "visible",
              willChange: "transform",
              opacity: 1,
              transform: "translate(360px, 576px) scale(1)",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "transform, opacity"
            }}
          >
            <div className="project-img-container">
              <a
                className="gallery-popup cboxElement"
                href="images/projects/project6.jpg"
              >
                <img
                  className="img-fluid"
                  src="images/projects/project6.jpg"
                  alt="project-image"
                />
                <span className="gallery-icon">
                  <i className="fa fa-plus" />
                </span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="projects-single.html">Ancraft Avenue House</a>
                  </h3>
                  <p className="project-cat">Residential</p>
                </div>
              </div>
            </div>
          </div>
          {/* shuffle item 6 end */}
        </div>
        {/* shuffle end */}
      </div>
      <div className="col-12">
        <div className="general-btn text-center">
          <a className="btn btn-primary" href="projects.html">
            View All Projects
          </a>
        </div>
      </div>
    </div>
    {/* Content row end */}
  </div>
  {/* Conatiner end */}
</section>

      <Footer />
    </div>
  );
};

export default Projects;
