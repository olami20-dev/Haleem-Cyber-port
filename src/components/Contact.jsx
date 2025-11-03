import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Fade direction="up" triggerOnce>
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a project idea or want to collaborate? Let’s connect and build something amazing together!
        </p>
      </Fade>

      <div className="contact-container">
        {/* Contact Form */}
        <Zoom triggerOnce>
          <form
            className="contact-form"
            action="https://formspree.io/f/mldokwzj"
            method="POST"
          >
            <div className="input-group">
              <input type="text" name="name" required />
              <label>Your Name</label>
            </div>

            <div className="input-group">
              <input type="email" name="email" required />
              <label>Your Email</label>
            </div>

            <div className="input-group">
              <textarea name="message" required></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </Zoom>

        {/* Contact Info */}
        <Fade direction="right" triggerOnce>
          <div className="contact-info">
            <h3>Connect With Me</h3>
            <p>
              <i className="fas fa-envelope"></i> haleemoladejo@gmail.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> Ibadan, Nigeria
            </p>

           
          </div>
        </Fade>
      </div>
    </section>
  );
}
