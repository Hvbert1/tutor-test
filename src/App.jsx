// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/home":
    case "/":
      Component = Home;
      break;
    case "/about":
      Component = About;
      break;
    case "/contact":
      Component = Contact;
      break;
    case "/login":
      Component = Login;
      break;
  }

  return (
    <>
      <Navbar></Navbar>
      <Component></Component>
      <Footer></Footer>
    </>
  );
}

export default App;
