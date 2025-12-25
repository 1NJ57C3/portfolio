import { Theme } from "@/shared/types/theme";
import { createContext } from "react";

interface ContextTypes {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ContextTypes | null>(null);
