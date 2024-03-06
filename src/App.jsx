import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  let Component;
  const [count, setCount] = useState(0);
  switch (window.location.pathname) {
    case "/home":
    case "/":
      Component = Home;
      break;
    case "/about":
      Component = About;
      break;
    case "/pricing":
      Component = Pricing;
      break;
  }

  return (
    <>
      <Navbar></Navbar>
      <Component></Component>
      <Footer></Footer>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR Peanut butter jelly
          sandwich!
        </p>
      </div> */}
    </>
  );
}

export default App;
