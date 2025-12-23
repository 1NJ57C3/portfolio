import { ChildrenProps } from "../types/context";
import { NavProvider } from "../contexts/NavContext";
import { ThemeProvider } from "../contexts/ThemeContext";

export function AppProviders({ children }: ChildrenProps) {
  return (
    <ThemeProvider>
      <NavProvider>
        {children}
      </NavProvider>
    </ThemeProvider>
  );
}
