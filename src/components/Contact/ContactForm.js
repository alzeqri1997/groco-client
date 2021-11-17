import React from 'react';

const ContactForm = () => {
  return (
    <form action="">
      <h3>get in touch</h3>
      <div class="inputBox">
        <input type="text" placeholder="enter your name" class="box" />
        <input type="email" placeholder="enter your email" class="box" />
      </div>
      <div class="inputBox">
        <input type="number" placeholder="enter your number" class="box" />
        <input type="text" placeholder="enter your subject" class="box" />
      </div>
      <textarea placeholder="your message" cols="30" rows="10"></textarea>
      <input type="submit" value="send message" class="btn" />
    </form>
  );
};

export default ContactForm;
