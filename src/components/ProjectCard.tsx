import '../styles/ProjectCard.css';

interface PropsTypes {
  name: string;
  description: string;
  tech: string[];
  urls: {
    repo: string;
    demo: string | null;
  };
}

function ProjectCard({ name, description, tech, urls }: PropsTypes) {
  return (
    <div className="ProjectCard">
      { /*
        * layout
          ? thin border, radius'd, either darker than bg or medium grey
            ? near-transparent background overlay with boxshadow/blur
            ? acrylic overlay
          ? matchbox?
            ? "closed" box
            ? slide anim `description` out on hover?
          ? horizontal card?
            * title bar
            * interactive image preview (hover carousel)
            * description to right of image
            * links
              ? card footer
              ? under description?
                ? GH / Play icon links/buttons?
                  * if (!urls.demo) <PlayButton disabled />
          ? collage of project images
            * hover
              * slight grow
                ? breathing/pulsing?
              * light translucent overlay
              * quick links to repo/demo
            * click
              * transition
                * 1
                  ? grows into own row beneath current?
                  ? slides info/description "out" from "underneath"?
                    ? directionality based on position on grid?
                * 2
                  ? modal?
        * hover
          * grow
            ? sequence
              * slow grow
              * fade in soft glow (box shadow)
              * wiggle?
            ? breathing style grow?
          * glow
            * soft box shadow
            * transition
              ? fade in
              ? wormhole in?
        * demos
          ? deploy project to {projectname}.injustice.dev?
      */ }

      <div className="content">
        <section className="screenshots">
          <img src="" alt="project image" height="128" width="128" />
          { /* 
            ? hidden carousel
              ? &lsaqo; / &rsaquo; nav buttons appear on hover
              ? smooth fade in/out
            ? img | column thumb menu
          */ }
          <>
            {/* <img /> */}
            {/* <img /> */}
            {/* <img /> */}
          </>
        </section>
        <div className="vr " />

        { /*
          * thin vertical rule
            ? outward fading gradient?
        */ }

        <section className="info">
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <p>{tech.join(", ")}</p>
          <div>
            <a href={urls.repo}>Repo</a> |{" "}
            {urls.demo ? <a href={urls.demo}>Demo</a> : "Demo"}
          </div>
        </section>
      </div>

    </div>
  );
}

export default ProjectCard;
