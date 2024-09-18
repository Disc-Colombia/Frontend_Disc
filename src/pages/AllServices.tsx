import React, {useEffect} from "react";
import '../styles/allservices.css'
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
    ComputerOutlined as ComputerOutlinedIcon
} from '@mui/icons-material';

import serviciosHumanos from "../imgs/servicios_humanos.png"
import consultoriaIT  from "../imgs/consultoria_IT.png"
import seguridadciber from "../imgs/seguridad_cibernetica.png"
import soluciones from "../imgs/soluciones_financieras.png"
import serviciocliente from "../imgs/servicio_al_cliente.png"

export const AllServices: React.FC =() =>{

    useEffect(() => {
        // Scroll instantáneo al inicio
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);
    const iconStyle = { fontSize: 40, color:'#52b39d'};

    const cards = [
        { id: 1, icon: <SettingsSuggestOutlinedIcon style={iconStyle} />, title: 'Software Development & Maintenance' },
        { id: 2, icon: <BackupTableOutlinedIcon style={iconStyle} />, title: 'Data Migration & Systems Integration' },
        { id: 3, icon: <AdUnitsOutlinedIcon style={iconStyle} />, title: 'Mobile & Web App Development' },
        { id: 4, icon: <PsychologyOutlinedIcon style={iconStyle} />, title: 'Artificial Intelligence & Machine Learning' },
        { id: 5, icon: <TipsAndUpdatesOutlinedIcon style={iconStyle} />, title: 'Innovation Management' },
        { id: 6, icon: <GroupsOutlinedIcon style={iconStyle} />, title: 'Temporary Staffing Services' },
        { id: 7, icon: <VerifiedUserOutlinedIcon style={iconStyle} />, title: 'CyberSecurity Consulting' },
        { id: 8, icon: <CloudOutlinedIcon style={iconStyle} />, title: 'Cloud Computing Consulting and Support' },
        { id: 9, icon: <AccountTreeOutlinedIcon style={iconStyle} />, title: 'Database Management & Warehousing' },
        { id: 10, icon: <ComputerOutlinedIcon style={iconStyle} />, title: 'Computers & Peripherals Wholesale' },
        { id: 11, icon: <SettingsOutlinedIcon style={iconStyle} />, title: 'General Services' },
    ];

    return (

        <div className="container-allservices">
            <div className="container-text--allservices" >
                <h1 className="initial-tittle">
                    WHAT WE <span className="solutions-title--span">DO</span>
                </h1>
                <p className="initial_paragraph-services">
                    DISC is the trusted source for government agencies, non-profits, for-profits and Fortune 500 companies to gain best in class solutions in Information Technology and Innovation Management Solutions.
                    We use best practices, and every project we undertake is based on close collaboration with our clients, ensuring that each solution is perfectly aligned with their specific goals and challenges.
                </p>
                <div className="container-cards-services">
                    <div className="card-grid-allservices">
                        {cards.map(card => (
                            <div key={card.id} className="card-allservices">
                                <div className="card-icon-services">{card.icon}</div>
                                <div className="card-title-services">{card.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container_items--allservices">
                <div className="image-grid--allservices">
                    <div className="image-item">
                        <img src={serviciosHumanos as string} alt="Human service" />
                        <h2 className="tittle_all--items">Human Service & Healthcare Systems Administration</h2>

                        <p className="paragraph_all--items">DISC supports a broad range of healthcare administrative and oversight processes. From eligibility and enrollment to controls and compliance, our solutions maximize efficiency and transparency.
                            <ul className='list-services'>
                                <li>Eligibility and Third-Party Liability.</li>
                                <li>Fraud and abuse Control.</li>
                                <li>Patient account Systems.</li>
                                <li>Medicaid claims Processing</li>
                            </ul>
                        </p>
                    </div>
                    <div className="image-item">
                        <img src={consultoriaIT as string} alt="consultoria IT" />
                        <h2 className="tittle_all--items">IT Consulting</h2>
                        <p className="paragraph_all--items">IT resources can be scarce. DISC provides a full range of expertise to help your company function fluidly. Our team of experts can provide everything from staff augmentation to customized development.</p>
                        <ul className='list-services'>
                            <li>Application Development </li>
                            <li>Customer Relationship Management (CRM)</li>
                            <li>Customer service and help desk</li>
                            <li>Data Storage</li>
                            <li>Enterprise Resource Planning (ERP)</li>
                            <li>System Integrations</li>
                        </ul>
                    </div>
                    <div className="image-item">
                        <img src={seguridadciber as string} alt="Cybersecurity" />
                        <h2 className="tittle_all--items">Cybersecurity</h2>
                        <p className="paragraph_all--items">DISC provides the most comprehensive data coverage of any major platform for monitoring and detecting threats across digital channels (i.e. web, mobile, virtualization security, AI Automation, security assessments, etc.) and provides real-time intelligence such as:</p>
                        <ul className='list-services'>
                            <li>IP Resolutions and domain Location of a website</li>
                            <li>Cloud Security</li>
                            <li>Incident time, browser type, and behavior triggering malicious activity</li>
                            <li>Secure 3D Authentication</li>
                        </ul>
                    </div>
                </div>
                <div className="image-gridsec--allservices">
                    <div className="image-item">
                        <img src={soluciones as string} alt="Finance Solutions" />
                        <h2 className="tittle_all--items">Finance Solutions</h2>
                        <p className="paragraph_all--items">DISC is the premier provider for outsourced accounting support and consulting for billing, reporting, and revenue management.</p>
                        <ul className='list-services'>
                            <li>Electronic Cost Reporting.</li>
                            <li>Forensic Audits</li>
                            <li>Internal Controls</li>
                            <li>Pricing Methodologies</li>
                            <li>Risk Management</li>
                        </ul>
                    </div>
                    <div className="image-item">
                        <img src={serviciocliente as string} alt="Customer Service" />
                        <h2 className="tittle_all--items">Customer Service</h2>
                        <p className="paragraph_all--items">From call center support to help desk operators, DISC ensures that every client interaction reflects a positive,personable, and professional impression.</p>
                        <ul className='list-services'>
                            <li>Customer Relationship Management (CRM)</li>
                            <li>Customer Service and Help Desk</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};