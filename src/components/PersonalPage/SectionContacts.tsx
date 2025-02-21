import Image from "next/image"
import styled from "styled-components"
import { UnexpectedError } from "../../lib/error/UnexpectedError"
import { breakpointFrom } from "../../styles/modules/breakpointFrom"
import { bpDesktop, bpTablet } from "../../styles/modules/vars"
import { BaseSection } from "./BaseSection"
import { BaseSectionContent } from "./BaseSectionContent"
import { BaseSectionTitle } from "./BaseSectionTitle"
import { LinkColorNumber } from "./SectionContacts.type"
import { theme } from "./Theme/themeProp"
import { Theme } from "./Theme/themes"
import { WrapperProps } from "./WrapperProps"

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
const Title = styled(BaseSectionTitle)``

const Photo = (props: WrapperProps) => (
  <Image
    src="/photo.jpg"
    alt="photo"
    width={200}
    height={200}
    {...props}
    objectFit="contain"
    priority
  />
)
const PhotoStyled = styled(Photo)`
  flex-shrink: 1;
  height: auto;
  height: 300px;
`
const ProfileBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 1rem;
  ${breakpointFrom(bpDesktop)} {
    flex-direction: row;
    flex-grow: 0;
  }
  /* justify-content: center; */
  /* background-color: #ddedec; */
`
const PhotoBox = styled.div`
  width: 100px;
  height: 100px;
  ${breakpointFrom(bpTablet)} {
    width: 200px;
    height: 200px;
  }

  border: 6px solid ${theme((t) => t.sectionContacts.photoBorderColor)};
  padding: 0;
  border-radius: 50%;
  overflow: clip;
  flex-shrink: 0;
`
const PhotoText = styled.div`
  color: ${theme((t) => t.sectionContacts.textColor)};
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 0;
  font-size: 1rem;
  max-width: 700px;
  gap: 1rem;
  ${breakpointFrom(bpDesktop)} {
    padding-top: 0;
    max-width: none;
    justify-content: flex-end;
    /* align-self: stretch; */
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
  /* font-weight: bold; */
  /* a {
    color: ${(props) =>
    theme((t) => t.sectionContacts[`contactTextColor${props.num}`])(props)};
  } */
`
const ContactSummary = styled.div`
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
  /* display: none; */
  ${breakpointFrom(bpDesktop)} {
    display: block;
  }
  ${breakpointFrom(bpTablet)} {
    display: block;
    font-size: 0.8rem;
  }
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
  display: none;
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
      <Title id="contacts">Contacts</Title>
      <BaseSectionContent>
        <ProfileBlock>
          <PhotoBox>
            <Photo />
          </PhotoBox>
          <PhotoText>
            <ContactSummary>
              I’m based in{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Tbilisi"
              >
                Tbilisi, Georgia
              </a>{" "}
              (GMT+4), work as a remote contractor, and am open to relocation.
              My working hours are flexible to accommodate any time zone.
              Tbilisi, Georgia (GMT+4)
            </ContactSummary>
            <DesktopLinks />
            <MobileLinks />
          </PhotoText>
        </ProfileBlock>
      </BaseSectionContent>
    </Section3Styled>
  )
}
