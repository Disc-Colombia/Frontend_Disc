import { Home } from "../components/Home";
import logo from "../imgs/logoDISC_sinfondo.png";
import ColorLines from "../components/ColorLine";
import "../styles/index.css";
import { Carrousel } from "../components/Carrousel";
import { Services } from "../components/Services";
import { AboutUs } from "../components/AboutUs.tsx";
import {ContactUs} from "../components/ContactUs"

export const Index = () => {
  return (
    <>
      <div className="container_index" id="home">
        <div className="container_index--tittle">
          <img className="tittle_index--img" src={logo} alt="logo develoment" />
          <h2 className="text_index--tittle">
            Innovative <span className="tittle_index--span">Results</span>{" "}
          </h2>
        </div>
        <div rel="preload" className="container_background container_carrousell--index">
           <Carrousel/>
          <ColorLines /> 
          <Home />
        </div>
        <Services/>
        <AboutUs/>
        <ContactUs/>
      </div>
    </>
  );
};
