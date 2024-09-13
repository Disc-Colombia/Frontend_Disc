import { useEffect } from "react";
import Cookies from "js-cookie";
import "../styles/cookies.css";
import { Dispatch } from "react";
type CookiesProps = {
  isVisible: boolean;
  setIsVisible: Dispatch<React.SetStateAction<boolean>>;
};
export const CookiesComponet = ({ isVisible, setIsVisible }: CookiesProps) => {
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
      <p className="cookies_information">
      This website uses cookies to improve your experience, provide personalized
      content, and analyze site traffic. By clicking 'Accept', you agree to the
      use of all cookies. You can manage your preferences by clicking 'Cookie
      Settings.
      </p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};
