import logo from "../img/logoDISC_sinfondo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/headers.css";
export const Footers = () => {
  return (
    <div className="footer_container">
      <div className="footer_logo">
        <div className="containe_section--logo">
        <div className="footer_container--logo">
          <img className="footer_logo--img" src={logo} alt="logo disc" />
        </div>
        <div className="footer_informations">
          <p className="informations_dis">
            Somos una empresa orgullosamente certificada de propiedad de
            minorías que se ha ganado la confianza de las agencias
            guvernamentales estatales, locales y federales para brindar
            servicios de personal, tecnología de la información y servicios
            operativos.
          </p>
        </div>
        <div>
          <p className="informations_dis">Politicas de privacidad </p>
          <p className="informations_dis">Terminos y condiciones</p>
        </div>
        </div>
        <div className="footer_social--networks">
          <h3>Nuestras redes sociales</h3>
          <div>
            <div>
              <i className="bi bi-envelope"></i>
              <p className="informations_dis">info@discd.com</p>
            </div>
            <div>
              <i className="bi bi-whatsapp"></i>
              <p className="informations_dis">(1)202-446878</p>
            </div>
            <div>
              <i className="bi bi-geo-alt"></i>
              <p className="informations_dis">4613 B St SE Washintong,DC.2019</p>
            </div>
          </div>
        </div>
      </div>
      <p className="informations_dis">
            {" "}
            Development Innovations System C -All Rights Reserved &copy;{" "}
            {new Date().getFullYear()}
          </p>
    </div>
  );
};
