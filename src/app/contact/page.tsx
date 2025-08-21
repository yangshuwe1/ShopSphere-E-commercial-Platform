import React from 'react';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import CompanyInfo from './components/CompanyInfo';
import CompanyMap from './components/CompanyMap';

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <CompanyInfo />
      <CompanyMap />
    </div>
  );
};

export default Contact;