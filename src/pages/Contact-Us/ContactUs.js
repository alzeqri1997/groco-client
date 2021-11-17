import React from 'react';
import ContactInfo from '../../components/Contact/ContactInfo';
import Heading from '../../components/Heading';
import ContactForm from '../../components/Contact/ContactForm';

const ContactUs = () => {
  return (
    <>
      <Heading name="contact" title="Contact Us" />
      <section className="contact">
        <ContactInfo />
        <ContactForm />
      </section>
    </>
  );
};

export default ContactUs;
