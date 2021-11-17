import React from 'react';

const ContactForm = () => {
  return (
    <form action="">
      <h3>get in touch</h3>
      <div className="inputBox">
        <input type="text" placeholder="enter your name" className="box" />
        <input type="email" placeholder="enter your email" className="box" />
      </div>
      <div className="inputBox">
        <input type="number" placeholder="enter your number" className="box" />
        <input type="text" placeholder="enter your subject" className="box" />
      </div>
      <textarea placeholder="your message" cols="30" rows="10"></textarea>
      <input type="submit" value="send message" className="btn" />
    </form>
  );
};

export default ContactForm;
