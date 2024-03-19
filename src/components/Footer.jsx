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
              <a
                href="https://www.facebook.com/profile.php?id=61557405272092"
                target="_blank"
              >
                <ion-icon name="logo-facebook" aria-label="facebook"></ion-icon>
              </a>
              <a href="https://instagram.com/studyandnotes26" target="_blank">
                <ion-icon
                  name="logo-instagram"
                  aria-label="instagram"
                ></ion-icon>
              </a>
            </div>
          </div>
          <div className="footerCard">
            <h2>About SAN Tutoring</h2>
            <p>
              Study and Notes (SAN) is a tutoring service founded by a primary
              school teacher, with the goal of fostering success for every
              child, not just within the classroom but in every aspect of their
              lives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
