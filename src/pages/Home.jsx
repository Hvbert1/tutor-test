import homePic from "../assets/2.png";
import "./Home.css";
import { Carousel } from "../components/Carousel";

export default function Home() {
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
          <img src={homePic} className="homePic" alt="Kid studying" />
        </div>
        <Carousel></Carousel>
      </div>
    </>
  );
}
