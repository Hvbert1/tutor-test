import mainPic from "../assets/homePic.jpg";
import "./Contact.css";
import React, { useEffect } from "react";
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
                We understand there are many things to consider as you think
                about working with a tutor. Our experts are always ready to
                answer any questions, provide advice, and get you on the right
                track.
              </p>
              <p>
                Complete the form below, and we’ll be in touch within 1 business
                day.
              </p>
            </div>
            <img src={mainPic} className="aboutPic" alt="Kid studying" />
          </div>
          <ContactForm></ContactForm>
        </div>
      </div>
    </>
  );
}
