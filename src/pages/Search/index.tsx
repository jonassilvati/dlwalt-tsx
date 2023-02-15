import React from "react";
import { useLocation } from "react-router-dom";
import { getAllItems } from "../../services/database";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const [all, setAll] = React.useState<any>([]);

  React.useEffect(() => {
   /* getAllItems(`dlwalt`).then((response: any) => {
      setAll(response);
      console.log(response);
    });*/
  }, []);

  return (
    <div className="body-inner">
      <Navbar />
      <section className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Resultados de Pesquisa</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="list-group" style={{ width: "100%" }}>
                <li className="list-group-item">
                  <a href="/vagas/">EM DESENVOLVIMENTO</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Search;
