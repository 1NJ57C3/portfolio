import { useNavContext } from "../../shared/contexts/NavContext";
import TechCard from "./TechCard";
import technologies from "./tech.json";
import "./Tech.css";

function Tech() {
  const { navRefs } = useNavContext();
  const imgWidth = "80";

  const languages = technologies.map((technology, i) => {
    if (technology.category.includes("language")) {
      return <TechCard {...technology} key={"lang" + i} imgWidth={imgWidth} />;
    }
  });
  const tech = technologies.map((technology, i) => {
    if (
      technology.category.includes("library") ||
      technology.category.includes("framework")
    ) {
      return <TechCard {...technology} key={"tech" + i} imgWidth={imgWidth} />;
    }
  });
  const utilities = technologies.map((technology, i) => {
    if (technology.category.includes("utility")) {
      return <TechCard {...technology} key={"util" + i} imgWidth={imgWidth} />;
    }
  });

  return (
    <article
      className="Tech"
      ref={(element) => {
        if (element) {
          navRefs.current = { ...navRefs.current, Tech: element };
        }
      }}
    >
      <header>
        <h1 className="page-header">Skills & Technologies</h1>
        <p>Some of the various technologies I&rsquo;ve worked with include:</p>
      </header>
      <section className="tech-section">
        <header>
          <h2>Languages</h2>
        </header>
        <div className="card-tray">
          {languages}
        </div>
      </section>
      <section className="tech-section">
        <header>
          <h2>Libraries/Frameworks</h2>
        </header>
        <div className="card-tray">
          {tech}
        </div>
      </section>
      <section className="tech-section">
        <header>
          <h2>Utilities</h2>
        </header>
        <div className="card-tray">
          {utilities}
        </div>
      </section>
    </article>
  );
}

export default Tech;
