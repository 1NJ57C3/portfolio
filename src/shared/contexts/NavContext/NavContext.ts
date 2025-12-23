import { createContext } from "react";

export type NavRefTypes = Record<string, HTMLElement>;

interface NavContextTypes {
  navRefs: React.RefObject<NavRefTypes | null>;
}

export const NavContext = createContext<NavContextTypes | null>(null);
