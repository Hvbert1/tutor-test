import contactPic from "../assets/3.png";
import "./Contact.css";
import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contactContainer">
          <div className="contactMain">
            <div className="contactMainText">
              <h1>
                Have a question? <br /> We can help.
              </h1>
              <p className="contactText">
                As a teacher, I understand that finding the perfect tutor for
                your child is quite the challenge. But don't worry! We are here
                to answer any questions, offer advice, and guide you towards
                finding the right fit.
              </p>
              <p>
                Complete the form below, and we’ll be in touch as soon as
                possible.
              </p>
            </div>
            <img src={contactPic} className="contactPic" alt="Kid studying" />
          </div>
          <ContactForm
            legend="Contact Us"
            introText="Fill up the form below to send us a message."
          ></ContactForm>
        </div>
      </div>
    </>
  );
}
