import { useNavContext } from "../../shared/contexts/useNavContext";
import ProjectCard from "./ProjectCard";
import projects from "./projects.json";

function Projects() {
  const { navRefs } = useNavContext();

  function renderProjectCards() {
    if (projects.length) {
      return projects.map((project, i) => (
        <ProjectCard key={"p" + i} {...project} />
      ));
    } else {
      return <p>Coming soon™</p>;
    }
  }

  return (
    <section
      className="Projects"
      ref={(element) => {
        if (element) {
          navRefs.current = { ...navRefs.current, Projects: element };
        }
      }}
    >
      <header>
        <h1 className="page-header">Projects</h1>
      </header>
      {renderProjectCards()}
    </section>
  );
}

export default Projects;

/*
  * potential layouts
    ? SVG computer screen
    ? more typical/modern collage-style grid of bordered project images
      ? greyscale projects by default with lowered saturation or contrast
      ? hover effect
        ? color hovered project
        ? slight grow
    ? alternating column of offset horizontal cards
    // modern storefront pod grid
    ? marquee
*/
