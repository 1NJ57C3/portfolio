import { useNavContext } from "../../shared/contexts/useNavContext";
import "./About.css";

function About() {
  const { navRefs } = useNavContext();

  return (
    <article
      className="About"
      ref={(element) => {
        if (element) {
          navRefs.current = { ...navRefs.current, About: element };
        }
      }}
    >
      <header>
        <h1 className="page-header">About Me</h1>
      </header>
      <figure className="bio-image">
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWV3ZmJhN3ppZW50dTJ4ZTdvYjZqc3c3enJwcW5lZHNoMGQ5dHM1eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MbGf76uzTC5JM0tVRV/giphy.gif"
          alt="cartoon man looking into mirror reflecting dumpster fire"
          width="280"
        />
        <figcaption>
          <a href="https://giphy.com/gifs/meme-mirror-dumpster-fire-MbGf76uzTC5JM0tVRV">
            via GIPHY
          </a>
        </figcaption>
      </figure>
      <section className="bio">
        <p>
          Hello. My handle is 1NJ57C3 (read as &ldquo;Injustice&rdquo;). Some of
          my friends call me Inji for short. I&rsquo;m based in and native to
          Oakland, California. For those of you less savvy, we&rsquo;re in the
          Bay Area, right across the bridge from San Francisco.
        </p>
        <p>
          I&rsquo;m a front-end-leaning full-stack developer with a solid
          foundation in React, JavaScript, TypeScript, and semantic HTML. I
          enjoy crafting intuitive user interfaces and have experience with
          backend technologies like Ruby on Rails. My approach focuses on
          writing flexible, scalable code that can adapt as projects grow,
          making me versatile across the stack.
        </p>
        <p>
          Recently, I&rsquo;ve been transitioning from JavaScript to TypeScript
          and exploring backend development with Django. While refining my
          portfolio, I&rsquo;m working on expanding my knowledge of backend
          technologies, including databases like PostgreSQL and SQLite, as I
          continue to develop more complex projects.
        </p>
        <p>
          At the core of my development process is a passion for
          problem-solving. I enjoy tackling complex challenges, constantly
          learning, and building maintainable solutions.
        </p>
        <p>
          When I&rsquo;m not coding, you&rsquo;ll probably find me gaming,
          listening to music on Spotify (mostly EDM like melodic bass/dubstep
          and vocal trance, if you&rsquo;re savvy), or playing guitar (rather
          poorly). You might also find me at the archery range or in a swimming
          pool to clear my mind, although there&rsquo;s nothing better than
          driving... probably a little <em>too</em> fast.
        </p>
      </section>
    </article>
  );
}

export default About;
