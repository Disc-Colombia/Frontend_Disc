import React from 'react'
import "../style/services.css"
import FlipCard from "../component/RotationBox"
import serviciosHumanos from "../img/servicios_humanos.png"
import consultoriaIT  from "../img/consultoria_IT.png"
import seguridadciber from "../img/seguridad_cibernetica.png"
import soluciones from "../img/soluciones_financieras.png"
import serviciocliente from "../img/servicio_al_cliente.png"

export const Services = () => {
  return (
    <div id='services'>
    <div className='background-services'>
      <div className="solutions-section">
        <h2 className="solutions-title">SOLUCIONES <span className='solutions-title--span'>ADAPTABLES Y EXPERTAS</span></h2>
        <p className="solutions-description">
          Descubre nuestras soluciones tecnológicas flexibles, diseñadas para adaptarse a las necesidades únicas de tu organización y cumplir con los más altos estándares de excelencia.
        </p>
        <div className="solutions-grid">
          <div className="solution-item">
            <h3 className='title-items-services'>Flexibilidad</h3>
            <h4 className='title-items-services'>Adaptada a tus necesidades</h4>
            <p>Soluciones flexibles que se ajustan a los requerimientos específicos de cada organización, sin importar su tamaño o sector.</p>
          </div>
          <div className="solution-item">
            <h3 className='title-items-services'>Excelencia</h3>
            <h4 className='title-items-services'>Probada en gobiernos y corporaciones</h4>
            <p>Nuestras prácticas están basadas en modelos de éxito, implementadas tanto en el sector público como en el privado.</p>
          </div>
          <div className="solution-item">
            <h3 className='title-items-services'>Cumplimiento</h3>
            <h4 className='title-items-services'>Garantizado por expertos</h4>
            <p>Nuestros especialistas en tecnología aseguran que tus operaciones cumplan con todas las normativas y regulaciones vigentes.</p>
          </div>
          <div className="solution-item">
            <h3 className='title-items-services'>Soluciones</h3>
            <h4 className='title-items-services'>Ajustadas a tus requisitos</h4>
            <p>Ofrecemos soluciones que se alinean con las demandas técnicas y financieras de acuerdo a los estándares de la industria.</p>
          </div>
        </div>
      </div>
    </div>

    <div className='flipcards'>
     
      <div className='flipcards-services'>
      <FlipCard 
       image={serviciosHumanos}
       tittle='Servicios Humanos y Administración de Servicios de Salud'
      >
            <ul className='list-services'>
              <li>Servicios Humanos y Administración de Servicios de Salud</li>
              <li>Elegibilidad y responsabilidad de terceros</li>
              <li>Control de fraude y abuso</li>
              <li>Procesamiento de reclamos de Medicaid</li>
              <li>Sistemas de cuentas de pacientes</li>
            </ul>    
      </FlipCard>
      <FlipCard
        image={consultoriaIT}
        tittle="Consultoria IT"
      >
        <ul className='list-services'>
          <li>Desarrollo de aplicaciones </li>
          <li>Gestión de la relación con el cliente (CRM)</li>
          <li>Servicio al Cliente y Mesa de Ayuda</li>
          <li>Almacenamiento de datos</li>
          <li>Planificación de recursos empresariales (ERP)</li>
          <li>Integraciones de sistemas</li>
        </ul>
      </FlipCard>
      <FlipCard
        image={seguridadciber}
        tittle="Seguridad CIbernética"
      >
        <ul className='list-services'>
          <li>Resoluciones de IP y ubicación del dominio de un sitio web</li>
          <li>Seguridad en la nube</li>
          <li>La hora del incidente, el tipo de navegador y el comportamiento que desencadenó la actividad maliciosa</li>
          <li>Autenticación segura 3D</li>

        </ul>
      </FlipCard>
      </div>

      <div className='flidcards-container'>
      <FlipCard
        image={soluciones}
        tittle="Soluciones Financieras"
      >
        <ul className='list-services'>
          <li>Reportes electrónicos de costos.</li>
          <li>Auditorias forense.</li>
          <li>Controles internos</li>
          <li>Metodologías para establecer precios</li>
          <li>Administración de riesgos.</li>
        </ul>

      </FlipCard>
      <FlipCard
        image={serviciocliente}
        tittle="Servicio al cliente"
      >
        <ul className='list-services'>
          <li>Gestión de la relación con el cliente (CRM).</li>
          <li>Servicio al Cliente y Mesa de Ayuda.</li>

        </ul>
      </FlipCard>
      </div>

    </div>

  </div>
  )
}
