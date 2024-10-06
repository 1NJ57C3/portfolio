import technologies from "../data/tech.json";

function Tech() {
  // * hover
  // * onMouseOver
  // ? hover language makes relevant icons jump/wiggle
  const imgWidth = "75";
  const languages = technologies.map(
    ({ name, logo, website, category, associations }, i) => {
      if (category.includes("language"))
        return <img src={logo} alt={name} key={"tech" + i} width={imgWidth} />;
    }
  );
  const tech = technologies.map(
    ({ name, logo, website, category, associations }, i) => {
      if (category.includes("library") || category.includes("framework"))
        return <img src={logo} alt={name} key={"tech" + i} width={imgWidth} />;
    }
  );
  const utilities = technologies.map(
    ({ name, logo, website, category, associations }, i) => {
      if (category.includes("utility"))
        return <img src={logo} alt={name} key={"util" + i} width={imgWidth} />;
    }
  );

  return (
    <article className="Tech">
      <header>
        <h1>Skills & Technologies</h1>
        <p>
          Here are some of the various technologies I&rsquo;ve worked with in the
          past.
        </p>
      </header>
      <section>
        <h2>Languages</h2>
        {languages}
      </section>
      <section>
        <h2>Libraries/Frameworks</h2>
        {tech}
      </section>
      <section>
        <h2>Utilities</h2>
        {utilities}
      </section>
    </article>
  );
}

export default Tech;
