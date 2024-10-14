import React from "react";
import imgintro from '../imgs/human.webp'
import '../styles/humanServices.css';
import Paper from '@mui/material/Paper';
import {ContactPage, Grading, Policy, RecentActors} from '@mui/icons-material';
import { UseScrollAnimation } from "../components/UseScrollAnimation";

export const HumanService: React.FC = () => {

  React.useEffect(() => {
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const style_icon = {  fontSize: 50, color: "var(--LogoBackground)", margin: '20px' };

  UseScrollAnimation()

  return (

        <div className="aboutus--headerservice">
          <div className="container--headerservice">
          <div className="container_individual--service">
            <img className='img--humanservice' src={imgintro as string} alt={"intro"}></img>
            <div className="container_text--humanservice">
              <p className="my_title--black">HUMAN SERVICE & HEALTHCARE SYSTEMS <span className="title--span">ADMINISTRATION</span></p>
              <p className="my_paragraph--black text--humanservice " 
              >DISC supports a broad range of healthcare administrative and
              oversight processes. From eligibility and enrollment to controls
              and compliance, our solutions maximize efficiency and
              transparency.</p>
            </div>
          </div>
          </div>
          <div className="container_cards--humanservice">
            <p className="my_title--black title--service my_animation" style={{width:'100%', textAlign:'center'}}><span className="title--span">KEY</span> SERVICES</p>
            <Paper className="cards--service my_animation">
            <div style={{ display: 'flex', justifyContent: 'center' }}> 
            <ContactPage style={style_icon} />
            </div>
            <p className="my_title--black cards--title">Eligibility and Third-Party Liability
            
            </p>
            
            {/* <p className="my_paragraph--black ">Our solutions ensure accurate determination of benefits while minimizing the risk of errors and discrepancies.</p> */}
            </Paper>

            <Paper className="cards--service my_animation">
            <div style={{ display: 'flex', justifyContent: 'center' }}> 
            <Policy style={style_icon} />
            </div>
            <p className="my_title--black cards--title">Fraud and Abuse Control</p>
            
            {/* <p className="my_paragraph--black ">DISC employs state-of-the-art technology and data analytics to detect and prevent fraudulent activities in healthcare services.</p> */}
            </Paper>
            <Paper className="cards--service my_animation">
            <div style={{ display: 'flex', justifyContent: 'center' }}> 
            <RecentActors style={style_icon} />
            </div>
            <p className="my_title--black cards--title">Patient Account Systems</p>
            
            {/* <p className="my_paragraph--black">Our systems simplify the management of patient information, providing secure access to account details and automating processes to enhance user experience.</p> */}
            </Paper>
            <Paper className="cards--service my_animation">
            <div style={{ display: 'flex', justifyContent: 'center' }}> 
            <Grading style={style_icon} />
            </div>
            <p className="my_title--black cards--title">Medicaid Claims Processing</p>
            {/* <p className="my_paragraph--black ">DISC specializes in automating claims processing to ensure accuracy, speed, and compliance with governmental regulations.</p> */}
            </Paper>
          </div>
        </div>
  )
}