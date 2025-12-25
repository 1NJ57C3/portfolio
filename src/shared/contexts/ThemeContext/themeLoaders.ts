import { Theme } from "@/shared/types/theme";

export const themeLoaders: Record<Theme, () => Promise<typeof import("*.css")>> = {
  legacy: () => import("@/shared/styles/themes/legacy.css"),
  dark: () => import("@/shared/styles/themes/dark.css"),
}
