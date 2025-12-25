import About from "./features/about/About";
import Contacts from "./features/contact/Contacts";
import Footer from "./features/footer/Footer";
import Header from "./features/header/Header";
import Landing from "./features/landing/Landing";
import Projects from "./features/projects/Projects";
import Tech from "./features/tech/Tech";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Landing />
        <About />
        <Projects />
        <Tech />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;

/*
  * Header
    * animate after...
      ? page load (when landing animatinos are complete)
      ? scrolling past landing
    * animation
      ? make slide out from top
      ? fade in directionally
*/
