import { createContext, useRef } from "react";
import { ChildrenProps } from "../types/context";

type NavRefTypes = Record<string, HTMLElement>;

interface NavContextTypes {
  navRefs: React.MutableRefObject<NavRefTypes | null>;
}

export const NavContext = createContext<NavContextTypes | null>(null);

export function NavProvider({ children }: ChildrenProps) {
  const navRefs = useRef<NavRefTypes>(null);

  return (
    <NavContext.Provider value={{ navRefs }}>{children}</NavContext.Provider>
  );
}
