import "./Contacts.css";

function Contacts() {
  return (
    <article className="Contacts">
      <header>
        <h1 className="page-header">Contact</h1>
      </header>
      <section className="main">
        <section className="outro">
          <p>Congratulations! You&rsquo;ve made it to the end of the site!</p>
          <p>
            Unfortunately, that means I have no more content prepared for your
            consumption.
          </p>
          <p>
            If you have questions, an idea you&rsquo;d like to work on together,
            or simply feel compelled to for any reason at all, don&rsquo;t
            hesitate to reach out!
          </p>
        </section>
        <img
          src="https://media1.tenor.com/m/admZGSn7ebgAAAAC/sad-dance.gif"
          alt="pepe dancing"
          height="200"
        />
      </section>
      <section className="links">
        <span>
          <a href="mailto:hello@injustice.dev">Email</a>
        </span>
        <span>
          <a href="https://discord.com/users/194635295583371273">Discord</a>
        </span>
        <span>
          <a href="https://twitter.com/1NJ57C3">Twitter</a>
        </span>
      </section>
    </article>
  );
}

export default Contacts;
