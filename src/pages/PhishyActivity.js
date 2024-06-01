import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import './style/phishy.css';

import Header from '../components/header';

Modal.setAppElement('#root'); // Set the root element for screen readers

function PhishyActivity() {
    const navigate = useNavigate();

    const [isOpen0, setIsOpen0] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const openModal0 = () => {
        setIsOpen0(true);
    };
    const closeModal0 = () => {
        setIsOpen0(false);
    };
    const openModal1 = () => {
        setIsOpen1(true);
    };
    const closeModal1 = () => {
        setIsOpen1(false);
    };
    const openModal2 = () => {
        setIsOpen2(true);
    };
    const closeModal2 = () => {
        setIsOpen2(false);
    };

    return (
        <div>
            <Header />

            <div>
                <h1 style={{paddingLeft: 50, paddingTop:15, paddingBottom:15 }}>PhishyActivity</h1>

                <h3 className='header-desc'> In this short interactive activity, read the following email and while doing so, <br></br> click on the buttons to learn more about phishing scams!</h3>
                <img src='https://assets-global.website-files.com/5e5ff4f0165cd367cc7ca88f/6009ee9b3df69940df6be88e_Screen%20Shot%202020-11-24%20at%205.38.49%20PM.png' 
                alt='Phishing email example'
                style={{ width: 600, height: 600, paddingLeft: 80}}/>
                
                <button className='contact-button'
                    onClick={openModal0}> Hmm... did I contact them? </button>

                    <Modal
                        isOpen={isOpen0}
                        onRequestClose={closeModal0}
                        style={{
                            content: {
                                position: 'absolute',
                                width: '50%', // Set the width of the modal
                                height: '50%',
                                backgroundColor: 'gold',
                            }
                        }}
                        contentLabel="Dialog Box"
                    >
                        <div className='dialogheader'>
                            <h2>If you did not send or request for anything from the sender, it could be a phishing email!</h2>
                        </div>
                        
                        <p className='dialogtext'>Most phishing emails are often unsolicited. You didn't ask ask for it; they just sent it to you.
                        <br></br> In this case, if you did not request for Apple Support recently, it is highly likely that this is a phishing email!</p>
                        <button onClick={closeModal0}>Close</button>
                    </Modal>

                <button className='link-button' onClick={openModal1}> Should I click? </button>

                <Modal
                    isOpen={isOpen1}
                    onRequestClose={closeModal1}
                    style={{
                        content: {
                            width: '50%', // Set the width of the modal
                            height: '60%',
                            backgroundColor: 'gold',
                        }
                    }}
                    contentLabel="Dialog Box"
                >
                    <div className='dialogheader'>
                        <h1>Suspicious Links</h1>
                    </div>
                    <p className='dialogtext'>Phishing emails tend to have suspicious links and they will direct you to click on it!
                    <br></br> NEVER ever click on suspicious links from emails that are not trusted.
                    <br></br> <br></br> 
                    In this case scenario, do not click on the link especially since it is an unsolicited email message. Better to be safe than sorry!</p>
                    <button onClick={closeModal1}>Close</button>
                </Modal>

                <button className='legitimate-button' onClick={openModal2}> Looks legitimate? </button>
                
                <Modal
                    isOpen={isOpen2}
                    onRequestClose={closeModal2}
                    style={{
                        content: {
                            width: '50%', // Set the width of the modal
                            height: '70%',
                            backgroundColor: 'gold',
                        }
                    }}
                    contentLabel="Dialog Box"
                >
                    <div className='dialogheader'>
                        <h1>Hmm.. But it looks Legitimate!</h1>
                    </div>
                    <p className='dialogtext'>As the saying goes, Never judge a book by its cover!
                    <br></br> Most phishing emails often seem to be sent from legitimate companies like banks, internet service providers, credit card companies, etc.
                    <br></br> <br></br> 
                    In this case scenario, you might be fooled as Apple is a reputable company and you think they can be trusted as such.
                    But think again! Is the sender really from Apple Care support? Nowadays, most scammers are skilled and can impersonate reputable organisations well.</p>
                    <button onClick={closeModal2}>Close</button>
                </Modal>
            </div>
        </div>
    )

        

}

export default PhishyActivity;