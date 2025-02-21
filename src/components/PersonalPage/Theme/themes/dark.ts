import { RGBTulpe } from "../../../../lib/types/RGBTulpe"
import {
  bgBlack,
  bgGreyDark,
  textBlue,
  textCyan,
  textGreen,
  textPurple,
  textRed,
  textYellow,
} from "../../../../styles/modules/colors"

const white = "#e1e4e8"
const basic = {
  textColor: white,
  sectionDividerColor: white,
  sectionTitleBg: bgGreyDark,
  bgColor: bgBlack,
  scrollColor: "#333",
  scrollHoverColor: "#555",
  textShadow: "none",
}
const sectionEntry = {
  mainBg: basic.bgColor,
  nameTextColor: textCyan,
  webDevTitleColor: "inherit",
  webDevTitleBg: basic.bgColor,
  webDevBorderColor: white,
  stackColor: textYellow,
}
const sectionValues = {
  mainBg: basic.bgColor,
  cardBg: bgGreyDark,
  titleTextColor: textBlue,
  textColor: basic.textColor,
  accentTextColor1: textGreen,
  accentTextColor2: textRed,
  accentTextColor3: textBlue,
  accentTextColor4: textPurple,
  accentTextColor5: textYellow,
  accentTextColor6: textCyan,
  borderColor: "transparent",
}
const sectionPortfolio = {
  mainBg: basic.bgColor,
  cardBg: sectionValues.cardBg,
  cardBorderColor: "#aaa",
  cardBorderColorHover: white,
  titleTextColor: textYellow,
  projectTextColor: textGreen,
  imageCloseButtonBg: "#fff",
  imageCloseButtonColor: "#000",
  scrollShadowColor: [200, 200, 200] as RGBTulpe,
}
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
  name: "dark",
  basic,
  sectionEntry,
  sectionValues,
  sectionPortfolio,
  sectionContacts,
} as const
