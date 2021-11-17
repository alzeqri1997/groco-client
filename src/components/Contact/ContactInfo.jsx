import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
  return (
    <div class="icons-container">

      <div class="icons">
        <FontAwesomeIcon icon={faPhone} />
        <h3>our number</h3>
        <p>+123-456-7890</p>
        <p>+111-222-3333</p>
      </div>

      <div class="icons">
        <FontAwesomeIcon icon={faEnvelope} />
        <h3>our email</h3>
        <p>name@example.com</p>
      </div>

      <div class="icons">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <h3>our address</h3>
        <p>United Status, Los Angeles</p>
      </div>
    </div>
  )
}

export default ContactInfo
