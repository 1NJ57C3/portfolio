import { useNavContext } from "../../shared/contexts/useNavContext";
import "./Contacts.css";

function Contacts() {
  const { navRefs } = useNavContext();
  const contacts = [
    { name: "Email", address: "mailto:hello@injustice.dev" },
    {
      name: "Discord",
      address: "https://discord.com/users/194635295583371273",
    },
    { name: "Twitter", address: "https://twitter.com/1NJ57C3" },
    { name: "GitHub", address: "https://github.com/1NJ57C3" },
    {
      name: "Resume",
      address:
        "https://docs.google.com/document/d/e/2PACX-1vR9aiQ8RqWUFizzxToOVPbt-JLazdCMRdUFi8M0UmwDKf4Jy0wcEe4ZIhfCQTaEOUNTOlaXW-TCiCPD/pub",
    },
  ];

  const contactElements = contacts.map(({ name, address }, i) => {
    return (
      <span key={"contact" + i}>
        <a href={address}>{name}</a>
      </span>
    );
  });

  return (
    <article
      className="Contacts"
      ref={(element) => {
        if (element) {
          navRefs.current = { ...navRefs.current, Contact: element };
        }
      }}
    >
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
      <section className="links">{contactElements}</section>
    </article>
  );
}

export default Contacts;
