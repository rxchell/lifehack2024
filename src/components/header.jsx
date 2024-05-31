import React from 'react';
import { useNavigate } from "react-router-dom";
import { GiEyeShield } from "react-icons/gi";
import './style/header.css';

function Header() {
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="header-title" onClick={() => navigate('/')}>
                <div className='logo'><GiEyeShield color='white' size={'40px'}/></div>
                <h1 className="title">ScamSense</h1>
            </div>
            
            <div className="header-buttons">
                <button className='button' onClick={() => navigate('/resources')}>Resources</button>
                <button className='button' onClick={() => navigate('/quizpage')}>Quiz</button>
            </div>
        </div>
    )
}

export default Header;
