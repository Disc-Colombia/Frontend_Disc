import React from "react";
import '../styles/allservices.css'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import AdUnitsOutlinedIcon from '@mui/icons-material/AdUnitsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';

export const AllServices: React.FC =() =>{


    const cards = [
        { id: 1, icon: <SettingsSuggestOutlinedIcon style={{ fontSize: 40 }} />, title: 'Software Development & Maintenance' },
        { id: 2, icon: <BackupTableOutlinedIcon style={{fontSize:40}}/>, title: 'Data Migration & Systems Integration'},
        { id: 3, icon: <AdUnitsOutlinedIcon style={{fontSize:40}}/>, title: 'Mobile & Web App Developmen' },
        { id: 4, icon: <PsychologyOutlinedIcon style={{fontSize:40}}/>, title: 'Artificial Intelligence & Machine Learning' },
        { id: 5, icon: <TipsAndUpdatesOutlinedIcon style={{fontSize:40}}/>, title: 'Innovation Management' },
        { id: 6, icon: <GroupsOutlinedIcon style={{fontSize:40}}/>, title: 'Temporary Staffing Services' },
        { id: 7, icon: <VerifiedUserOutlinedIcon style={{ fontSize: 40 }}/>, title: 'CyberSecurity Consulting' },
        { id: 8, icon: <CloudOutlinedIcon style={{ fontSize: 40 }}/>, title: 'Cloud Computing Consulting and Support' },
        { id: 9, icon: <AccountTreeOutlinedIcon style={{ fontSize: 40 }} />, title: 'Database Management & Warehousing' },
        { id: 10, icon: <ComputerOutlinedIcon style={{ fontSize: 40 }} />, title: 'Computers & Peripherals Wholesale' },
        { id: 11, icon: <SettingsOutlinedIcon style={{ fontSize: 40 }} />, title: 'General Services' },
      ];

    return(<>

    <div className="container-allservices">

        <h1 className="initial-tittle"> WHAT WE<span className='solutions-title--span'> DO</span></h1>
        <div className="container-cards-services">

        
            <div className="card-grid">
                {cards.map(card => (
                    <div key={card.id} className="card">
                    <div className="card-icon">{card.icon}</div>
                    <div className="card-title">{card.title}</div>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
        
    </>)
}