import Image from "next/image"
import styled from "styled-components"
import { Paths } from "../../lib/types/Path"
import { breakpointFrom } from "../../styles/modules/breakpointFrom"
import { bpDesktop } from "../../styles/modules/vars"
import { BaseSection } from "./BaseSection"
import { theme, themeProp } from "./Theme/themeProp"
import { Theme } from "./Theme/themes"
import { WrapperProps } from "./WrapperProps"
import { LinkColorNumber } from "./SectionContacts.type"
import { UnexpectedError } from "../../lib/error/UnexpectedError"

const Section3Styled = styled(BaseSection)`
  background-color: ${theme((t) => t.sectionContacts.mainBg)};
  a {
    color: ${theme((t) => t.sectionContacts.linkColor)};
  }
  justify-content: flex-start;
  ${breakpointFrom(bpDesktop)} {
    justify-content: center;
  }
`
const Title = styled.h3`
  text-align: center;
  /* color: ${theme((t) => t.sectionContacts.titleColor)}; */
  font-size: 1.5rem;
  && {
    font-weight: bold;
  }
`
const Photo = (props: WrapperProps) => (
  <Image
    src="/photo.jpg"
    alt="photo"
    width={300}
    height={300}
    {...props}
    objectFit="contain"
    priority
  />
)
const PhotoStyled = styled(Photo)`
  flex-shrink: 1;
  height: auto;
`
const ProfileBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  ${breakpointFrom(bpDesktop)} {
    flex-direction: row;
    flex-grow: 0;
  }
  /* justify-content: center; */
  /* background-color: #ddedec; */
`
const PhotoBox = styled.div`
  max-width: 200px;
  max-height: 200px;
  min-width: 150px;
  border: 6px solid ${theme((t) => t.sectionContacts.photoBorderColor)};
  padding: 0;
  border-radius: 50%;
  overflow: clip;
`
const PhotoText = styled.div`
  color: ${theme((t) => t.sectionContacts.textColor)};
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 0;
  font-size: 1rem;
  max-width: 700px;
  ${breakpointFrom(bpDesktop)} {
    padding-top: 0;
    max-width: none;
    justify-content: flex-end;
    align-self: stretch;
  }
`

const getContactTextColor = (
  subTheme: Theme["sectionContacts"],
  key: keyof Theme["sectionContacts"]
) => subTheme[key]
const getContactTextColor_ = (
  subTheme: Theme["sectionContacts"],
  num: "1" | "2" | "3" | "4"
) => {
  const prefix = "contactTextColor" as const
  const key = `${prefix}${num}` as const
  return getContactTextColor(subTheme, key)
}

const LinkRow = styled.div<{ num: LinkColorNumber }>`
  font-weight: bold;
  a {
    color: ${(props) =>
      theme((t) => t.sectionContacts[`contactTextColor${props.num}`])(props)};
  }
`
const LinkRowTop = styled.ul`
  margin-bottom: auto;

  /* li {
    list-style-type: disc;
  } */
`
const linkMap: [string, string, string][] = [
  ["Email", "mailto:koldasov3@gmail.com", "koldasov3@gmail.com"],
  [
    "Github",
    "https://github.com/Egor-Koldasov",
    "https://github.com/Egor-Koldasov",
  ],
  [
    "LinkedIn",
    "https://www.linkedin.com/in/egor-koldasov",
    "https://www.linkedin.com/in/egor-koldasov",
  ],
  // [
  //   "Upwork",
  //   "https://www.upwork.com/freelancers/egor",
  //   "https://www.upwork.com/freelancers/egor",
  // ],
]

const DesktopLinksStyled = styled.div`
  display: none;
  ${breakpointFrom(bpDesktop)} {
    display: block;
  }
  font-size: 0.8rem;
`

const getLinkRowNumber = (num: number): LinkColorNumber => {
  const numInRange = num >= 0 && num <= 4 && Number.isInteger(num)
  if (!numInRange) throw new UnexpectedError("Link row number is not in range")
  return String(num) as "1" | "2" | "3" | "4"
}

const DesktopLinks = () => (
  <DesktopLinksStyled>
    {linkMap.map(([name, href, text], index) => (
      <LinkRow key={name} num={getLinkRowNumber(index + 1)}>
        {name + ": "}
        <a target="_blank" rel="noreferrer" href={href}>
          {text}
        </a>
      </LinkRow>
    ))}
  </DesktopLinksStyled>
)
const MobileLinksStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 var(--block-spacing);
  ${breakpointFrom(bpDesktop)} {
    display: none;
  }
`
const MobileLinks = () => (
  <MobileLinksStyled>
    {linkMap.map(([name, href], index) => (
      <LinkRow key={name} num={getLinkRowNumber(index + 1)}>
        <a target="_blank" rel="noreferrer" href={href}>
          {name}
        </a>
      </LinkRow>
    ))}
  </MobileLinksStyled>
)
export const SectionContacts = () => {
  return (
    <Section3Styled>
      <Title className="title">My Contacts</Title>
      <ProfileBlock className="columns">
        <PhotoBox className="column">
          <Photo />
        </PhotoBox>
        <PhotoText className="column">
          <LinkRowTop>
            <li>
              • I am based in{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Tbilisi"
              >
                Tbilisi, Georgia
              </a>{" "}
              (GMT+4)
            </li>
            <li>• Remote contractor</li>
            <li>• Relocation friendly</li>
            <li>• Working hours are adaptive to any part of the world</li>
          </LinkRowTop>
          <DesktopLinks />
          <MobileLinks />
        </PhotoText>
      </ProfileBlock>
    </Section3Styled>
  )
}
