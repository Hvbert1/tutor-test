import tutorLogo from "../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <a href="/" target="_blank">
          <img src={tutorLogo} className="logo" alt="Tutoring logo" />
        </a>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/classes">Classes</a>
          </li>
          <li>
            <a href="/booking">Booking</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
