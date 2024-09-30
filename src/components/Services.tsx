import "bootstrap-icons/font/bootstrap-icons.css";
import servicesimg from "../imgs/servicesimg.jpg";
import { Link } from "react-router-dom";
import { useState } from 'react';
import * as React from "react";
import '../styles/sectionServices.css'

import {
    VerifiedUserOutlined as VerifiedUserOutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,
    SettingsSuggestOutlined as SettingsSuggestOutlinedIcon,
    BackupTableOutlined as BackupTableOutlinedIcon,
    AdUnitsOutlined as AdUnitsOutlinedIcon,
    PsychologyOutlined as PsychologyOutlinedIcon,
    TipsAndUpdatesOutlined as TipsAndUpdatesOutlinedIcon,
    GroupsOutlined as GroupsOutlinedIcon,
    CloudOutlined as CloudOutlinedIcon,
    AccountTreeOutlined as AccountTreeOutlinedIcon,
    ComputerOutlined as ComputerOutlinedIcon,
  } from "@mui/icons-material";


  const CardSlider = () => {
    const [selectedSlide, setSelectedSlide] = useState('c1');
  
    return (
      <div className="wrapper--cardslider">
        <div className="container--cardslider">
          <input 
            type="radio" 
            name="slide" 
            id="c1" 
            checked={selectedSlide === 'c1'} 
            onChange={() => setSelectedSlide('c1')} 
          />
          <label htmlFor="c1" className="card--cardslider">
        
              <div className="my_paragraph--white">
                <h4>Human Service & Healthcare Systems Administration</h4>
                <p>DISC supports a broad range of healthcare administrative and oversight processes. </p>
              </div>
            
          </label>
  
          <input 
            type="radio" 
            name="slide" 
            id="c2" 
            checked={selectedSlide === 'c2'} 
            onChange={() => setSelectedSlide('c2')} 
          />
          <label htmlFor="c2" className="card--cardslider">
            
              <div className="my_paragraph--white">
                <h4>IT Consulting</h4>
                <p>Our team of experts can provide everything from staff augmentation to customized development.</p>
              </div>
            
          </label>
  
          <input 
            type="radio" 
            name="slide" 
            id="c3" 
            checked={selectedSlide === 'c3'} 
            onChange={() => setSelectedSlide('c3')} 
          />
          <label htmlFor="c3" className="card--cardslider">
            
              <div className="my_paragraph--white">
                <h4>Cybersecurity
                </h4>
                <p>We provide the most comprehensive data coverage for monitoring and detecting threats across digital channels.</p>
              </div>
           
          </label>
  
          <input 
            type="radio" 
            name="slide" 
            id="c4" 
            checked={selectedSlide === 'c4'} 
            onChange={() => setSelectedSlide('c4')} 
          />
          <label htmlFor="c4" className="card--cardslider">
           
              <div className="my_paragraph--white">
                <h4>Finance Solutions</h4>
                <p>DISC is the premier provider for outsourced accounting support and consulting for billing, reporting, and revenue management.</p>
              </div>
            
          </label>

          <input 
            type="radio" 
            name="slide" 
            id="c5" 
            checked={selectedSlide === 'c5'} 
            onChange={() => setSelectedSlide('c5')} 
          />
          <label htmlFor="c5" className="card--cardslider">
            
              <div className="my_paragraph--white">
                <h4>Customer Service</h4>
                <p>From call center support to help desk operators, DISC ensures that every client interaction reflects a positive, personable, and professional impression.</p>
              </div>
            
          </label>


        </div>
      </div>
    );
  };
  

export const Services: React.FC = () => {
    

    const iconStyle = { fontSize: 40, color: "#52b39d" };

    const cards = [
      {
        id: 1,
        icon: <SettingsSuggestOutlinedIcon style={iconStyle} />,
        title: "Software Development & Maintenance",
      },
      {
        id: 2,
        icon: <BackupTableOutlinedIcon style={iconStyle} />,
        title: "Data Migration & Systems Integration",
      },
      {
        id: 3,
        icon: <AdUnitsOutlinedIcon style={iconStyle} />,
        title: "Mobile & Web App Development",
      },
      {
        id: 4,
        icon: <PsychologyOutlinedIcon style={iconStyle} />,
        title: "Artificial Intelligence & Machine Learning",
      },
      {
        id: 5,
        icon: <TipsAndUpdatesOutlinedIcon style={iconStyle} />,
        title: "Innovation Management",
      },
      {
        id: 6,
        icon: <GroupsOutlinedIcon style={iconStyle} />,
        title: "Temporary Staffing Services",
      },
      {
        id: 7,
        icon: <VerifiedUserOutlinedIcon style={iconStyle} />,
        title: "CyberSecurity Consulting",
      },
      {
        id: 8,
        icon: <CloudOutlinedIcon style={iconStyle} />,
        title: "Cloud Computing Consulting and Support",
      },
      {
        id: 9,
        icon: <AccountTreeOutlinedIcon style={iconStyle} />,
        title: "Database Management & Warehousing",
      },
      {
        id: 10,
        icon: <ComputerOutlinedIcon style={iconStyle} />,
        title: "Computers & Peripherals Wholesale",
      },
      {
        id: 11,
        icon: <SettingsOutlinedIcon style={iconStyle} />,
        title: "General Services",
      },
    ];


  return (
    <div className="big_container--servicesection">

      <div className="Container_our--services">
        <div className="container_service--text">
            <p className="title_service-section my_title--white">
              WHAT WE<span className="title--span"> DO</span>
            </p>
            <p className="my_paragraph--white">
              {" "}
              DISC utilizes best practices to meet and exceed the needs of our
              public and private sector global clients. Our flexible environment
              is infused with technological expertise and rigorous compliance
              standards. We don’t skim on excellence or cut corners.{" "}
            </p>          
        </div>
        <CardSlider />
      </div>

      <div className="container-text--allservices">
        <p className="my_title--black">
          YOUR <span className="title--span">TECHNOLOGY</span> PARTNER
        </p>
        <p className="initial_paragraph-services">
          DISC is the trusted source for government agencies, non-profits,
          for-profits and Fortune 500 companies to gain best in class solutions
          in Information Technology and Innovation Management Solutions. We use
          best practices, and every project we undertake is based on close
          collaboration with our clients, ensuring that each solution is
          perfectly aligned with their specific goals and challenges.
        </p>
        <div className="container-cards-services">
            <div className="card-grid-allservices">
            {/* Primer grid para las 9 cartas */}
                <div className="card-grid-main">
                {cards.slice(0, 9).map((card) => (
                <div key={card.id} className="card-allservices">
                    <div className="card-icon-services">{card.icon}</div>
                    <div className="card-title-services">{card.title}</div>
                </div>
                ))}
            </div>
        </div>
        {/* Segundo grid para las 2 cartas restantes */}
        <div className="card-grid-center">
            {cards.slice(9).map((card) => (
            <div key={card.id} className="card-allservices">
                <div className="card-icon-services">{card.icon}</div>
                <div className="card-title-services">{card.title}</div>
            </div>
            ))}
        </div>
        </div>
      </div>


    </div>  
  );
};
