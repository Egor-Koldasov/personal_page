import ioradStepList from '../../../../public/portfolio/iorad/step_list.png';
import ioradLivePlayer from '../../../../public/portfolio/iorad/live_player.png';
import ioradPdfExport from '../../../../public/portfolio/iorad/pdf_export.png';
import ioradRecording from '../../../../public/portfolio/iorad/recording.png';
import ioradExtension from '../../../../public/portfolio/iorad/extension_tutorial_list.png';
import { StaticImageData } from "next/image";

type PortfolioImage = {
  data: StaticImageData;
  description: string;
};
export type PortfolioItem = {
  jobTitle: string;
  projectName: string;
  shortDescription: string;
  description: string;
  images: PortfolioImage[];
  dateFrom?: string;
  dateTo?: string;
};
export const portfolio: PortfolioItem[] = [
  {
    projectName: 'Sangix',
    shortDescription: 'Hospital appointment booking',
    jobTitle: 'Front End Web Developer',
    description: `Sangix is the application for the hospital booking. I've been implementing the front-end
      part including the booking process itself, management of the appointments booked,
      parts that are made for use inside the hospital (the queue of patients in the cabinet, the
      check-in screen for self check-in), and some pages meant for the hospital staff.`,
    images: [],
  },
  {
    projectName: 'Iorad',
    shortDescription: 'Tutorial building tool',
    jobTitle: 'Full Stack Web Developer',
    description: `I’ve been working as a full-stack developer with React and NodeJS. Have been building
      the application itself, the website for it, browser extension, payment system, admin
      system.
      Iorad is the application for automatic building step-by-step tutorials with images and
      descriptions on each step, the user records it like a video then they can edit it.
      I have been building the browser extension, rewriting and upgrading the Stripe payment
      
      system, admin panel, optimizing slow database queries and inefficient front-end code,
      working on multiple redesigns, adding features to the player and editor.`,
    images: [
      { data: ioradStepList, description: 'The tutorial player. User can visit it to play the recorded guidelines.' },
      { data: ioradLivePlayer, description: 'The "Live" player, that shows steps over the actual webpage.' },
      { data: ioradPdfExport, description: 'Export to PDF format.' },
      { data: ioradRecording, description: 'Authors record tutorials by doing all steps themselves.' },
      { data: ioradExtension, description: 'Users can see related tutorials when they visit a website by using the extension or if website owners added the embed widget.' },
    ],
  },
  {
    projectName: 'Autostat Radar',
    shortDescription: 'Automobile market analytics',
    jobTitle: 'Full Stack Web Developer',
    description: `Data Analytics app of the car market. The customer had the OLAP database
      filled with car market data and requested the app to view that data in a user-friendly
      feature-rich way with tables, diagrams and maps.
      I've been working there as a full-stack developer, adding features to Google Maps,
      tables, query saving, query building, admin page, and have implemented the docker
      instancing (launches the app in a separate docker container for each team to split their
      resources when they run heavy queries).`,
    images: [],
  }
];
