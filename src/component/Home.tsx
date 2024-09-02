import gobierno from "../img/gobierno.png";
import ong from "../img/ong.png";
import corporations from "../img/corporaciones.png";
import "../style/home.css";
import { Box } from "./Box";
export const Home = () => {
  return (
    <div className="container_content--home">
      <div className="container_home--tittle">
          <h1 className="tittle_home">
            ¡We exceed{" "}
            <span className="tittle_home--span">your expectations!</span>
          </h1>
        </div>
        <div className="container_home--general">
      <div className="container_end--text">
        <div>
          <h2 className="tittle_home">Our <span className="tittle_home--span">ecosystem</span></h2>
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
      <div className="container_home--">
        
        <div className="container_home--information">
          <div className="home_information">
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
    </div>
    </div>
  );
};
