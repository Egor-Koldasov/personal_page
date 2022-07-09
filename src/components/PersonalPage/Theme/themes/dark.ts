import { RGBTulpe } from "../../../../lib/types/RGBTulpe";
import { bgBlack, bgGreyDark, textBlue, textCyan, textGreen, textPurple, textRed, textYellow } from "../../../../styles/modules/colors";

const white = '#ddd';
const basic = {
  textColor: white,
  sectionDividerColor: white,
  bgColor: bgBlack,
  scrollColor: '#333',
  scrollHoverColor: '#555',
  textShadow: 'none',
}
const sectionEntry = {
  mainBg: basic.bgColor,
  nameTextColor: textCyan,
  webDevTitleColor: textGreen,
  webDevTitleBg: basic.bgColor,
  webDevBorderColor: white,
  stackColor: textYellow,
};
const sectionValues = {
  mainBg: basic.bgColor,
  cardBg: bgGreyDark,
  titleTextColor: textBlue,
  textColor: basic.textColor,
  accentTextColor1: textPurple,
  accentTextColor2: textRed,
  accentTextColor3: textYellow,
};
const sectionPortfolio = {
  mainBg: basic.bgColor,
  cardBg: basic.bgColor,
  cardBorderColor: '#aaa',
  cardBorderColorHover: white,
  titleTextColor: textYellow,
  projectTextColor: textGreen,
  imageCloseButtonBg: '#fff',
  imageCloseButtonColor: '#000',
  scrollShadowColor: [200, 200, 200] as RGBTulpe,
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

export const themeDark = {
  name: 'dark',
  basic,
  sectionEntry,
  sectionValues,
  sectionPortfolio,
  sectionContacts,
} as const;
