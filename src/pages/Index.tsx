import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../imgs/logoDISC_sinfondo.png";
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
import { Ecosystem } from "../components/Ecosystem.tsx";

export const Index = () => {
  const navigator =useNavigate()
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleShowForm = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowForm(true);
    }, 1000);
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
          ) : isLoading ? (
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
                </div>
                <AboutUs />
                <HomeServices />
                <Ecosystem />
                <Projects />
               
              </>
          )}
          <ContactButton handleShowForm={handleShowForm} />{" "}
        </div>
      </>
  );
};
