// src/components/Contact.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mby3b8e",    
        "template_2720m4s",   
        form.current,
        "inivkTf46d20dCpx-"     
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again! ❌");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
