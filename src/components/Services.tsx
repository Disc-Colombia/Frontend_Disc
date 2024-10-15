import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import * as React from "react";
import { Tooltip, tooltipClasses,TooltipProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import '../styles/sectionServices.css'
import '../styles/colores.css'
import { UseScrollAnimation } from "./UseScrollAnimation";

import {SupportAgentOutlined as SupportAgentOutlinedIcon,
    ReadMoreOutlined as ReadMoreOutlinedIcon,
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


  const iconStyle = { fontSize: 30, color: "#52b39d" };

  const iconStyleanimate ={...iconStyle, 
    animation: 'pulsegreen 2s infinite',
    borderRadius: '50%', 
    overflow: 'hidden'
  }

  const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className || "" }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "var(--LogoBackground)",
      fontFamily: "var(--monserrat-font-family)",
      color: theme.palette.common.white,
      boxShadow: theme.shadows[1],
      fontSize: 12,
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: 'var(--LogoBackground)', // Color de la flecha
    },
  }));

  const CardSlider = () => {
    const [selectedSlide, setSelectedSlide] = useState('c1');
  
    UseScrollAnimation()
    

    return (
      <div className="wrapper--cardslider my_animation">
        <div className="container--cardslider">
          <input 
            className="input_imgs--services"
            type="radio" 
            name="slide" 
            id="c1" 
            checked={selectedSlide === 'c1'} 
            onChange={() => setSelectedSlide('c1')} 
          />
          <label htmlFor="c1" className="card--cardslider">
        
              <div className="my_paragraph--white">
                <p className="title_onCard" style={{textAlign:'left'}}>Human Service & Healthcare Systems Administration</p>
                <p>DISC supports a broad range of healthcare administrative and oversight processes. </p>
                <CustomTooltip title="View more..."  placement='top'>
                  <Link to ='/Human-Service' className="view_more--services"><ReadMoreOutlinedIcon style={iconStyleanimate} /></Link>

                </CustomTooltip>
                
              </div>
            
          </label>
  
          <input 
          className="input_imgs--services"
            type="radio" 
            name="slide" 
            id="c2" 
            checked={selectedSlide === 'c2'} 
            onChange={() => setSelectedSlide('c2')} 
          />
          <label htmlFor="c2" className="card--cardslider">
            
              <div className="my_paragraph--white">
                <p className="title_onCard">IT Consulting</p>
                <p>Our team of experts can provide everything from staff augmentation to customized development.</p>
                <CustomTooltip title="View more..."  placement='top'>
                  <Link to ='/IT-Consulting' className="view_more--services"><ReadMoreOutlinedIcon style={iconStyleanimate} /></Link>

              </CustomTooltip>
              </div>
              
            
          </label>
  
          <input 
          className="input_imgs--services"
            type="radio" 
            name="slide" 
            id="c3" 
            checked={selectedSlide === 'c3'} 
            onChange={() => setSelectedSlide('c3')} 
          />
          <label htmlFor="c3" className="card--cardslider">
            
              <div className="my_paragraph--white">
                <p className="title_onCard">Cybersecurity
                </p>
                <p>We provide the most comprehensive data coverage for monitoring and detecting threats across digital channels and provides real-time intelligence.</p>
                <CustomTooltip title="View more..."  placement='top'>
                  <Link to ='/Cybersecurity' className="view_more--services"><ReadMoreOutlinedIcon style={iconStyleanimate} /></Link>

                </CustomTooltip>
              </div>
             
           
          </label>
  
          <input 
          className="input_imgs--services"
            type="radio" 
            name="slide" 
            id="c4" 
            checked={selectedSlide === 'c4'} 
            onChange={() => setSelectedSlide('c4')} 
          />
          <label htmlFor="c4" className="card--cardslider">
           
              <div className="my_paragraph--white">
                <p className="title_onCard">Finance Solutions</p>
                <p>DISC is the premier provider for outsourced accounting support and consulting for billing, reporting, and revenue management.</p>
                <CustomTooltip title="View more..."  placement='top'>
                  <Link to ='/Finance-Solutions' className="view_more--services"><ReadMoreOutlinedIcon style={iconStyleanimate} /></Link>

              </CustomTooltip>
              </div>
              
          </label>

          <input 
          className="input_imgs--services"
            type="radio" 
            name="slide" 
            id="c5" 
            checked={selectedSlide === 'c5'} 
            onChange={() => setSelectedSlide('c5')} 
          />
          <label htmlFor="c5" className="card--cardslider">
            
              <div className="my_paragraph--white">
                <p className="title_onCard">Customer Service</p>
                <p>From call center support to help desk operators, DISC ensures that every client interaction reflects a positive, personable, and professional impression.</p>
                <CustomTooltip title="View more..."  placement='top'>
                  <Link to ='/Customer-Service' className="view_more--services"><ReadMoreOutlinedIcon style={iconStyleanimate} /></Link>

                </CustomTooltip>
              </div>
             
            
          </label>


        </div>
      </div>
    );
  };
  
  

  const cards = [
    {
      id: 1,

      icon: <PsychologyOutlinedIcon style={iconStyle} />,
      title: "Artificial Intelligence & Machine Learning",
      
    },
    {
      id: 2,
      icon: <AccountTreeOutlinedIcon style={iconStyle} />,
      title: "Database Management & Warehousing",
      
    },
    {
      id: 3,
      
      icon: <CloudOutlinedIcon style={iconStyle} />,
      title: "Cloud Computing Consulting and Support",
    }, 
    {
      id: 4,
      icon: <SettingsSuggestOutlinedIcon style={iconStyle} />,
      title: "Software Development & Maintenance",
    },
    {
      id: 5,
      icon: <BackupTableOutlinedIcon style={iconStyle} />,
      title: "Data Migration & Systems Integration",
      
    },
    {
      id: 6,
      icon: <ComputerOutlinedIcon style={iconStyle} />,
      title: "Computers & Peripherals Wholesale",
      
    },
    {
      id: 7,
      icon: <AdUnitsOutlinedIcon style={iconStyle} />,
      title: "Mobile & Web App Development",
      
    },
    {
      id: 8,
      icon: <GroupsOutlinedIcon style={iconStyle} />,
      title: "Temporary Staffing Services",
    
    },
    {
      id: 9,
      icon: <VerifiedUserOutlinedIcon style={iconStyle} />,
      title: "CyberSecurity Consulting",
      
    },
    {
      id: 10,
      icon: <TipsAndUpdatesOutlinedIcon style={iconStyle} />,
      title: "Innovation Management",
    },
    {
      id: 11,
      icon: <SupportAgentOutlinedIcon style={iconStyle} />,
      title: "Call Center Services",
    },
    {
      id: 12,
      icon: <SettingsOutlinedIcon style={iconStyle} />,
      title: "General Services",
    },
  ];
  
export const Services: React.FC = () => {
    

    
  UseScrollAnimation()

  return (
    <div className="big_container--servicesection">

      <div className="Container_our--services">
        <div className="container_service--text">
            <p className="title_service-section my_title--white my_animation">
              WHAT WE<span className="title--span"> DO</span>
            </p>
            <p className="my_paragraph--white my_animation">
              
            At DISC, we are committed to employing the highest industry standards and best practices to not only meet but exceed the expectations of our diverse clientele, ranging from public to private sector organizations across the globe. Our flexible and dynamic approach is deeply rooted in cutting-edge technological expertise, ensuring that we provide innovative solutions tailored to each client's unique needs. We operate within a framework of strict compliance and regulatory standards, leaving no room for shortcuts or compromises. Excellence is at the core of everything we do, driving us to consistently deliver high-quality results with precision and integrity.
            </p>
            <CardSlider />          
        </div>
      </div>

      <div className="container-text--allservices">
        <p className="my_title--black my_animation" style={{textAlign:'center'}}>
          YOUR <span className="title--span">TECHNOLOGY</span> PARTNER
        </p>
        <p className="my_paragraph--black my_animation">
          DISC is the trusted source for government agencies, non-profits,
          for-profits and Fortune 500 companies to gain best in class solutions
          in Information Technology and Innovation Management Solutions. We use
          best practices, and every project we undertake is based on close
          collaboration with our clients, ensuring that each solution is
          perfectly aligned with their specific goals and challenges.
        </p>
        <div className="container-cards-services">
        
          <div className="card-grid-allservices">
            {cards.map((card) => (
              <div key={card.id} className="card-allservices my_animation">
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
