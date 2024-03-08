import mainPic from "../assets/homePic.jpg";
import tutor1 from "../assets/tutors/1.png";
import tutor2 from "../assets/tutors/2.png";
import tutor3 from "../assets/tutors/3.png";
import tutor4 from "../assets/tutors/4.png";
import tutor5 from "../assets/tutors/5.png";
import tutor6 from "../assets/tutors/6.png";
import tutor7 from "../assets/tutors/7.png";
import "./About.css";
import React from "react";
import TutorList from "../components/TutorList";

export default function About() {
  const tutors = [
    {
      id: 1,
      name: "Sanchea Rodrigues",
      pictureUrl: tutor1,
      description: "Founder + Primary School Teacher",
    },
    {
      id: 2,
      name: "Ananya",
      pictureUrl: tutor2,
      description: "Math and English tutor",
    },
    {
      id: 3,
      name: "Andrea",
      pictureUrl: tutor3,
      description: "Math and English tutor",
    },
    {
      id: 4,
      name: "Sai",
      pictureUrl: tutor4,
      description: "Math and English tutor",
    },
    {
      id: 5,
      name: "Venkat",
      pictureUrl: tutor5,
      description: "Math and English tutor",
    },
    {
      id: 6,
      name: "Vy",
      pictureUrl: tutor6,
      description: "Math, English and Piano tutor",
    },
    {
      id: 7,
      name: "Yen",
      pictureUrl: tutor7,
      description: "Math and English tutor",
    },
  ];

  return (
    <>
      <div className="about">
        <div className="aboutContainer">
          <div className="aboutMain">
            <h1>
              Schools and tests have changed, <br />
              as have we.{" "}
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
          <TutorList tutors={tutors} />
        </div>
      </div>
    </>
  );
}
