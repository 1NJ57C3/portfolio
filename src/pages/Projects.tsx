import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

function Projects() {
  function renderProjectCards() {
    if (projects.length)
      return projects.map((project, i) => (
        <ProjectCard key={"p" + i} {...project} />
      ));
    else return <p>Coming soon™</p>
  }

  return (
    <section className="Projects">
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
