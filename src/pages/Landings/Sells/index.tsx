/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from "react";

import "./index.css";


const Button = () => {
    return (
        <div className="btn pulse">
        <a href="https://wa.me/+556892253306">
          <img width={"80%"} src="/images/landings/sells/btn.png" />
        </a>
      </div>
    )
}

const Sells = () => {
    const [isDesktop, setIsDesktop] = React.useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
          if(window.innerWidth > 768) {
            window.location.replace('https://www.dlwalt.com');
          }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  return (
    <div>
      <div>
        <img className="art" src="/images/landings/sells/1.png" />

       <Button />
      </div>
      <div style={{ width: "100%", height: 200, backgroundColor: "#fff" }}>
        Vídeo do YT aqui
      </div>
      <div>
        <img className="art" src="/images/landings/sells/2.png" />
      </div>
      <div>
        <img className="art" src="/images/landings/sells/3.png" />
      </div>
      <div>
        <img className="art" src="/images/landings/sells/4.png" />
      </div>
      <div>
        <img className="art" src="/images/landings/sells/5.png" />
      </div>
      <div>
        <img className="art" src="/images/landings/sells/f.png" />
        <Button />
      </div>
    </div>
  );
};

export default Sells;
