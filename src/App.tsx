// import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      { /*
        * animate after...
          ? page load (when landing animatinos are complete)
          ? scrolling past landing
        * animation
          ? make slide out from top
          ? fade in directionally
      */ }
      <main>
        <Landing />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
