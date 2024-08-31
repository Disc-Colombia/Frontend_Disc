import gobierno from "../img/gobierno.png";
import ong from "../img/ong.png";
import corporations from "../img/corporaciones.png";
import "../style/home.css";
import { Box } from "./Box";
export const Home = () => {
  return (
    <div className="">
      <div className="container_home--">
        <div className="container_home--tittle">
          <h1 className="tittle_home">
            ¡We exceed{" "}
            <span className="tittle_home--span">your expectations!</span>
          </h1>
        </div>
        <div className="container_home--information">
          <div className="home_information">
            {/* <div className="container_img">
            <img className="home_img" src={gobierno} alt="imagen gov" />
          </div>
          <div className="container_agenci--information">
            <h3 className="tittle_agenci">Government</h3>
            <p className="agenci_text">
              We are a proudly minority-owned, certified company that has earned
              the trust of state, local, and federal government agencies to
              provide staffing, information technology, and operational services
            </p>
          </div> */}
            <Box
              image={gobierno}
              description={"imagen gov"}
              tittle={"Government"}
            >
              We are a proudly minority-owned, certified company that has earned
              the trust of state, local, and federal government agencies to
              provide staffing, information technology, and operational services
            </Box>
          </div>
          <div className="home_information">
            {/* <div className="container_img">
            <img
              className="home_img"
              src={corporations}
              alt="imagen corporaciones"
            />
          </div>
          <div className="container_agenci--information">
            <h3 className="tittle_agenci">Corpotation</h3>
            <p className="agenci_text">
              DISC is the solution for large corporations that need to outsource
              their technological, human, and healthcare strategy requirements
              to support commercial and governmental task orders
            </p>
          </div> */}
            <Box
              image={corporations}
              description={"Corpotation"}
              tittle={"Corpotation"}
            >
              DISC is the solution for large corporations that need to outsource
              their technological, human, and healthcare strategy requirements
              to support commercial and governmental task orders
            </Box>
          </div>
          <div className="home_information">
            {/* <div className="container_img">
            <img className="home_img" src={ong} alt="imagen ngo" />
          </div>
          <div className="container_agenci--information">
            <h3 className="tittle_agenci">non-profit organizations</h3>
            <p className="agenci_text">
              DISC collaborates with nonprofit organizations at the local,
              national, and international levels to meet their technological,
              service delivery, and programmatic needs.
            </p>
          </div> */}
            <Box
              image={ong}
              description={"imagen ngo"}
              tittle={"non-profit organizations"}
            >
              DISC collaborates with nonprofit organizations at the local,
              national, and international levels to meet their technological,
              service delivery, and programmatic needs.
            </Box>
          </div>
        </div>
      </div>
      <div className="container_end--text">
        <div>
          <h2>Our ecosystem</h2>
        </div>
        <p className="agenci_text--end">
          The solutions proposed by DISC have been implemented by various
          organizations, including government agencies and Fortune 500
          companies. For over a decade, we have been a prominent resource in the
          areas of technology and resource management for corporations that
          provide direct services, including government agencies and
          corporations.
        </p>
      </div>
    </div>
  );
};
