import { useState } from "react";

import { ChildrenProps } from "@/shared/types/context";

import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }: ChildrenProps) {
  const [theme, setTheme] = useState("legacy");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
