interface PropsTypes {
  name: string;
  description: string;
  tech: string[];
  urls: {
    repo: string;
    demo?: string;
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

      <section>
        <img />
        { /* 
          ? hidden carousel
            ? &lsaqo; / &rsaquo; nav buttons appear on hover
            ? smooth fade in/out
          ? img | column thumb menu
        */ }
        <>
          <img />
          <img />
          <img />
        </>
      </section>

      { /*
        * thin vertical rule
          ? outward fading gradiant?
      */ }

      <section>
        <span>{name}</span>
        <span>{description}</span>
        <span>{tech}</span>
      </section>

      <footer>
        <a href={urls.repo}>Repo</a> |{" "}
        {urls.demo ? <a href={urls.demo}>Demo</a> : "Demo"}
      </footer>
    </div>
  );
}

export default ProjectCard;
