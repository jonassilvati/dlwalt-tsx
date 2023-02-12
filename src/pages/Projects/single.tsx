import { useParams } from "react-router-dom";
import BannerHeading from "../components/BannerHeading";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ProjectsSingle = () => {
    let { id } = useParams();
  return (
    <div className="body-inner">
      <Navbar />
      <BannerHeading title="Projeto"/>
      <h3>ID: {id}</h3>
      <Footer />
    </div>
  );
};

export default ProjectsSingle;
