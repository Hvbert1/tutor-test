import mainPic from "../assets/homePic.jpg";
import "./About.css";
import React, { useRef, useState } from "react";
import TutorList from "../components/TutorList";
// import Modal from "../components/Modal";
import tutors from "../components/tutorData";

export default function About() {
  const [dialogContent, setDialogContent] = useState(null);
  const dialogRef = useRef(null);

  const toggleDialog = () => {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  };

  const handleTutorClick = (tutor) => {
    // setDialogContent(<Modal tutor={tutor} />);
    setDialogContent(
      <div>
        <button onClick={toggleDialog}>✖</button>
        <h2>{tutor.name}</h2>
        <h4>{tutor.title}</h4>
        <p>{tutor.description}</p>
      </div>
    );
    toggleDialog();
  };

  return (
    <>
      <div className="about">
        <div className="aboutContainer">
          <div className="aboutMain">
            <h1>
              Schools and tests have changed, <br />
              as have we.
            </h1>
            <p className="aboutIntro">
              We tailor our learning experience for all students, and equip them
              with modern learning tools so they can achieve with confidence.
            </p>
          </div>
          <img src={mainPic} className="aboutPic" alt="Kid studying" />
        </div>
        <div className="personalContainer">
          <h1>Our philosophy</h1>
          <p className="personalBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
            ac tincidunt vitae semper. Tincidunt tortor aliquam nulla facilisi
            cras fermentum odio eu. Mi tempus imperdiet nulla malesuada
            pellentesque. Leo vel orci porta non. Ac orci phasellus egestas
            tellus rutrum tellus pellentesque eu tincidunt. Dolor sit amet
            consectetur adipiscing elit duis tristique. Erat imperdiet sed
            euismod nisi porta.
          </p>
        </div>
        <div className="teamContainer">
          <h1>Our Tutors</h1>
          <TutorList tutors={tutors} onTutorClick={handleTutorClick} />
        </div>
        <dialog
          ref={dialogRef}
          onClick={(e) => {
            if (e.currentTarget === e.target) {
              toggleDialog();
            }
          }}
        >
          {dialogContent}
        </dialog>
      </div>
    </>
  );
}
