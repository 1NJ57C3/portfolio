import { NavProvider } from "./contexts/NavContext";
// import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Tech from "./pages/Tech";
import Footer from "./components/Footer";
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