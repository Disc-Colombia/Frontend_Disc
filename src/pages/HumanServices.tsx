import React from "react";
import imgintro from '../imgs/human.webp'
import '../styles/humanServices.css';

export const HumanService: React.FC = () => {

    return (

        <div className="aboutus--headerCEO">
          <div className="container_individual--service">
              
          </div>
          <img className='img--aboutceo' src={imgintro as string} alt={"intro"}></img>
          <div className="texto_service">
            <p className="my_title--black">Human Service & Healthcare Systems Administration</p>
            <p className="my_paragraph--black text--aboutceo " 
            >DISC supports a broad range of healthcare administrative and
            oversight processes. From eligibility and enrollment to controls
            and compliance, our solutions maximize efficiency and
            transparency..</p>
          </div>
         
        </div>
    )
}