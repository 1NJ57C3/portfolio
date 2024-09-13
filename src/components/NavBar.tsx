function NavBar() {
  const navItems = ["About", "Contact"];

  const navButtons = navItems.map((navItem, i) => (
    <li key={i}>
      <button>{navItem}</button>
    </li>
  ));

  return <ul className="NavBar">{navButtons}</ul>;
}

export default NavBar;
