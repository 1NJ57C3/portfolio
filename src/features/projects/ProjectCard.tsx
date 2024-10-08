import styles from "./ProjectCard.module.css";

interface PropsTypes {
  name: string;
  description: string;
  tech: string[];
  urls: {
    repo: string;
    demo: string | null;
  };
  images: string[];
}

function ProjectCard({ name, description, tech, urls, images }: PropsTypes) {
  function renderImages() {
    if (images.length) {
      { /*
        TODO preview slideshow
          ? carousel underneath main preview image
            ? carousel nav buttons `&lsaqo;` and `&rsaquo;`
            ? gradient mask instead of traditional buttons
            ? spinny wheel drag/momentum
            ! probably won't have nor use enough images to justify carousel
      */ }
      return <img src={images[0]} alt="project image" />; // TODO handle multiple images (carousel, slideshow, etc.)
    } else {
      return <p>Preview Coming Soon&trade;</p>;
    }
  }

  return (
    <div className={styles.ProjectCard}>
      <article className={styles.content}>
        <section className={styles.screenshots}>
          {renderImages()}
        </section>
        <div className={styles.vr} />
        <section className={styles.info}>
          <header>
            <h2>{name}</h2>
          </header>
          <p className={styles.description}>{description}</p>
          <p>{tech.join(", ")}</p>
          <div>
            <a href={urls.repo}>Repo</a> |{" "}
            {urls.demo ? <a href={urls.demo}>Demo</a> : "Demo"}
          </div>
        </section>
      </article>
    </div>
  );
}

export default ProjectCard;

/*
  * hover
    * onMouseOver
      ? hover language makes relevant icons jump/wiggle
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
*/
