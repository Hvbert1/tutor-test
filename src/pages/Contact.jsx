import mainPic from "../assets/homePic.jpg";
import "./Contact.css";
import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      //   "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9oNUNKVCIsIldlYnNpdGVJRCI6Indic19HV0oyIiwiV2Vic2l0ZUJsb2NrSUQiOiJ3YmJfMmpnSk4ifQ==";
      script.async = true;

    // Append the script tag to the specific element with the class name "contactContainer"
    const contactContainer = document.querySelector(".contactContainer");
    if (contactContainer) {
      contactContainer.appendChild(script);
    }

    // Cleanup function to remove script element when component unmounts
    return () => {
      if (contactContainer && script.parentNode === contactContainer) {
        contactContainer.removeChild(script);
      }
    };
  }, []);

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
