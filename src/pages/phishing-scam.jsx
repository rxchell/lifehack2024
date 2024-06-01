import './style/pages.css';
import './style/phishing-scam.css';
import phishingquiz from '../data/phishingquiz.json';
import Header from '../components/header';
import { useState, useEffect } from 'react';

function PhishingScamQuiz() {
    const [counter, setcounter] = useState(0);

    const clickHandler = () => {
        setcounter(prevCounter => prevCounter + 1);
    }

    useEffect(() => {
        if (counter === 6) {
            setTimeout(() => {
                alert('Congrats! You correctly identified the suspicious links!');
            }, 500);
        }
    }, [counter]);

    

    return (
        <div>
            <Header />
            <h1 className='pages-title'>Phishing Scam Quiz</h1>

            <div className='content'>
                <div className='subtitle'>
                    <p className='description'>{phishingquiz.description}</p>
                    <div className='counter-box'>
                        <p className='counter'>{counter}/6</p>
                    </div>
                </div>

                

                <div className='quiz' onClick={clickHandler}>
                    <p className='email-header'>{phishingquiz.header}</p>
                    <div className='email-sender'>
                        <img src={phishingquiz.profile} className='profile' />
                        <div className='space-between'>
                            <div className='row'>
                                <p className='sender'>{phishingquiz.sender}</p>
                                <p className='email'>{phishingquiz.email}</p>
                                
                            </div>
                            <p className='email-date'>{phishingquiz.date}</p>
                        </div>
                    </div>
                    <div className='email-content'>
                        <p>Dear Customer,</p>
                        <p>We have detected unusual activity on your account and need your immediate assistance to verify your information. This verification is mandatory to ensure the security of your account.</p>
                        <p>What you need to do:</p>
                        <ol>
                            <li>Click the link below to log in to your account and verify your information:</li>
                            <p className='link'>Verify Your Account</p>
                            <li>Follow the on-screen instructions to update your account details.</li>
                        </ol>
                        <p>Please note that failure to verify your information within 24 hours will result in a temporary suspension of your account.</p>
                        <p>Your Security is Important to Us:</p>
                        <ul>
                            <li>Never share your password or PIN with anyone.</li>
                            <li>Always log out after completing your banking session.</li>
                        </ul>
                        <p>If you have any questions, please contact our customer support team at support@dbs.com.</p>
                        <p>Thank you for your prompt attention to this matter.</p>
                        <p>Sincerely,</p>
                        <p>DBS Security Team</p>
                        <p>Disclaimer: This is an automated message. Please do not reply to this email.</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default PhishingScamQuiz;