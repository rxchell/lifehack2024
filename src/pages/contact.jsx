// contact.jsx

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';
import DetailsBar from '../components/details';
import ContactForm from '../components/contactForm';
import './style/contact.css';

function Contact() {
  return (
    <div>
      <Header />
      <div className="page-wrapper">
        <div className="page-heading-wrapper">
          <b className="text-one">Contact Us</b>
        </div>
        <div className="form-container">
          <div className="page-wrapper">
            <DetailsBar />
            <ContactForm />
          </div>
        </div>
      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default Contact;
