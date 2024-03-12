import tutorLogo from "../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="navContainer">
        <div className="navContent">
          <a href="/home">
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
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
