import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p className="contact-description">
        We would love to hear from you! Whether it's a question about our services or feedback, feel free to reach out to us.
      </p>

      <div className="contact-info">
        <div className="contact-info-item">
          <h3>Address:</h3>
          <p>123 Auto Service Lane, Accra, Ghana</p>
        </div>

        <div className="contact-info-item">
          <h3>Phone:</h3>
          <p>+233 123 456 789</p>
        </div>

        <div className="contact-info-item">
          <h3>Email:</h3>
          <p>support@autoservice.com</p>
        </div>
      </div>

      <div className="contact-form-container">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
