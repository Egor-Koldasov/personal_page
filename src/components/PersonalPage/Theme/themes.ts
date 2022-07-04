import { themeDark } from "./themes/dark";
import { themeLight } from "./themes/light";

type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};
export type ThemeName = 'light' | 'dark';
export type Theme = {
  name: ThemeName,
} & Omit<Mutable<typeof themeDark>, 'name'>;

export const themes = {
  light: themeLight,
  dark: themeDark,
};
