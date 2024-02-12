import { themes } from "./index";
import type { IMappedTheme, ITheme } from "./types/themesTypes";

export const mapTheme = (variables: ITheme): IMappedTheme => {
  return {
    "--color-primary-50": variables.primary[50] || "",
    "--color-primary-100": variables.primary[100] || "",
    "--color-primary-200": variables.primary[200] || "",
    "--color-primary-300": variables.primary[300] || "",
    "--color-primary-400": variables.primary[400] || "",
    "--color-primary-500": variables.primary[500] || "",
    "--color-primary-600": variables.primary[600] || "",
    "--color-primary-700": variables.primary[700] || "",
    "--color-primary-800": variables.primary[800] || "",
    "--color-primary-900": variables.primary[900] || "",
    "--color-secondary-50": variables.secondary[50] || "",
    "--color-secondary-100": variables.secondary[100] || "",
    "--color-secondary-200": variables.secondary[200] || "",
    "--color-secondary-300": variables.secondary[300] || "",
    "--color-secondary-400": variables.secondary[400] || "",
    "--color-neutral-50": variables.neutral[50] || "",
    "--color-neutral-100": variables.neutral[100] || "",
    "--color-neutral-200": variables.neutral[200] || "",
    "--color-neutral-300": variables.neutral[300] || "",
    "--color-neutral-400": variables.neutral[400] || "",
    "--color-neutral-500": variables.neutral[500] || "",
    "--color-neutral-600": variables.neutral[600] || "",
    "--color-neutral-700": variables.neutral[700] || "",
    "--color-neutral-800": variables.neutral[800] || "",
    "--color-neutral-900": variables.neutral[900] || "",
    "--color-success-100": variables.success[100] || "",
    "--color-success-200": variables.success[200] || "",
    "--color-success-300": variables.success[300] || "",
    "--color-success-400": variables.success[400] || "",
    "--color-success-500": variables.success[500] || "",
    "--color-warning-100": variables.warning[100] || "",
    "--color-warning-200": variables.warning[200] || "",
    "--color-warning-300": variables.warning[300] || "",
    "--color-warning-400": variables.warning[400] || "",
    "--color-warning-500": variables.warning[500] || "",
    "--color-danger-50": variables.danger[50] || "",
    "--color-danger-100": variables.danger[100] || "",
    "--color-danger-200": variables.danger[200] || "",
    "--color-danger-300": variables.danger[300] || "",
    "--color-danger-400": variables.danger[400] || "",
    "--color-danger-500": variables.danger[500] || "",
    "--color-fill": variables.fill.DEFAULT || "",
    "--font-family-main": variables.fontFamily.main || "",
  };
};

export const applyThemeIntoRoot = (theme: string): void => {
  const themeObject: IMappedTheme = mapTheme(themes[theme]);
  if (!themeObject) return;

  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    root.style.setProperty(property, themeObject[property]);
  });
};

applyThemeIntoRoot("designSystem");

export function extendTheme(extending: ITheme, newTheme: ITheme): ITheme {
  return { ...extending, ...newTheme };
}
