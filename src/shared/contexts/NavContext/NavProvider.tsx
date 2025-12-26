import { useRef } from "react";

import { NavContext, NavRefTypes } from "./NavContext";

export function NavProvider({ children }: React.PropsWithChildren) {
  const navRefs = useRef<NavRefTypes>(null);

  return (
    <NavContext.Provider value={{ navRefs }}>{children}</NavContext.Provider>
  );
}
