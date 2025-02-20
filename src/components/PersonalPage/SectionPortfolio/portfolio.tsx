import ioradStepList from "../../../../public/portfolio/iorad/step_list.png"
import ioradLivePlayer from "../../../../public/portfolio/iorad/live_player.png"
import ioradPdfExport from "../../../../public/portfolio/iorad/pdf_export.png"
import ioradRecording from "../../../../public/portfolio/iorad/recording.png"
import ioradExtension from "../../../../public/portfolio/iorad/extension_tutorial_list.png"
import { StaticImageData } from "next/image"

type PortfolioImage = {
  data: StaticImageData
  description: string
}
export type PortfolioItem = {
  jobTitle: "Full-stack Developer" | "Front-end Developer"
  projectName: string
  shortDescription: string
  description: string
  keyPoints: string[]
  techStack: string[]
  images: PortfolioImage[]
  dateFrom: string
  dateTo: string | null
}
// export const portfolio: PortfolioItem[] = [
//   {
//     projectName: "Sangix",
//     shortDescription: "Hospital appointment booking",
//     jobTitle: "Front End Web Developer",
//     description: `Sangix is the application for the hospital booking. I've been implementing the front-end
//       part including the booking process itself, management of the appointments booked,
//       parts that are made for use inside the hospital (the queue of patients in the cabinet, the
//       check-in screen for self check-in), and some pages meant for the hospital staff.`,
//     images: [],
//   },
//   {
//     projectName: "Iorad",
//     shortDescription: "Tutorial building tool",
//     jobTitle: "Full Stack Web Developer",
//     description: `Iorad is the application for the automatic building of step-by-step tutorials
//       with images and descriptions on each step, the user records it like a video then they can edit it.
//       I have been building the browser extension, rewriting and upgrading the Stripe payment system,
//       and admin panel, optimizing slow database queries and inefficient front-end code,
//       working on multiple redesigns, and adding features to the player and editor.`,
//     images: [
//       {
//         data: ioradStepList,
//         description:
//           "The tutorial player. User can visit it to play the recorded guidelines.",
//       },
//       {
//         data: ioradLivePlayer,
//         description:
//           'The "Live" player, that shows steps over the actual webpage.',
//       },
//       { data: ioradPdfExport, description: "Export to PDF format." },
//       {
//         data: ioradRecording,
//         description: "Authors record tutorials by doing all steps themselves.",
//       },
//       {
//         data: ioradExtension,
//         description:
//           "Users can see related tutorials when they visit a website by using the extension or if website owners added the embed widget.",
//       },
//     ],
//   },
//   {
//     projectName: "Autostat Radar",
//     shortDescription: "Automobile market analytics",
//     jobTitle: "Full Stack Web Developer",
//     description: `Data Analytics app of the car market. The customer had the OLAP database
//       filled with car market data and requested the app to view that data in a user-friendly
//       feature-rich way with tables, diagrams and maps.
//       I've been working there as a full-stack developer, adding features to Google Maps,
//       tables, query saving, query building, admin page, and have implemented the docker
//       instancing (launches the app in a separate docker container for each team to split their
//       resources when they run heavy queries).`,
//     images: [],
//   },
// ]

export const portfolioItems: PortfolioItem[] = [
  {
    jobTitle: "Full-stack Developer",
    projectName: "Tenpu",
    shortDescription: "EU Tendering Solutions",
    description:
      "Tenpu is an innovative startup delivering cutting-edge tendering solutions for the EU market.",
    keyPoints: [
      "Joined a 2–5 person dev team at an early growth phase; helped accelerate feature development by effectively balancing speed and quality.",
      "Contributed a high volume of hands-on coding, implementing robust features that supported rapid user onboarding.",
      "Influenced product direction by offering strategic insights during planning, earning co-founder recognition for both execution quality and technical leadership.",
    ],
    techStack: [
      "React",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Node",
      "TypeScript",
      "Jest",
      "Playwright",
      "Tailwind",
    ],
    images: [],
    dateFrom: "Dec 2023",
    dateTo: "Jan 2025",
  },
  {
    jobTitle: "Full-stack Developer",
    projectName: "Frame",
    shortDescription: "Collaboration Tools",
    description:
      "Frame is a post-seed startup developing collaborative productivity tools for modern teams.",
    keyPoints: [
      "Played a pivotal role post-seed funding in a 7-person dev team; recognized by co-founders for high-quality, high-volume deliverables on front-end and back-end.",
      "Supported a successful Product Hunt launch (#3 Daily, #5 Weekly), driving new users and key market visibility.",
      "Practiced user-centric development by using Frame daily, identifying friction points, and implementing integration tests to ensure product stability.",
    ],
    techStack: [
      "React",
      "Node",
      "TypeScript",
      "AWS",
      "PostgreSQL",
      "Jest",
      "Cypress",
      "SASS",
    ],
    images: [],
    dateFrom: "Sep 2022",
    dateTo: "Nov 2023",
  },
  {
    jobTitle: "Front-end Developer",
    projectName: "Sangix",
    shortDescription: "Hospital Booking",
    description:
      "Sangix is a healthcare technology firm focused on digital booking solutions for hospitals.",
    keyPoints: [
      "Delivered a hospital appointment booking front-end (self-check-in, queue management, staff interfaces) on time and budget, with minimal friction.",
      "Provided a fully ready front-end product at contract completion, eliminating the need for additional dev resources.",
    ],
    techStack: ["React", "TypeScript", "Jest", "SASS", "styled-components"],
    images: [],
    dateFrom: "Jan 2022",
    dateTo: "May 2022",
  },
  {
    jobTitle: "Full-stack Developer",
    projectName: "Iorad",
    shortDescription: "Tutorial Building Tool",
    description:
      "Iorad is an edtech platform enabling interactive tutorial creation for digital learning.",
    keyPoints: [
      "Served as a principal contributor (2nd only to the tech lead) during a 6-year tenure, delivering crucial features across browser extensions, payment integrations (Stripe), and admin panels.",
      "Optimized database queries and front-end code, reducing load times and improving user satisfaction.",
      "Led multiple redesign efforts, enhancing tutorial creation features and user experience.",
    ],
    techStack: ["React", "Node", "MySQL", "JavaScript", "Redux", "SASS"],
    images: [],
    dateFrom: "Feb 2016",
    dateTo: "Jan 2022",
  },
  {
    jobTitle: "Full-stack Developer",
    projectName: "CosySoft",
    shortDescription: "Automotive Analytics",
    description:
      "CosySoft is a tech firm and my first workplace. My main project there was Autostat Radar, which specializes in automotive analytics and interactive mapping solutions.",
    keyPoints: [
      "Transitioned from personal pet projects to a commercial setting, quickly surpassing expectations and supporting more senior teammates.",
      "Built interactive analytics (mapping, query building, dashboards) for car market data.",
      "Introduced Docker for resource-heavy queries, boosting performance and development efficiency.",
    ],
    techStack: [
      "JavaScript",
      "MySQL",
      "PHP",
      "Java",
      "Docker",
      "Backbone.js",
      "jQuery",
    ],
    images: [],
    dateFrom: "Jan 2015",
    dateTo: "Nov 2015",
  },
]
