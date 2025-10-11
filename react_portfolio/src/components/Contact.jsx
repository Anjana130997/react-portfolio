import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        form.current, 
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('❌ Failed to send message. Please try again later.');
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="contact container reveal">
      <div className="section-title">
        <h2>Get In Touch</h2>
        <div className="section-divider"></div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form reveal">
        <div className="input-group">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
        </div>
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </section>
  );
}
