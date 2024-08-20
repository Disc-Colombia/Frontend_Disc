import { Carrousel } from "./Carrousel";
import "../style/home.css";
import gobierno from "../img/dc_government.png";
import ong from "../img/ong.png";
import corporations from "../img/corporaciones.png";
import FlipCard from "../component/RotationBox";
export const Home = () => {
  return (
    <div className="container_home">
      <div className="container_home--tittle">
        <h1 className="tittle_home">
          Uor <span className="tittle_home--span">Ecosystem</span>
        </h1>
      </div>
      <Carrousel />
      <div className="container_home--information">
        <div className="home_information">
          <FlipCard image={gobierno} tittle="Government">
            We are a proudly minority-owned, certified company that has earned
            the trust of state, local, and federal government agencies to
            provide staffing, information technology, and operational services
          </FlipCard>
        </div>
        <div className="home_information">
          <FlipCard image={corporations} tittle="Corporations">
            DISC is the solution for large corporations that need to outsource
            their technological, human, and healthcare strategy requirements to
            support commercial and governmental task orders
          </FlipCard>
        </div>
        <div className="home_information">
          <FlipCard image={ong} tittle="Ong">
            DISC collaborates with nonprofit organizations at the local,
            national, and international levels to meet their technological,
            service delivery, and programmatic needs.
          </FlipCard>
        </div>
      </div>
      
    </div>
  );
};
