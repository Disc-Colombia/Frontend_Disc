import * as React from "react";
import gobierno from "../imgs/gobierno.webp";
import ong from "../imgs/ong.webp";
import corporations from "../imgs/corporaciones.webp";
import "../styles/ecosystem.css";
import { Box } from "./Box";
import { Link } from "react-router-dom";
import { UseScrollAnimation } from "./UseScrollAnimation";


export const Ecosystem: React.FC = () => {

  UseScrollAnimation()

  return (
    <div className="container_content--ecosystem">
      <div className="container_ecosystem--general">
        <div className="title--ecosystem">
          <p className="my_title--black my_animation">
            OUR <span className="title--span">ECOSYSTEM</span>
          </p>
        </div>

        <div className="container_ecosystem">
          <div className="container--text">
            <p className="container_text--end my_animation">
              The solutions proposed by DISC have been implemented by various
              organizations, including government agencies and Fortune 500
              companies. For over a decade, we have been a prominent resource in
              the areas of technology and resource management for corporations
              that provide direct services, including government agencies and
              corporations.
            </p>
          </div>

          <div className="container_ecosystem--information my_animation">
            <div className="ecosystem_information ">
              <Box
                image={gobierno as string}
                description={"imagen gov"}
                tittle={"Government"}
              >
                We are a proudly certified minority-owned company that has earned the trust of state, local, and federal government agencies to provide staffing, information technology, and operational services.
              </Box>
            </div>
            <div className="ecosystem_information">
              <Box
                image={corporations as string}
                description={"Corporation"}
                tittle={"Corporation"}
              >
                We deliver solutions for corporations outsourcing their
                technology, human resources, and healthcare strategies,
                supporting both commercial and government mandates.
              </Box>
            </div>
            <div className="ecosystem_information">
              <Box
                image={ong as string}
                description={"imagen ngo"}
                tittle={"Non-profit organizations"}
              >
                We partner with nonprofit organizations at local, national, and
                international levels to meet their technological, service, and
                programmatic needs.
              </Box>
            </div>
          </div>
        </div>
      </div>
      <div className="container_banner--title">
        <div className="container_interbanner--title my_animation">
        <p className="my_title--black"  style={{textAlign:'center'}}>GOING BEYOND YOUR&nbsp; <span className="title--span">EXPECTATIONS!</span> </p>
        <div className="button_container">
          <Link to="/scheduledemo" className="demobutton ">
            DEMO
          </Link>
        </div>
        </div>
       
      </div>
    </div>
  );
};
