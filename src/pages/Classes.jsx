import mainPic from "../assets/1.png";
import "./Classes.css";
import ContactForm from "../components/ContactForm";
import React, { useState } from "react";

export default function Classes() {
  const handleClick = () => {
    document
      .getElementById("startForm")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const [flips, setFlips] = useState([false, false, false, false]);

  const handleFlip = (index) => {
    const newFlips = [...flips];
    newFlips[index] = !newFlips[index];
    setFlips(newFlips);
  };

  return (
    <>
      <div className="class">
        <div className="classContainer">
          <div className="classMain">
            <h1>Personalised lessons and clear pricing.</h1>
            <p className="bio">
              Study and Notes offers a variety of tutoring plans and prices so
              you can find the right one for you.
            </p>
            <button className="signButton" onClick={handleClick}>
              Send us a message to get started
            </button>
          </div>
          <img src={mainPic} className="mainPic" alt="Kid studying" />
        </div>
        <div className="serviceContainer">
          <h1>Our Tutoring Services</h1>
          <div className="serviceCards">
            <div
              className={`serviceCard ${flips[0] ? "selective" : ""}`}
              onClick={() => handleFlip(0)}
            >
              {flips[0]
                ? "We cover a variety of topics such as comprehension, grammar, reading and writing to further your child's literary skills, from preschool to Year 12."
                : "K-12 English"}
            </div>
            <div
              className={`serviceCard ${flips[1] ? "selective" : ""}`}
              onClick={() => handleFlip(1)}
            >
              {flips[1]
                ? "We offer a list of mathematical topics, ranging from basic arithmetic to HSC levels. All resources are school focused, ensuring that your child's needs are met. "
                : "K-12 Maths"}
            </div>
            <div
              className={`serviceCard ${flips[2] ? "selective" : ""}`}
              onClick={() => handleFlip(2)}
            >
              {flips[2]
                ? "Our OC classes focus on reading, mathematical reasoning and thinking skills. We prepare through practice papers, time management and exam techniques."
                : "OC Prep"}
            </div>
            <div
              className={`serviceCard ${flips[3] ? "selective" : ""}`}
              onClick={() => handleFlip(3)}
            >
              {flips[3]
                ? "Our expert tutors cover all topics within the Selective (reading, writing, mathematical reasoning and thinking skills). Here we tailor each lesson for your child's learning. "
                : "Selective"}
            </div>
          </div>
        </div>
        <div className="priceContainer">
          <h1>Our Pricing Plans</h1>
          <div className="priceCards">
            <div className="priceCard">
              <div className="priceCardHeader">Group Classes</div>
              <div className="priceCardType">In person only</div>
              <div className="priceCardDesc">
                <ul>
                  <li>Taught by active primary school teacher</li>
                  <li>K-6 group lessons for math & English</li>
                  <li>Over 8 years of tutoring experience</li>
                  <li> Small group size (5 kids per class)</li>
                </ul>
              </div>
              <div className="priceCardRate">$35/hour</div>
              <button onClick={handleClick}>Contact Us</button>
            </div>
            <div className="priceCard">
              <div className="priceCardHeader">Tutors 1:1</div>
              <div className="priceCardType">In person & Online</div>
              <div className="priceCardDesc">
                <ul>
                  <li>University students, school duxes and captains</li>
                  <li>K-12 private lessons for math & English</li>
                  <li>
                    Carefully selected and profesionally trained in the school
                    curriculum
                  </li>
                  <li>Mentors and role models, inspiring excellence</li>
                </ul>
              </div>
              <div className="priceCardRate">$60/hour</div>
              <button onClick={handleClick}>Contact Us</button>
            </div>
            <div className="priceCard">
              <div className="priceCardHeader">Head Tutor 1:1</div>
              <div className="priceCardType">In person & Online</div>
              <div className="priceCardDesc">
                <ul>
                  <li>Experienced and qualified primary school teacher</li>
                  <li>K-12 private lessons for math & English</li>
                  <li>Over 8 years of tutoring experience</li>
                </ul>
              </div>
              <div className="priceCardRate">$64/hour</div>
              <button onClick={handleClick}>Contact Us</button>
            </div>
          </div>
        </div>
        <div id="startForm">
          <ContactForm
            legend="Have questions? Ready to start?"
            introText="Send us a message, and we'll reach out ASAP."
          ></ContactForm>
        </div>
      </div>
    </>
  );
}
