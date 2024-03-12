export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="footerContent">
          <div className="footerCard">
            <h2>Location</h2>
            <p>Winston Hills NSW 2153</p>
          </div>
          <div className="footerCard">
            <h2>Find us online</h2>
            <div className="icons">
              <ion-icon name="logo-facebook" aria-label="facebook"></ion-icon>
              <ion-icon name="logo-instagram" aria-label="instagram"></ion-icon>
            </div>
          </div>
          <div className="footerCard">
            <h2>About SAN Tutoring</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum nisi quis eleifend quam adipiscing vitae.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
