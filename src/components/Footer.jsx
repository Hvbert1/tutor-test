import tutorLogo from "../assets/logo.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerCard">
          <h2>Location</h2>
          <p>26 Carmel Pl, Winston Hills</p>
        </div>
        <div className="footerCard">
          <h2>Find us online</h2>
          <div className="icons">
            <i class="devicon-facebook-plain"></i>
            <i class="devicon-linkedin-plain"></i>
            <i class="devicon-twitter-original"></i>
          </div>
        </div>
        <div className="footerCard">
          <h2>About SR Tutoring</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum nisi quis eleifend quam adipiscing vitae.
          </p>
        </div>
      </div>
    </>
  );
}
