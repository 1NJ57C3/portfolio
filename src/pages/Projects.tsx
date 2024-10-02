import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

function Projects() {
  return (
    <section className="Projects">
      {projects.map((project, i) => (
        <ProjectCard key={"p" + i} {...project} />
      ))}
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
