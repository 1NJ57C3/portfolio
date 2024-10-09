import NavBar from "./NavBar";
import "./Header.css";

function Header() {
  return (
    <header role="banner" className="Header">
      <a className="logo" href="/">
        &lsaquo;injustice.dev/&rsaquo;
      </a>
      <NavBar />
    </header>
  );
}

export default Header;
