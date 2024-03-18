import React, { useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9oNUNKVCIsIldlYnNpdGVJRCI6Indic19HV0oyIiwiV2Vic2l0ZUJsb2NrSUQiOiJ3YmJfMmp4SkQifQ==";
    script.async = true;

    // Append the script tag to the specific element with the class name "contactContainer"
    const tutorBirdContainer = document.querySelector(".tutorBirdContainer");
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
      <div className="loginContainer">
        <div className="loginDescription">
          <h1>TutorBird Login</h1>
          <p>
            Log into your child's Student Portal via TutorBird below. If you
            haven't registered yet, you can do so{" "}
            <Link to={"/registration"}>here. </Link>
          </p>
        </div>
        <div className="tutorBirdContainer"></div>
      </div>
    </>
  );
}
