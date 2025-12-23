// import { useState } from "react";
import { useNavContext } from "@/shared/contexts/NavContext";

import "./NavButton.css";

interface NavButtonProps {
  navItem: string;
}

function NavButton({ navItem }: NavButtonProps) {
  const { navRefs } = useNavContext();
  // const [selected, setSelected] = useState(false); // TODO use observers for this instead; better interactivity/accuracy

  function scrollToSection(target: string) {
    if (navRefs.current) {
      const headerOffset = window.innerHeight * 0.0725;
      const targetPosition =
        navRefs.current[target].getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetPosition - headerOffset,
        behavior: "smooth",
      });
    }
  }

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    navItem: string
  ) {
    e.preventDefault();
    scrollToSection(navItem);
  }

  return (
    <li className={"nav-item"}>
      <button className="nav-button" onClick={(e) => handleClick(e, navItem)}>
        {navItem}
      </button>
      <span className="nav-accent" />
    </li>
  );
}

export default NavButton;
