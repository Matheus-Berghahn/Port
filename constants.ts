import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullTwConfig = resolveConfig(tailwindConfig);

const EMAIL = "matheus.berghahn3k@gmail.com";
const GITHUB = "https://github.com/Matheus-Berghahn";
const LINKEDIN = "https://www.linkedin.com/in/matheus-berghahn-098049206/";
const INSTAGRAM = "https://www.instagram.com/__sunsetz__/";


type Work = {
  company: string;
  position: string;
  link?: string;
  description: string;
};

const WORK: Work[] = [
  {
    company: "Chess",
    position: "Angular",
    link: "https://chess-page-lemon.vercel.app/",
    description:
      "One of the first pages I made when I started studying.",
  },
  {
    company: "SmartFit",
    position: "Angular",
    link: "https://desafio-smartfit-nu.vercel.app/",
    description:
      "The page I made to study APIs.",
  },
  {
    company: "Luvas Berghahn",
    position: "React",
    link: "https://luvasberghahn.vercel.app/",
    description:
      "The showcase page I made for my parents' company.",
  },
  {
    company: "Mirage.ai",
    position: "Next",
    link: "https://mirage-xi.vercel.app/",
    description:
      "The page I made to generate images through artificial intelligence. (It's turned off now).",
  },
  {
    company: "Seven Letters",
    position: "React",
    link: "https://sevenletters.vercel.app/",
    description:
      "Product page.",
  }
];

export {
  EMAIL,
  GITHUB,
  LINKEDIN,
  INSTAGRAM,
  WORK,
  fullTwConfig,
};
