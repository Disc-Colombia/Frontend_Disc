import { Link } from "react-router-dom";
import "../styles/cookiesSetting.css";
const CookiesSetting = () => {
  return (
    <div className="container_cookiespolicy">
      <div className="cookies_setting--content">
        <section>
          <h3 className="title_cookies--setting">
            ¿Para qué finalidades se utiliza mi información y quiénes la
            utilizan?
          </h3>
          <p className="sitting_content">
            Este Sitio Web utiliza cookies propias y de otras entidades, para
            poder acceder y usar su información para las finalidades que se
            indican a continuación. Si no está de acuerdo con alguna de estas
            finalidades, podrá personalizar sus opciones a través de esta
            pantalla.
          </p>
          <p className="sitting_content">
            Nosotros y las empresas que colaboran con nosotros, tales como
            anunciantes, operadores publicitarios e intermediarios, usaremos su
            información obtenida a través de las cookies. Para conocer las
            empresas colaboradoras que incorporan sus cookies en nuestro sitio
            web puede acceder a través del botón Ver nuestros socios. Puede
            configurar sus preferencias de consentimiento por separado para cada
            uno de los socios mencionados.
          </p>
          <p className="sitting_content">
            <span className="setting_content--span">Información adicional:</span>
             Puede conocer la información completa sobre el uso de las cookies,
            su configuración, origen, finalidades y derechos en nuestra{" "}
            <Link to={"/cookiesPolicy"}>Política de Cookies</Link>
          </p>
        </section>
      </div>
      <div className="container_form--cookies">
        <form action="">
          <div className="cookies_description">
            <div className="label_setting--information">
              <label className="cookie_information">
                Compartir datos y perfiles para análisis y publicidad
                personalizada de los anunciantes para nuestras campañas
                publicitarias
              </label>
            </div>
            <div className="container_btn--setting">
              <button
                type="button"
                value={"aceptar"}
                className="btn_cookies--setting acept"
              >
                Aceptar
              </button>
              <button
                type="button"
                value={"rechazar"}
                className="btn_cookies--setting acept"
              >
                Rechazar
              </button>
            </div>
          </div>
          <div className="cookies_description">
            <div className="label_setting--information">
              <label className="cookie_information">
                Almacenamiento y acceso a la información
              </label>
            </div>
            <div className="container_btn--setting">
              <button
                type="button"
                value={"aceptar"}
                className="btn_cookies--setting acept"
              >
                Aceptar
              </button>
              <button
                type="button"
                value={"rechazar"}
                className="btn_cookies--setting"
              >
                Rechazar
              </button>
            </div>
          </div>
          <div className="cookies_description">
            <div className="label_setting--information">
              <label className="cookie_information">
                Analizar activamente las características del dispositivo para su
                identificación
              </label>
            </div>
            <div className="container_btn--setting">
              <button
                type="button"
                value={"aceptar"}
                className="btn_cookies--setting acept"
              >
                Aceptar
              </button>
              <button
                type="button"
                value={"rechazar"}
                className="btn_cookies--setting"
              >
                Rechazar
              </button>
            </div>
          </div>
          <div className="cookies_description">
            <div className="label_setting--information">
              <label className="cookie_information">
                Compartir datos y perfiles para análisis y publicidad
                personalizada de los anunciantes y agencias publicitarias en
                internet
              </label>
            </div>
            <div className="container_btn--setting">
              <button
                type="button"
                value={"aceptar"}
                className="btn_cookies--setting acept"
              >
                Aceptar
              </button>
              <button
                type="button"
                value={"rechazar"}
                className="btn_cookies--setting"
              >
                Rechazar
              </button>
            </div>
          </div>
          <div className="cookies_description">
            <div className="label_setting--information">
              <label className="cookie_information">
                Comprender al público a través de estadísticas o a través de la
                combinación de datos procedentes de diferentes fuentes
              </label>
            </div>
            <div className="container_btn--setting ">
              <button
                type="button"
                value={"aceptar"}
                className="btn_cookies--setting acept"
              >
                Aceptar
              </button>
              <button
                type="button"
                value={"rechazar"}
                className="btn_cookies--setting acept"
              >
                Rechazar
              </button>
            </div>
          </div>
          <div className="cookies_description">
            <div className="label_setting--information">
              <label className="cookie_information">
              Crear perfiles para publicidad personalizada
              </label>
            </div>
            <div className="container_btn--setting">
              <button
                type="button"
                value={"aceptar"}
                className="btn_cookies--setting acept"
              >
                Aceptar
              </button>
              <button
                type="button"
                value={"rechazar"}
                className="btn_cookies--setting"
              >
                Rechazar
              </button>
            </div>
          </div>
          <div className="cookies_description">
            <div className="label_setting--information">
              <label className="cookie_information">
                Compartir datos y perfiles para análisis y publicidad
                personalizada de los anunciantes para nuestras campañas
                publicitarias
              </label>
            </div>
            <div className="container_btn--setting">
              <button
                type="button"
                value={"aceptar"}
                className="btn_cookies--setting acept"
              >
                Aceptar
              </button>
              <button
                type="button"
                value={"rechazar"}
                className="btn_cookies--setting"
              >
                Rechazar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CookiesSetting;
