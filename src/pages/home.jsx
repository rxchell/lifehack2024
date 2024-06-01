import React from 'react';
import { useNavigate } from "react-router-dom";
import './style/home.css';
import './style/pages.css';

import Header from '../components/header';
import Chatbot from '../components/chatbot';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <Header />
            <Chatbot />

            <div className="home-content">
                <h1 className="pages-title">Home</h1>
                <p className="home-description">Description</p>

                
            </div>
        </div>
    )

        

}

export default Home;