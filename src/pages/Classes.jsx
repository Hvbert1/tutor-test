import mainPic from "../assets/1.png";
import "./Classes.css";
import ContactForm from "../components/ContactForm";

export default function Classes() {
  const handleClick = () => {
    document
      .getElementById("startForm")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <div className="class">
        <div className="classContainer">
          <div className="classMain">
            <h1>Personalised lessons and clear pricing.</h1>
            <p className="bio">
              Study and Notes tutoring offers a variety of tutoring plans and
              prices so you can find the right on for you.
            </p>
            <button className="signButton" onClick={handleClick}>
              Send us a message to get started
            </button>
          </div>
          <img src={mainPic} className="mainPic" alt="Kid studying" />
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
                  <li>Over 5 years of tutoring experience</li>
                  <li>Max 5 kids per class</li>
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
                  <li>Carefully selected and profesionally trained</li>
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
                  <li>Over 5 years of tutoring experience</li>
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
