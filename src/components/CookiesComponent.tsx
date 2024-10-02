import * as React from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import "../styles/cookies.css";
import { Dispatch } from "react";
import CookiesSitting from "./CookiesSetting";
type CookiesProps = {
  isVisible: boolean;
  setIsVisible: Dispatch<React.SetStateAction<boolean>>;
};

export const CookiesComponent = ({ isVisible, setIsVisible }: CookiesProps) => {
  const [configuration, setConfiguration] = React.useState(false);
  // Verifica si la cookie de acceptation ya existe
  useEffect(() => {
    const cookiesAccepted = Cookies.get("cookiesAccepted");
    if (cookiesAccepted) {
      setIsVisible(true); // Mostrar banner si la cookie no existe
    } else {
      setIsVisible(false); // Ocultar banner si la cookie ya existe
    }
  }, [setIsVisible]);

  const handleAccept = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
    setIsVisible(true);
    if (!isVisible) return null;
  };
  const rejectCookies = () => {
    console.log("Cookies Rechazadas");
    Cookies.remove("cookiesConsent");
    setIsVisible(true);
    // Aquí puedes eliminar cookies opcionales o evitar que se carguen scripts
  };
  const handleConfiguration = () => {
    setConfiguration(true);
  };
  return (
    <>
      {configuration ? (
        <CookiesSitting />
      ) : (
        <div className="cookie-banner">
          <p className="cookies_information">
            This website uses cookies to improve your experience, provide
            personalized content, and analyze site traffic. By clicking
            'Accept', you agree to the use of all cookies. You can manage your
            preferences by clicking 'Cookie Settings.
          </p>
          <button className="aceptcookies" value="acept" onClick={handleAccept}>
            Accept
          </button>
          <button
            className="rejectcookies"
            value="reject"
            onClick={rejectCookies}
          >
            Reject
          </button>
          <div className="container_cookies--setting">
            <button className="setting_cookies"
            onClick={handleConfiguration}
            >
              {" "}
              cookie settings
            </button>
          </div>
        </div>
      )}
    </>
  );
};
