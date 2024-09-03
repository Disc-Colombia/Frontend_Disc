import * as React from "react";
import "../styles/services.css"
import FlipCard from ".//RotationBox"
import serviciosHumanos from "../imgs/servicios_humanos.png"
import consultoriaIT  from "../imgs/consultoria_IT.png"
import seguridadciber from "../imgs/seguridad_cibernetica.png"
import soluciones from "../imgs/soluciones_financieras.png"
import serviciocliente from "../imgs/servicio_al_cliente.png"

export const Services = () => {
  return (
    <div id='services'>
    <div className='background-services'>
      <div className="solutions-section">
        <h2 className="solutions-title">ADAPTABLE AND<span className='solutions-title--span'> EXPERT SOLUTIONS</span></h2>
        <p className="solutions-description">
          Discover our flexible technological solutions, designed to adapt to the unique needs of your organization and meet the highest standards of excellence.
        </p>
        <div className="solutions-grid">
          <div className="solution-item">
            <h3 className='title-items-services'>Flexibility</h3>
            <h4 className='title-items-services'>Tailored to Your Needs</h4>
            <p>Flexible solutions that adapt to the specific requirements of each organization, regardless of its size or industry.</p>
          </div>
          <div className="solution-item">
            <h3 className='title-items-services'>Proven Excellence</h3>
            <h4 className='title-items-services'>in Governments and Corporations</h4>
            <p>Our practices are based on successful models, implemented in both the public and private sectors.</p>
          </div>
          <div className="solution-item">
            <h3 className='title-items-services'>Compliance</h3>
            <h4 className='title-items-services'>Guaranteed by Experts</h4>
            <p>Our practices are based on successful models, implemented in both the public and private sectors.</p>
          </div>
          <div className="solution-item">
            <h3 className='title-items-services'>Solutions</h3>
            <h4 className='title-items-services'>Tailored to Your Requirements</h4>
            <p>We offer solutions that align with technical and financial demands according to industry standards.</p>
          </div>
        </div>
      </div>
    </div>

    <div className='flipcards'>
     
      <div className='flipcards-services'>
      <FlipCard 
       image={serviciosHumanos}
       tittle='Human Services and Health Services Administration'
      >
            <ul className='list-services'>
              <li>Eligibility and Third-Party Liability.</li>
              <li>Fraud and abuse Control.</li>
              <li>Patient account Systems.</li>
              <li>Medicaid claims Processing</li>
            </ul>
      </FlipCard>
      <FlipCard
        image={consultoriaIT}
        tittle="IT Consulting"
      >
        <ul className='list-services'>
          <li>Application Development </li>
          <li>Customer Relationship Management (CRM)</li>
          <li>Customer service and help desk</li>
          <li>Data Storage</li>
          <li>Enterprise Resource Planning (ERP)</li>
          <li>System Integrations</li>
        </ul>
      </FlipCard>
      <FlipCard
        image={seguridadciber}
        tittle="Cybersecurity"
      >
        <ul className='list-services'>
          <li>IP Resolutions and domain Location of a website</li>
          <li>Cloud Security</li>
          <li>Incident time, browser type, and behavior triggering malicious activity</li>
          <li>Secure 3D Authentication</li>

        </ul>
      </FlipCard>
      </div>

      <div className='flidcards-container'>
      <FlipCard
        image={soluciones}
        tittle="Financial Solutions"
      >
        <ul className='list-services'>
          <li>Electronic Cost Reporting.</li>
          <li>Forensic Audits</li>
          <li>Internal Controls</li>
          <li>Pricing Methodologies</li>
          <li>Risk Management</li>
        </ul>

      </FlipCard>
      <FlipCard
        image={serviciocliente}
        tittle="Customer Service"
      >
        <ul className='list-services'>
          <li>Customer Relationship Management (CRM)</li>
          <li>Customer Service and Help Desk</li>

        </ul>
      </FlipCard>
      </div>

    </div>

  </div>
  )
}
