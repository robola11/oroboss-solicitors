import "./ContactFormStyles.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";



function ContactForm() {

  const form = useRef();

  const showAlert = () => {
    Swal.fire({
      icon:"success",
      title: "Message Sent!",
      text: "We Will Respond ASAP.",
      timer: 4000
    });
    
  } 

  const showError = () => {
    Swal.fire({
      icon: "error",
      title: "Message Not Sent!",
      text: "Please Try Again.",
      timer: 4000
    });
  }

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_em104qa', 'template_ednr4ju', form.current, 'oCCRLuGo7dmvi4rNs')
    .then((result) => {
        console.log(result.text);
          showAlert();

    }, (error) => {
        console.log(error.text);
        showError();
    });
};

  return (
    <div className="form-container">
      <h1>Send Message</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input placeholder="Enter Name" name="user_name" type="text" required />
        <input placeholder="Enter Email" name="user_email" type="email" required />
        <textarea placeholder="Leave a comment here" name="message" rows="4" required></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;
