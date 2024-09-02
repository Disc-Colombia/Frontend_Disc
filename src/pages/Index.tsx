import { Home } from "../component/Home";
import logo from "../img/logoDISC_sinfondo.png";
import ColorLines from "../component/ColorLine";
import "../style/index.css";
import { Carrousel } from "../component/Carrousel";
import { Services } from "../component/Services";
import { AboutUs } from "../component/AboutUs";
import {ContactUs} from "../component/ContactUs"

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
