import { useRef } from "react";

import { ChildrenProps } from "@/shared/types/context";

import { NavContext, NavRefTypes } from "./NavContext";

export function NavProvider({ children }: ChildrenProps) {
  const navRefs = useRef<NavRefTypes>(null);

  return (
    <NavContext.Provider value={{ navRefs }}>{children}</NavContext.Provider>
  );
}
