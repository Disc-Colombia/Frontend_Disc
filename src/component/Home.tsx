import { Carrousel } from "./Carrousel";
import "../style/home.css";
import gobierno from "../img/dc_government.png";
import ong from "../img/ong.png";
import corporations from "../img/corporaciones.png";
export const Home = () => {
  return (
    <div className="container_home">
      <div className="container_home--tittle">
        <h1 className="tittle_home">
          Uor <span className="tittle_home--span">Ecosystem</span>
        </h1>
      </div>
      <div className="container_home--information">
        <div className="home_information">
          <img className="home_img" src={gobierno} alt="" />
          <div className="container_agenci--information">
            <h3 className="agenci_tittle">Government</h3>
            <p className="agenci_text">
              We are a proudly minority-owned, certified company that has earned
              the trust of state, local, and federal government agencies to
              provide staffing, information technology, and operational
              services.
            </p>
          </div>
        </div>
        <div className="home_information">
          <img className="home_img" src={corporations} alt="" />
          <div className="container_agenci--information">
            <h3 className="agenci_tittle">Corporations</h3>
            <p className="agenci_text">
              DISC is the solution for large corporations that need to outsource
              their technological, human, and healthcare strategy requirements
              to support commercial and governmental task orders
            </p>
          </div>
        </div>
        <div className="home_information">
          <img className="home_img" src={ong} alt="" />
          <div className="container_agenci--information">
            <h3 className="agenci_tittle">Ong</h3>
            <p className="agenci_text">
              DISC collaborates with nonprofit organizations at the local,
              national, and international levels to meet their technological,
              service delivery, and programmatic needs.
            </p>
          </div>
        </div>
      </div>
      <Carrousel />
    </div>
  );
};
