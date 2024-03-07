import mainPic from "../assets/homePic.jpg";
import "./Home.css";

export default function Home() {
  console.log(window.location);
  return (
    <>
      <div className="home">
        <div className="homeContainer">
          <div className="homeMain">
            <h1>Academics & confidence, boosted.</h1>
            <p className="bio">
              "Based in Winston Hills, piano and tutoring classes are offered to
              students K-12 in the home studio or online. If your little ones
              are looking for a fun way to engage in school and gain musical and
              academic skills."
            </p>
            <button
              className="signButton"
              onClick={() =>
                (window.location = "http://localhost:5173/contact")
              } //FIX UP window location before hosting
            >
              Send us a message to get started
            </button>
          </div>
          <img src={mainPic} className="mainPic" alt="Kid studying" />
        </div>
        <div className="testimony">
          <h1>From our families...</h1>
          <p>
            "My tutor, Sanchea, seemed to have a lesson for any obscure concept
            that I needed help with, from the big picture to the smallest
            detail. She also gave me a number of test-taking strategies,
            including the exact timing I needed to achieve on a test given my
            previous history."
          </p>
        </div>
      </div>
    </>
  );
}
