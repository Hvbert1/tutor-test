import mainPic from "../assets/4.png";
import "./About.css";
import React, { useRef, useState } from "react";
import TutorList from "../components/TutorList";
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
          <div className="personalBody">
            <p>
              Founded by a passionate primary school teacher, we offer tutoring
              services for students of all ages, from primary to high school, in
              a dynamic and engaging manner.
            </p>
            <p>
              At the heart of our teaching methodology lies the student-centered
              learning approach. We believe that every child learns differently,
              and by tailoring our lessons to the individual needs and learning
              styles of each student, we foster a deep understanding and a
              genuine love for learning. This approach not only enhances
              academic performance but also nurtures the child's confidence,
              paving the way for remarkable growth in both skills and
              self-esteem.
            </p>
            <p>
              Experience the difference with Study and Notes, where learning is
              not just about grades, but about unlocking the full potential of
              every student.
            </p>
          </div>
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
