import { NavProvider } from "./shared/contexts/navContext";
// import Header from "./features/header/Header";
import Landing from "./features/landing/Landing";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import Tech from "./features/tech/Tech";
import Footer from "./features/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavProvider>
        {/* <Header /> */}
        <main>
          <Landing />
          <About />
          <Projects />
          <Tech />
        </main>
        <Footer />
      </NavProvider>
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
