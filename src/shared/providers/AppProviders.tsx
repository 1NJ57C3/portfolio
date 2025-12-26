import { NavProvider } from "../contexts/NavContext";
import { ThemeProvider } from "../contexts/ThemeContext";

export function AppProviders({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      <NavProvider>
        {children}
      </NavProvider>
    </ThemeProvider>
  );
}
