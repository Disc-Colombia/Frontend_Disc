import React, { useState } from 'react';
import maternappIcon from "../imgs/maternappicon.png";
import saludtechIcon from "../imgs/salutechicon.png";
import covid19Icon from "../imgs/covidicon.png";
import covidpassportIcon from "../imgs/healthpassicon.png";
import websitesIcon from "../imgs/yocoicon.png";

import maternappBig from "../imgs/maternapp.png";
import saludtechBig from "../imgs/covid19app.png";
import covid19Big from "../imgs/covid19.png";
import covidpassportBig from "../imgs/covidpassport.jpg";
import websitesBig from "../imgs/yocoweb.jpg";

import "../styles/projects.css";


export const Projects = () => {

  
  // Información de cada botón, con imágenes pequeñas y grandes
  const infoOptions = [
    {
      title: 'MaternApp',
      description: 'Development of a medical software for prenatal control focused on the prevention of maternal and infant morbidity and mortality during the perinatal period.',
      imageSmall: maternappIcon, // Imagen pequeña para el botón
      imageLarge: maternappBig    // Imagen grande para la visualización
    },
    {
      title: 'SaludTech',
      description: 'Web and Mobile App service supported by the COVID-19 WATCHR Software. It was developed by DISC in 3 different languages (English, Portuguese and Spanish).',
      imageSmall: saludtechIcon,
      imageLarge: saludtechBig
    },
    {
      title: 'COVID-19 WATCH Software',
      description: 'Digital platform; website, mobile application, social networks, liaison platforms and AI (Artificial Intelligence), designed to help to reduce the spread of the Coronavirus',
      imageSmall: covid19Icon,
      imageLarge: covid19Big
    },
    {
      title: 'Covid-19 Vaccine Passport',
      description: 'Digital Proof of Immunization against the COVID-19.',
      imageSmall: covidpassportIcon,
      imageLarge: covidpassportBig
    },
    {
      title: 'Website Development',
      description: 'Modern design, Multilingual Interface and donation capturing platforms Integration. Offering state of the art solutions to our clients',
      imageSmall: websitesIcon,
      imageLarge: websitesBig
    }
  ];

  // Estado para manejar el contenido mostrado, inicializado con la opción 1
  const [selectedInfo, setSelectedInfo] = useState(infoOptions[0]);

  // Función para manejar el cambio de información
  const handleButtonClick = (option: React.SetStateAction<{
      title: string; description: string; imageSmall: string; // Imagen pequeña para el botón
      imageLarge: string; // Imagen grande para la visualización
    }>) => {
    setSelectedInfo(option);
  };




  return (

    <div className='container_projects'>

      {/* Área donde se muestra la información seleccionada */}
      <div className='content_option'>
        <div className='container_text'>
          <h2 className='tittle_content'>{selectedInfo.title}</h2>
          <p className='description_content'>{selectedInfo.description}</p>
        </div>
        <div className='container_img_content'>

        <img className='img_content' src={selectedInfo.imageLarge} alt={selectedInfo.title} /> {/* Imagen grande */}
        </div>
        
      </div>

      {/* Botones con imágenes */}
      <div className='container_buttom_option'>
        {infoOptions.map((option, index) => (
          <button className='buttom_option' key={index} onClick={() => handleButtonClick(option)} >
            <img className='img_buttom' src={option.imageSmall} alt={`Opción ${index + 1}`} /> {/* Imagen pequeña */}
          </button>
        ))}
      </div>
    </div>
  );
};
