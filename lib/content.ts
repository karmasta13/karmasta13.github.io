// Single source of truth for all page content.
// Edit these values — the components read straight from here.

export const profile = {
  name: "Labbi",
  greeting: "नमस्ते, I am",
  title: "Civic technologist, technical data architect, and educator",
  tagline:
    "I build tools that make complicated systems easier for ordinary people to deal with. My work sits where technology, gender, and inclusion meet, and it is about making public life accessible to everyone.",
  cvUrl: "#", // replace with a link to your CV (e.g. /labbi-cv.pdf)
  contact: {
    email: "contact@labbi.com.np",
    location: "Lalitpur, Nepal",
    instagram: "Tech with Labbi",
    instagramUrl: "https://instagram.com/techwithlabbi",
    githubUrl: "https://github.com/Karmasta13",
    linkedinUrl: "https://www.linkedin.com/",
  },
};

export const socials = [
  { label: "Instagram", icon: "instagram", href: "https://instagram.com/techwithlabbi" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/" },
  { label: "GitHub", icon: "github", href: "https://github.com/Karmasta13" },
  { label: "Email", icon: "mail", href: "mailto:contact@labbi.com.np" },
] as const;

export const stats = [
  { value: "5,300+", label: "Nepalis served through Bureaucrazy" },
  { value: "585+", label: "people trained with Digital Kala" },
  { value: "200+", label: "students taught at Islington College" },
];

export const about: string[] = [
  "I build tools that help ordinary people reach their government. I also bring communities that usually get left out into digital life.",
  "I am the Technical Lead of Bureaucrazy, a civic platform serving 5,300+ Nepalis, which won First Runner-Up at the Kevin Xu Innovation Challenge at Rhodes House, Oxford. I co-founded Digital Kala, which equips Nepal's youth, women, and marginalized communities with the skills, awareness, and confidence to navigate the digital world on their own terms. I am the Module Leader and Lecturer for the Big Data and Data Mining module at Islington College, where I teach 200+ students.",
  "I hold a Research Fellowship at Equitech Futures, where I am also building FuturesHub. Through it I served as a Venture Fellow and Alumni Resident Assistant at Reuben College, University of Oxford.",
  "I serve as an International Gender Champions Youth Champion. I am also a 2025 U.S. Embassy Youth Council (USYC) member.",
];

export type Work = {
  title: string;
  stat?: string;
  statLabel?: string;
  kicker?: string;
  role: string;
  description: string;
  linkLabel: string;
  href: string;
  image: string;
};

export const selectedWork: Work[] = [
  {
    title: "Bureaucrazy",
    image: "/work/bureaucrazy.png",
    stat: "5,300+",
    statLabel: "Nepalis served",
    role: "Technical Lead",
    description:
      "A civic platform that helps Nepalis get through government processes. I lead the technical build, from a RAG chatbot for official documents to a law library and voter tools. It won First Runner-Up at the Kevin Xu Innovation Challenge 2025.",
    linkLabel: "bureaucrazy.co",
    href: "https://bureaucrazy.co",
  },
  {
    title: "Digital Kala",
    image: "/work/digital-kala.png",
    stat: "585+",
    statLabel: "people trained",
    role: "Co-Founder and Technical Lead",
    description:
      "Digital Kala equips Nepal's youth, women, and marginalized communities with the skills, awareness, and confidence to navigate the digital world on their own terms.",
    linkLabel: "digitalkala.org",
    href: "https://digitalkala.org",
  },
  {
    title: "FuturesHub",
    image: "/work/futureshub.png",
    kicker: "Learning platform",
    role: "Research Fellow, Equitech Futures",
    description:
      "An AI-powered learning platform that opens mentorship to people who usually get shut out. I lead the technical build. I also wrote its privacy and data-protection program.",
    linkLabel: "futureshub.com",
    href: "https://futureshub.com",
  },
  {
    title: "Polling Station Simulator",
    image: "/work/polling-simulator.png",
    kicker: "Voter tool",
    role: "Builder, Bureaucrazy",
    description:
      "A walk-through of how voting works in Nepal, made for first-time voters. I built it ahead of the 2026 general election so people can practice before they reach the booth.",
    linkLabel: "Open the simulator",
    href: "#",
  },
  {
    title: "Technology and Digital Governance",
    image: "/work/publication.png",
    kicker: "Publication",
    role: "Author, book chapter",
    description:
      "My chapter in A Guidebook for Voters in Nepal. It looks at AI governance, data privacy, and the digital divide in Nepal's political life.",
    linkLabel: "Read the chapter",
    href: "#",
  },
];

export type Experience = {
  period: string;
  title: string;
  org: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    period: "2025 — Present",
    title: "Technical Lead and Architect, FuturesHub",
    org: "Equitech Futures",
    bullets: [
      "I lead the frontend and technical architecture of FuturesHub, an AI-powered learning platform that widens access to education. I own the system design, the UI and UX direction, and feature delivery from end to end.",
      "I work closely with the backend team on API contracts, data models, and release planning, so features ship across the full stack.",
      "I started the platform's privacy and data-protection program and wrote the first draft of the privacy policy.",
    ],
  },
  {
    period: "2025 — Present",
    title: "Technical Lead",
    org: "Bureaucrazy",
    bullets: [
      "I lead the technical build of Bureaucrazy, a civic platform that helps 5,300+ Nepalis get through government processes.",
      "I built the RAG chatbot for official documents, the law library, and voter tools including the Polling Station Simulator.",
      "Bureaucrazy won First Runner-Up at the Kevin Xu Innovation Challenge 2025. I presented it at the Rhodes House Forum in Oxford.",
    ],
  },
  {
    period: "2024 — Present",
    title: "Module Leader, Big Data and Data Mining",
    org: "Islington College",
    bullets: [
      "I teach Big Data and Data Mining to 200+ undergraduate AI students.",
      "My modules cover dimensional modelling, Apache Spark, Databricks, and OLAP systems, with dedicated units on data ethics and algorithmic bias.",
      "I supervise final year projects and build the labs, assessments, and reading lists.",
    ],
  },
  {
    period: "2023 — Present",
    title: "Co-Founder and Technical Lead",
    org: "Digital Kala",
    bullets: [
      "I co-founded Digital Kala, which equips Nepal's youth, women, and marginalized communities with the skills, awareness, and confidence to navigate the digital world on their own terms.",
      "We have reached 585+ people and train women in villages who have had little access to technology.",
      "I built the curriculum and trained local facilitators so each community keeps teaching after we leave.",
    ],
  },
  {
    period: "2022 — 2024",
    title: "Data Scientist",
    org: "CloudFactory",
    bullets: [
      "I led the identity fraud detection system using anomaly detection and XGBoost.",
      "I built supervised models to predict worker performance from historical data.",
      "I ran AI knowledge sessions for engineering teams and stakeholders.",
    ],
  },
];

export type Writing = {
  title: string;
  source: string;
  href: string;
};

export const writing: Writing[] = [
  {
    title: "Technology and Digital Governance",
    source: "Chapter, A Guidebook for Voters in Nepal",
    href: "#",
  },
  {
    title: "HERstory Amplified",
    source: "Medium, on women in science and technology",
    href: "#",
  },
  {
    title: "A Beginner's Guide to IoT with ESP32",
    source: "Medium, a hands-on hardware walk-through",
    href: "#",
  },
];

export const speaking = {
  intro:
    "Across mentorship, panels, and talks I have reached 500+ people at more than ten institutions. As an IGC Youth Champion I was paired with Sameer Chauhan, the Director of the UN International Computing Centre, and I joined him on the IGC Global Podcast in 2024. I am also a 2025 U.S. Embassy Youth Council (USYC) member.",
  mentorship: [
    {
      title: "DeerHack",
      description:
        "I mentored the team that won the Ed-Tech track at Deerwalk Institute of Technology.",
    },
    {
      title: "Shequal Foundation Hackathon",
      description: "I mentored builders at this all-female hackathon.",
    },
    {
      title: "Hack-A-Thon",
      description:
        "I mentored at Nepal's first school-level hackathon, which brought together 53 teams from 40 schools.",
    },
    {
      title: "Women LEAD Nepal",
      description:
        "I facilitate sessions for youth leaders, including one on ethics and bias in AI.",
    },
  ],
  panels: [
    {
      title: "IGC Global Podcast",
      description:
        "I was the featured guest in 2024, alongside the Director of the UNICC.",
    },
    {
      title: "Empower Her, Kathmandu University",
      description: "I joined the panel on women in technology.",
    },
    {
      title: "Empowering Women in Tech",
      description: "I sat on the panel at the Janakpur Tech Bootcamp.",
    },
    {
      title: "Data Symposium 2024, King's College",
      description: "I was a panelist on data and its social impact.",
    },
    {
      title: "SHELITS Programme",
      description: "I spoke as a guest for the KU AI Club and NAST.",
    },
  ],
  topics: [
    "AI ethics",
    "AI governance",
    "Data privacy",
    "Women in technology",
    "Digital inclusion",
    "Data skills",
  ],
};

export type Award = {
  title: string;
  description: string;
};

export const awards: Award[] = [
  {
    title: "Kevin Xu Innovation Challenge",
    description: "First Runner-Up. Rhodes House, Oxford. 2025.",
  },
  {
    title: "Best Final Year IT Project",
    description: "London Metropolitan University, among 750+ projects.",
  },
  {
    title: "Sujata Baskota Changemaker Award",
    description: "For grassroots digital literacy with Digital Kala.",
  },
];

export type Project = {
  title: string;
  description: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "Chess Engine (MinMax Algo)",
    description:
      "I had no idea how to play chess, so I taught a computer to play it with a MinMax algorithm and learned the game alongside it.",
    href: "https://github.com/Karmasta13",
  },
  {
    title: "Ropey DVD Management System",
    description:
      "A system that helps a DVD store track rentals, returns, and the details of its members.",
    href: "https://github.com/Karmasta13",
  },
  {
    title: "Karmasta Music Store",
    description:
      "A prototype music store site built with XML for a hypothetical company looking to go online.",
    href: "https://github.com/Karmasta13",
  },
  {
    title: "Berkeley College System",
    description:
      "A web database system for a hypothetical college that handles full CRUD operations.",
    href: "https://github.com/Karmasta13",
  },
  {
    title: "66 Days of Data",
    description:
      "A personal challenge inspired by Ken Jee to build daily data science habits and share the work.",
    href: "https://github.com/Karmasta13",
  },
  {
    title: "Certification Station",
    description:
      "A place where I keep my certificates for reference and the occasional show-and-tell.",
    href: "https://github.com/Karmasta13",
  },
];
