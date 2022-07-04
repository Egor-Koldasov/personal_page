import { textBlue, textPurple, textRed } from "../../../../styles/modules/colors";
import { Theme } from "../themes";
import { themeDark } from "./dark";

const textCyan = '#65c8c5';
const textYellow = '#e4b715';
const textGreen = '#5fc35c';
const black = '#333';

const basic = {
  textColor: black,
  sectionDividerColor: black,
  bgColor: '#f5f5ee',
  scrollColor: '#ccc',
  scrollHoverColor: '#aaa',
  textShadow: '1px 1px 6px #0000000f',
}
const sectionEntry = {
  mainBg: basic.bgColor,
  nameTextColor: textCyan,
  webDevTitleColor: textGreen,
  webDevTitleBg: basic.bgColor,
  webDevBorderColor: black,
  stackColor: textYellow,
};
const sectionValues = {
  mainBg: basic.bgColor,
  cardBg: '#f9f9f3',
  titleTextColor: textBlue,
  textColor: basic.textColor,
  accentTextColor1: textPurple,
  accentTextColor2: textRed,
  accentTextColor3: textYellow,
}
const sectionPortfolio = {
  mainBg: basic.bgColor,
  cardBg: basic.bgColor,
  cardBorderColor: '#555',
  cardBorderColorHover: black,
  titleTextColor: textYellow,
  projectTextColor: textGreen,
  imageCloseButtonBg: '#fff',
  imageCloseButtonColor: black,
};
const sectionContacts = {
  titleColor: textPurple,
  mainBg: basic.bgColor,
  textColor: basic.textColor,
  linkColor: textBlue,
  photoBorderColor: basic.textColor,
  contactTextColor1: textRed,
  contactTextColor2: textCyan,
  contactTextColor3: textYellow,
  contactTextColor4: textGreen,
}

export const themeLight: Theme = {
  ...themeDark,
  name: 'light',
  basic,
  sectionEntry,
  sectionValues,
  sectionPortfolio,
  sectionContacts,
} as const;
