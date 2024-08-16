import logo from "../img/logoDISC_sinfondo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/headers.css";
export const Footers = () => {
  return (
    <div className="footer_container">
      <div className="footer_logo">
        <div className="footer_container--logo">
          <img className="footer_logo--img" src={logo} alt="logo disc" />
        </div>
        <div className="footer_informations">
          <p>Somos una empresa orgullosamente certificada propiedad de minorias que se ha ganado la confinza</p>
        </div>
      </div>
      <div className="footer_social--networks"></div>
    </div>
  );
};
