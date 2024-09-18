import { useState } from "react";
import { Home } from "../components/Home";
import logo from "../imgs/logoDISC_sinfondo.png";
import ColorLines from "../components/ColorLine";
import "../styles/index.css";
import { Carrousel } from "../components/Carrousel";
import { AboutUs } from "../components/AboutUs.tsx";
import { HomeServices } from "../components/HomeServices.tsx";
import { ContactUs } from "../components/ContactUs";
import { CookiesComponent } from "../components/CookiesComponent.tsx";
import { Projects } from "../components/Projects.tsx";
import { FloatingButtons } from "../components/FloatingButtons.tsx";
export const Index = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      <div className="container_index" id="home">
        <div className="container_index--tittle">
          <img className="tittle_index--img" src={logo as string} alt="logo develoment" />
          <h2 className="text_index--tittle">
            Innovative&nbsp; <span className="tittle_index--span">Results</span>
          </h2>
        </div>
        <div
          rel="preload"
          className="container_background container_carrousell--index"
        >
          {!isVisible && (
            <CookiesComponent
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
          )}
          <Carrousel />
          <ColorLines />
          <Home />
        </div>
        <Projects />
        <HomeServices />
        <AboutUs />
        <ContactUs />
        <FloatingButtons/>
      </div>
    </>
  );
};
