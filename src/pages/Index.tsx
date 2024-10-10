import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../imgs/logoDISC_sinfondo.png";
import "../styles/index.css";
import { Carrousel } from "../components/Carrousel";
import { CookiesComponent } from "../components/CookiesComponent.tsx";
import { FloatingButtons } from "../components/FloatingButtons.tsx";
import { ContactButton } from "../components/ContactButton.tsx";
import { ContactUs } from "../components/ContactUs.tsx";
import BeatLoader  from "react-spinners/BeatLoader";
import { Ecosystem } from "../components/Ecosystem.tsx";
import {Services} from '../components/Services.tsx';
import { ClientsSection } from "../components/ClientsCarousel.tsx";
import { PartnersSection } from "../components/Partners.tsx";

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
              INNOVATIVE RESULTS
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
                <Services/>
                <ClientsSection/>
                <Ecosystem />
                {/* <Projects /> */}
                <PartnersSection/>
                <FloatingButtons/>
              </>
          )}
          <ContactButton handleShowForm={handleShowForm} />{" "}
        </div>
      </>
  );
};
