function NavBar() {
  const navItems: string[] = ["About", "Projects", "Contact"];

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log((e.target as HTMLButtonElement).id);
  }

  const navButtons = navItems.map((navItem, i) => (
    <li key={i} className="nav-item">
      <button onClick={(e) => handleClick(e)} id={navItem}>
        {navItem}
      </button>
    </li>
  ));

  return (
    <nav className="NavBar">
      <ul>{navButtons}</ul>
    </nav>
  );
}

export default NavBar;
