import homePic from "../assets/2.png";
import "./Home.css";
import { Carousel } from "../components/Carousel";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="homeContainer">
          <div className="homeMain">
            <h1>Academics & confidence, boosted.</h1>
            <p className="bio">
              “Based in Winston Hills, tuition classes are offered to K-12
              students at our studio or online. With individual lesson plans and
              a focus on confidence, Study and Notes provides excellent service,
              as seen through our fantastic tutors and amazing parent reviews!”
            </p>
            <Link to={"/contact"} className="signButton">
              Send us a message to get started
            </Link>
          </div>
          <img src={homePic} className="homePic" alt="Kid studying" />
        </div>
        <Carousel></Carousel>
      </div>
    </>
  );
}
