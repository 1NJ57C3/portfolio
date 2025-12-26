import { useEffect, useState } from "react";

import { Theme } from "@/shared/types/theme";

import { ThemeContext } from "./ThemeContext";
import { themeLoaders } from "./themeLoaders";

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("legacy");

  useEffect(() => {
    const loadTheme = async () => {
      await (themeLoaders[theme]());
      document.documentElement.dataset.theme = theme;
    }

    void loadTheme();
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
