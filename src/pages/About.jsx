import mainPic from "../assets/homePic.jpg";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="aboutContainer">
          <div className="aboutMain">
            <h1>Schools and tests have changed, as have we. </h1>
            <p className="aboutIntro">
              We tailor our learning experience for all students, and equip them
              with modern learning tools so they achieve with confidence.
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
          <h1>Meet our tutors</h1>
          <div className="cards">
            <div className="card">
              <img src={mainPic} className="tutorPic" alt="Kid studying" />

              <p className="title">Tutor Name</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="card">
              <img src={mainPic} className="tutorPic" alt="Kid studying" />

              <p className="title">Tutor Name</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="card">
              <img src={mainPic} className="tutorPic" alt="Kid studying" />

              <p className="title">Tutor Name</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="card">
              <img src={mainPic} className="tutorPic" alt="Kid studying" />

              <p className="title">Tutor Name</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
