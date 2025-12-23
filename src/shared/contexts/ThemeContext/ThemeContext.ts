import { createContext } from "react";

interface ContextTypes {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ContextTypes | null>(null);
