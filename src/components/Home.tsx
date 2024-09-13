import * as React from "react";
import gobierno from "../imgs/gobierno.png";
import ong from "../imgs/ong.png";
import { Link } from "react-router-dom";
import corporations from "../imgs/corporaciones.png";
import "../styles/home.css";
import { Box } from "./Box";

export const Home: React.FC = () => {

  return (
      <div className="container_content--home" >

        <div className="container_home--general">
          <div className="tittle_home_eco--">
            <h2 className="tittle_home_ecosis">Our <span className="tittle_home--span">ecosystem</span></h2>
          </div>

          <div className="container_home">

            <div className="container_end--text">

              <p className="agenci_text--end">
                The solutions proposed by DISC have been implemented by various
                organizations, including government agencies and Fortune 500
                companies. For over a decade, we have been a prominent resource in the
                areas of technology and resource management for corporations that
                provide direct services, including government agencies and
                corporations.
              </p>
            </div>

            <div className="container_home--information">
              <div className="home_information">
                <Box
                    image={gobierno as string}
                    description={"imagen gov"}
                    tittle={"Government"}
                >
                  Minority-owned and certified, we are a trusted provider for government agencies in staffing, information technology, and operations services.
                </Box>
              </div>
              <div className="home_information">
                <Box
                    image={corporations as string}
                    description={"Corpotation"}
                    tittle={"Corpotation"}
                >
                  We deliver solutions for corporations outsourcing their technology, human resources, and healthcare strategies, supporting both commercial and government mandates.
                </Box>
              </div>
              <div className="home_information">
                <Box
                    image={ong as string}
                    description={"imagen ngo"}
                    tittle={"Non-profit organizations"}
                >
                  We partner with nonprofit organizations at local, national, and international levels to meet their technological, service, and programmatic needs.
                </Box>
              </div>
            </div>
          </div>
        </div>
        <div className="container_home--tittle">
          <h1 className="tittle_home">
            GOING BEYOND YOUR EXPECTATIONS!
          </h1>
          <div className="button_container">
            <Link to="/scheduledemo"
                  className="demobutton"
            >DEMO</Link>
          </div>
        </div>
      </div>
  );
};
