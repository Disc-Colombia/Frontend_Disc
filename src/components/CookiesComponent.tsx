import * as React from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import "../styles/cookies.css";
import { Dispatch } from "react";

type CookiesProps = {
  isVisible: boolean;
  setIsVisible: Dispatch<React.SetStateAction<boolean>>;
};

export const CookiesComponent = ({ isVisible, setIsVisible }: CookiesProps) => {
  // Verifica si la cookie de acceptation ya existe
  useEffect(() => {
    const cookiesAccepted = Cookies.get("cookiesAccepted");
    if (cookiesAccepted) {
      console.log("Cookie Accepted:", cookiesAccepted);
      setIsVisible(true); // Mostrar banner si la cookie no existe
    } else {
      console.log("Cookie Accepted:", cookiesAccepted);
      setIsVisible(false); // Ocultar banner si la cookie ya existe
    }
  }, [setIsVisible]);

  const handleAccept = () => {
    // Establece una cookie que expira en 365 días
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
    
    setIsVisible(true);
    if (!isVisible) return null;
  };
  return (
    <div className="cookie-banner">
      Este sitio web utiliza cookies para mejorar tu experiencia.
      <button onClick={handleAccept}>Aceptar</button>
    </div>
  );
};
