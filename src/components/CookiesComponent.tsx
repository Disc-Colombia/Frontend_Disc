import * as React from "react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "../styles/cookies.css";
import { Dispatch } from "react";
import type { CookiesPropsSitting } from "../type/type";
import { Link } from "react-router-dom";
type CookiesProps = {
  isVisible: boolean;
  setIsVisible: Dispatch<React.SetStateAction<boolean>>;
};

export const CookiesComponent = ({ isVisible, setIsVisible }: CookiesProps) => {
  const [configuration, setConfiguration] = React.useState(false);
  const [cookiesAcept, setCookiesAcept] = useState<CookiesPropsSitting>({
    shareData_and_perfile: true,
    storage_information: true,
    activity_analysis: true,
    perfil_and_publicity: true,
    stadistic: true,
    createPerfil: true,
    shareData: true,
  });
  // Cargar las preferencias de cookies cuando el componente se monta
  useEffect(() => {
    const savedPreferences = Cookies.get("userPreferences");
    if (savedPreferences) {
      setCookiesAcept(JSON.parse(savedPreferences));
    }
  }, []);
  // Verifica si la cookie de acceptation ya existe
  useEffect(() => {
    const cookiesAccepted = Cookies.get("cookiesAccepted");
    if (cookiesAccepted) {
      setIsVisible(true); // Mostrar banner si la cookie no existe
    } else {
      setIsVisible(false); // Ocultar banner si la cookie ya existe
    }
  }, [setIsVisible]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCookiesAcept({
      ...cookiesAcept,
      [name]: checked,
    });
  };
  const handleAccept = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
    Cookies.set("userPreferences", JSON.stringify(cookiesAcept), {
      expires: 365,
    });
    setIsVisible(true);
    if (!isVisible) return null;
  };
  const rejectCookies = () => {
    Cookies.remove("cookiesConsent");
    setIsVisible(true);
    // Aquí puedes eliminar cookies opcionales o evitar que se carguen scripts
  };
  const handleConfiguration = () => {
    setConfiguration(true);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAccept();
    //Guarda la Cookies
    Cookies.set("userPreferences", JSON.stringify(cookiesAcept), {
      expires: 365,
    });
  };

  return (
    <>
      {configuration ? (
        <div className="container_cookiespolicy" >
          <div className="cookies_setting--content">
            <section>
              <h3 className="title_cookies--setting">
                For what purposes is my information used and who uses it?
              </h3>
              <p className="sitting_content">
                This website uses its own cookies as well as those from other
                entities... You can find the complete information in our{" "}
                <Link to={"/cookiesPolicy"}> Cookies Policies</Link>
              </p>
            </section>
          </div>
          <div className="container_form--cookies">
            <form id="cookiesForms" onSubmit={handleSubmit}>
              <div className="cookies_description">
                <label>
                  Share data and profiles for analysis and personalized
                  advertising.
                </label>
                <input
                  type="checkbox"
                  name="shareData_and_perfile"
                  checked={cookiesAcept.shareData_and_perfile}
                  onChange={handleChange}
                />
              </div>

              <div className="cookies_description">
                <label>Storage and access to information.</label>
                <input
                  type="checkbox"
                  name="storage_information"
                  checked={cookiesAcept.storage_information}
                  onChange={handleChange}
                />
              </div>

              <div className="cookies_description">
                <label>Actively analyze device characteristics.</label>
                <input
                  type="checkbox"
                  name="activity_analysis"
                  checked={cookiesAcept.activity_analysis}
                  onChange={handleChange}
                />
              </div>

              <div className="cookies_description">
                <label>Personalized advertising from advertisers.</label>
                <input
                  type="checkbox"
                  name="perfil_and_publicity"
                  checked={cookiesAcept.perfil_and_publicity}
                  onChange={handleChange}
                />
              </div>

              <div className="cookies_description">
                <label>Understanding the audience through statistics.</label>
                <input
                  type="checkbox"
                  name="stadistic"
                  checked={cookiesAcept.stadistic}
                  onChange={handleChange}
                />
              </div>

              <div className="cookies_description">
                <label>Create profiles for personalized advertising</label>
                <input
                  type="checkbox"
                  name="createPerfil"
                  checked={cookiesAcept.createPerfil}
                  onChange={handleChange}
                />
              </div>
              <div className="container_btn--submit">
                <input
                  className="btn_submit--cookies"
                  type="submit"
                  value="Save settings"
                />
              </div>
            </form>
          </div>
        </div>
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
            <button className="setting_cookies" onClick={handleConfiguration}>
              {" "}
              cookie settings
            </button>
          </div>
        </div>
      )}
    </>
  );
};
