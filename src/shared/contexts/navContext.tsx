import { createContext, useRef } from "react";

type NavComponentTypes = Record<string, HTMLElement>;

interface NavContextTypes {
  navRefs: React.MutableRefObject<NavComponentTypes | null>;
}

export const NavContext = createContext<NavContextTypes | null>(null);

export function NavProvider({ children }: Children) {
  const navRefs = useRef(null);

  return (
    <NavContext.Provider value={{ navRefs }}>{children}</NavContext.Provider>
  );
}
