import { useNavContext } from "../../shared/contexts/useNavContext";

interface NavButtonProps {
  navItem: string;
}

function NavButton({ navItem }: NavButtonProps) {
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

  return (
    <li className="nav-item">
      <button onClick={(e) => handleClick(e, navItem)}>{navItem}</button>
      <span className="nav-accent" />
    </li>
  );
}

export default NavButton;
