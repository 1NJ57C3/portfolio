import NavButton from "./NavButton";

import "./NavBar.css";

function NavBar() {
  const navItems: string[] = ["About", "Projects", "Tech", "Contact"];

  const navButtons = navItems.map((navItem, i) => (
    <NavButton key={"navbutton" + i} navItem={navItem} />
  ));

  return (
    <nav className="NavBar">
      <ul>{navButtons}</ul>
    </nav>
  );
}

export default NavBar;
