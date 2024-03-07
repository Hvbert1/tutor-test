import React, { useEffect } from "react";
import "./Registration.css";

export default function Registration() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9oNUNKVCIsIldlYnNpdGVJRCI6Indic19HV0oyIiwiV2Vic2l0ZUJsb2NrSUQiOiJ3YmJfMmpLSnYifQ==";
    script.async = true;

    // Append the script tag to the specific element with the class name "contactContainer"
    const tutorBirdContainer = document.querySelector(".tutorBirdRegContainer");
    if (tutorBirdContainer) {
      tutorBirdContainer.appendChild(script);
    }

    // Cleanup function to remove script element when component unmounts
    return () => {
      if (tutorBirdContainer && script.parentNode === tutorBirdContainer) {
        tutorBirdContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <div className="registrationContainer">
        <div className="registrationDescription">
          <h1>TutorBird Sign-up</h1>
          <p>
            Use the form below to register. If you have already registered, you
            can login <a href="http://localhost:5173/login">here.</a>
          </p>
        </div>
        <div className="tutorBirdRegContainer"></div>
      </div>
    </>
  );
}
