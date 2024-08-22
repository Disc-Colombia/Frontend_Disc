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
              We are a proudly minority-owned, certified company that has earned
              the trust of state, local, and federal government agencies to
              provide staffing, information technology, and operational
              services.
            </p>
            <div className="policies">
              <p className="informations_dis--policies">Privacy policy</p>
              <p className="informations_dis--policies">Terms and conditions</p>
            </div>
          </div>
        </div>
        <div className="footer_social--networks">
          <div className="footer_container--contact">
            <h3 className="social_tittle">Main headquarters in D.C.</h3>
            <div className="footer_social-media">
              <div className="socialinformations">
                <i className="bi bi-envelope contact"></i>
                <p className="informations_dis--paragraph">info@discd.com</p>
              </div>
              <div className="socialinformations">
                <i className="bi bi-whatsapp contact"></i>
                <p className="informations_dis--paragraph">(1)202-446878</p>
              </div>
              <div className="socialinformations">
                <i className="bi bi-geo-alt contact"></i>
                <p className="informations_dis--paragraph">
                  4613 B St SE Washintong,DC
                </p>
              </div>
            </div>
          </div>
          </div>
          <div className="footer_container--contact">
            <h3 className="social_tittle">Colombia branch, Cali</h3>
            <div className="footer_social-media">
              <div className="socialinformations">
                <i className="bi bi-envelope contact"></i>
                <p className="informations_dis--paragraph">info@discd.com</p>
              </div>
              <div className="socialinformations">
                <i className="bi bi-whatsapp contact"></i>
                <p className="informations_dis--paragraph">(1)202-446878</p>
              </div>
              <div className="socialinformations">
                <i className="bi bi-geo-alt contact"></i>
                <p className="informations_dis--paragraph">
                  Cr 39 Cl 7 oeste 09
                </p>
              </div>
            </div>
          </div>
      

        <div className="footer_container--media">
          <h3 className="social_tittle">Follow us on our social media</h3>
          <div className="container_social--icon">
            <i className=" media bi bi-instagram"></i>
            <i className=" media bi bi-facebook"></i>
            <i className=" media bi bi-twitter-x"></i>
            <i className=" media bi bi-youtube"></i>
            <i className=" media bi bi-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <hr />
        <p className="informations_dis--paragraph">
          {" "}
          Development Innovations System C -All Rights Reserved &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};
