import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "../components/Home";
import logo from "../imgs/logoDISC_sinfondo.png";
import ColorLines from "../components/ColorLine";
import "../styles/index.css";
import { Carrousel } from "../components/Carrousel";
import { AboutUs } from "../components/AboutUs.tsx";
import { HomeServices } from "../components/HomeServices.tsx";
import { CookiesComponent } from "../components/CookiesComponent.tsx";
import { Projects } from "../components/Projects.tsx";
import { FloatingButtons } from "../components/FloatingButtons.tsx";
import { ContactButton } from "../components/ContactButton.tsx";
import { ContactUs } from "../components/ContactUs.tsx";
import BeatLoader  from "react-spinners/BeatLoader";
export const Index = () => {
  const navigator =useNavigate()
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false); 

  const handleShowForm = () => {
    setIsLoading(true); // Empieza a cargar
    setTimeout(() => {
      setIsLoading(false); // Detener el loading
      setShowForm(true); // Mostrar el formulario
    }, 1000); // 1segundos de espera
  };
  const handleClose = () => {
    navigator("/");
    setShowForm(false);
  };
  return (
    <>
      <div className="container_index" id="home">
        <div className="container_index--tittle">
          <img
            className="tittle_index--img"
            src={logo as string}
            alt="logo develoment"
          />
          <h2 className="text_index--tittle">
            Innovative&nbsp; <span className="tittle_index--span">Results</span>
          </h2>
        </div>
        {showForm ? (
          <ContactUs handleClose={handleClose}/>
        ) : isLoading ? ( // Mostrar el loading mientras carga
          <div className="loading">
            <BeatLoader  color="#36d7b7" loading={isLoading} size={50} />
           
          </div>
        ) : (
          <>
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
            <FloatingButtons />
          </>
        )}
        <ContactButton handleShowForm={handleShowForm} />{" "}
        {/* Cambiar función */}
      </div>
    </>
  );
};
