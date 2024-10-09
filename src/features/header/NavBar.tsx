import { useNavContext } from "../../shared/contexts/useNavContext";
import "./NavBar.css";

function NavBar() {
  const navItems: string[] = ["About", "Projects", "Tech", "Contact"];
  const { navRefs } = useNavContext();

  function scrollIntoView(target: string) {
    if (navRefs.current) {
      navRefs.current[target].scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    navItem: string
  ) {
    e.preventDefault();
    scrollIntoView(navItem);
  }

  const navButtons = navItems.map((navItem, i) => (
    <li key={"nav" + i} className="nav-item">
      <button onClick={(e) => handleClick(e, navItem)}>{navItem}</button>
      <span className="nav-accent" />
    </li>
  ));

  return (
    <nav className="NavBar">
      <ul>{navButtons}</ul>
    </nav>
  );
}

export default NavBar;
