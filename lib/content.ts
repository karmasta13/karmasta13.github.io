// Single source of truth for all page content.
// Edit these values — the components read straight from here.

export const profile = {
  name: "Labbi",
  greeting: "नमस्ते, I am",
  title: "Technical Lead and educator building civic tech",
  tagline:
    "I build tools that make complicated systems easier for ordinary people to deal with. My work sits where technology and inclusion meet, and I care about how AI is governed so it serves everyone. It is about making public life accessible to all.",
  // Web3Forms access key, used by the contact and CV request forms.
  web3formsKey: "7f0f2564-43a3-4ee6-ab1b-9221ba5fdcfc",
  contact: {
    email: "contact@labbi.com.np",
    location: "Lalitpur, Nepal",
    instagram: "Tech with Labbi",
    instagramUrl: "https://instagram.com/techwithlabbi",
    githubUrl: "https://github.com/karmasta13",
    linkedinUrl: "https://www.linkedin.com/in/labbi-karmacharya/",
    mediumUrl: "https://medium.com/@labbikarmacharya",
  },
};

export const socials = [
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/labbi-karmacharya/" },
  { label: "GitHub", icon: "github", href: "https://github.com/karmasta13" },
  { label: "Medium", icon: "medium", href: "https://medium.com/@labbikarmacharya" },
  { label: "Instagram", icon: "instagram", href: "https://instagram.com/techwithlabbi" },
  { label: "Email", icon: "mail", href: "mailto:contact@labbi.com.np" },
] as const;

export const stats = [
  { value: "5,300+", label: "Nepalis served through Bureaucrazy" },
  { value: "585+", label: "people trained with Digital Kala" },
  { value: "200+", label: "students taught at Islington College every year" },
];

export const about: string[] = [
  "I build tools that help ordinary people reach their government. I also bring communities that usually get left out into digital life.",
  "I am a  Technical Lead and Research Fellowship at Equitech Futures, where I am also building FuturesHub. Through it I served as a Venture Fellow and Alumni Resident Assistant at Reuben College, University of Oxford.",

  "I am the Technical Lead of Bureaucrazy, a civic platform serving 5,300+ Nepalis, which won First Runner-Up at the Kevin Xu Innovation Challenge at Rhodes House, Oxford. I co-founded Digital Kala, which equips Nepal's youth, women, and marginalized communities with the skills, awareness, and confidence to navigate the digital world on their own terms. I am the Module Leader and Lecturer for the Big Data and Data Mining module at Islington College, where I teach 200+ students.",
  "My work now extends into AI and internet governance. In September 2026 I was a fellow and rapporteur at inSIG at IIT Bombay. I was a 2024 International Gender Champions Youth Champion, and I served on the U.S. Embassy Youth Council in 2025",
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
    title: "FuturesHub",
    image: "/work/futureshub.png",
    kicker: "Learning platform",
    role: "Tech Lead and Research Fellow, Equitech Futures",
    description:
      "An AI-powered learning platform that opens mentorship to people who usually get shut out. I lead the technical build. I also wrote its privacy and data-protection program.",
    linkLabel: "futureshub.com",
    href: "https://futureshub.com",
  },
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
    title: "Polling Station Simulator",
    image: "/work/polling-simulator.png",
    kicker: "Voter tool",
    role: "Builder, Bureaucrazy",
    description:
      "A walk-through of how voting works in Nepal, made for first-time voters. I built it ahead of the 2026 general election so people can practice before they reach the booth.",
    linkLabel: "Open the simulator",
    href: "https://polling-simulator.vercel.app/",
  },
  {
    title: "Technology and Digital Governance",
    image: "/work/publication.png",
    kicker: "Publication",
    role: "Author, book chapter",
    description:
      "My chapter in A Guidebook for Voters in Nepal. It looks at AI governance, data privacy, and the digital divide in Nepal's political life.",
    linkLabel: "Read the chapter",
    href: "https://www.bureaucrazy.co/school-of-democrazy/guidebook-for-voters-in-nepal",
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
    period: "2024 - Present",
    title: "Technical Lead and Research Fellow, FuturesHub",
    org: "Equitech Futures",
    bullets: [
      "I lead the frontend and technical architecture of FuturesHub, an AI-powered learning platform that widens access to education. I own the system design, the UI and UX direction, and feature delivery from end to end.",
      "I work closely with the backend team on API contracts, data models, and release planning, so features ship across the full stack.",
      "I started the platform's privacy and data-protection program and wrote the first draft of the privacy policy.",
    ],
  },
  {
    period: "2025 - Present",
    title: "Technical Lead",
    org: "Bureaucrazy",
    bullets: [
      "I lead the technical build of Bureaucrazy, a civic platform that helps 5,300+ Nepalis get through government processes.",
      "I built the RAG chatbot for official documents, the law library, and voter tools including the Polling Station Simulator.",
      "Bureaucrazy won First Runner-Up at the Kevin Xu Innovation Challenge 2025. I presented it at the Rhodes House Forum in Oxford.",
    ],
  },
  {
    period: "2024 - Present",
    title: "Module Leader, Big Data and Data Mining",
    org: "Islington College",
    bullets: [
      "I teach Big Data and Data Mining to 200+ undergraduate AI students.",
      "My modules cover dimensional modelling, Apache Spark, Databricks, and OLAP systems, with dedicated units on data ethics and algorithmic bias.",
      "I supervise final year projects and build the labs, assessments, and reading lists.",
    ],
  },
  {
    period: "2023 - Present",
    title: "Co-Founder ",
    org: "Digital Kala",
    bullets: [
      "I co-founded Digital Kala, which equips Nepal's youth, women, and marginalized communities with the skills, awareness, and confidence to navigate the digital world on their own terms.",
      "We have reached 585+ people and train women in villages who have had little access to technology.",
      "I built the curriculum and trained local facilitators so each community keeps teaching after we leave.",
    ],
  },
  {
    period: "2022 - 2024",
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
    "Through mentoring and talks, I have reached 500+ people at more than ten institutions. As a 2024 IGC Youth Champion I was paired with Sameer Chauhan, Director of the UN International Computing Centre. I served on the U.S. Embassy Youth Council in 2025.",
  mentorship: [
    {
      title: "DeerHack 2026",
      description:
        "I mentored four teams at Deerwalk Institute of Technology, including the overall winner and the Ed-Tech track winner.",
    },
    {
      title: "Hack-A-Thon",
      description:
        "I mentored at Nepal's first school-level hackathon in 2025 and 2026. It brought together 53 teams from 40 schools.",
    },
    {
      title: "Shequal Foundation Hackathon",
      description: "I mentored builders at this all-female hackathon.",
    },
    {
      title: "People's Data Hackathon",
      description: "I served as an Expert Mentor.",
    },
    {
      title: "Data Crunch 2024, CloudFactory",
      description:
        "I mentored participants at the company's internal data hackathon.",
    },
  ],
  panels: [
    {
      title: "Prashasan Pro launch, Kathmandu",
      description:
        "In June 2026 I moderated a panel on digital governance and Nepal-US commercial diplomacy.",
    },
    {
      title: "Rhodes House Forum, Oxford",
      description:
        "I presented Bureaucrazy at the Kevin Xu Innovation Challenge in 2025.",
    },
    {
      title: "Rotaract Club, Coffee with Career",
      description:
        "In October 2026 I was a guest speaker on careers in tech, and I gave feedback on group career scenario presentations.",
    },
    {
      title: "IGC Global Podcast",
      description:
        "I was a featured guest in November 2024 with the Director of the UNICC, speaking on the digital gender divide.",
    },
    {
      // Check this wording matches your talk
      title: "Equitech Futures Institute",
      description: "I gave a guest talk to the EFI class on building civic tech.",
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
    {
      // Check this wording matches your talk
      title: "Neelgai",
      description: "I spoke on AI and civic tech.",
    },
  ],
  governance: [
    {
      title: "inSIG 2026, IIT Bombay",
      description:
        "I was a fellow and rapporteur for the session on the IGF's permanent mandate.",
    },
    {
      title: "Just AI Nepal",
      description:
        "I contributed to recommendations for Nepal's proposed AI Act.",
    },
    {
      title: "APrIGF 2026, Kathmandu",
      description: "I took part in the Asia Pacific regional IGF.",
    },
    {
      title: "Youth IGF Nepal 2026",
      description: "I joined as a civil society participant.",
    },
  ],
  workshops: [
    {
      title: "European Union Youth Fest 2026, Kathmandu",
      description:
        "I co-facilitated a session on the use of AI, ethics and bias for young people at the EU's youth festival in Nepal.",
    },
    {
      title: "Women LEAD Nepal",
      description:
        "A 2018 alumna, I facilitated a session on ethics, bias and AI for grade 12 student leaders in 2026, with live demos of how AI systems get things wrong.",
    },
    {
      title: "Civic Tech Without Coding, Project Abhaya",
      description:
        "I co-facilitated a two-hour session on AI in government for professionals from many fields.",
    },
    {
      title: "TECH 101, Nepali Women+ in Computing",
      description: "I taught exploratory data analysis and visualization.",
    },
    {
      title: "Code for Nepal",
      description: "I run civic tech workshops as a core team member.",
    },
  ],
  topics: [
    "AI governance",
    "Internet governance",
    "AI ethics",
    "Data privacy",
    "Women in technology",
    "Digital inclusion",
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
    href: "https://github.com/karmasta13/chess-engine",
  },
  {
    title: "Ropey DVD Management System",
    description:
      "A system that helps a DVD store track rentals, returns, and the details of its members.",
    href: "https://github.com/karmasta13/ropey-system",
  },
  {
    title: "Karmasta Music Store",
    description:
      "A prototype music store site built with XML for a hypothetical company looking to go online.",
    href: "https://github.com/karmasta13/academics-station/tree/main/Karmasta%20Music%20Store",
  },
  {
    title: "Berkeley College System",
    description:
      "A web database system for a hypothetical college that handles full CRUD operations.",
    href: "https://github.com/karmasta13/academics-station/tree/main/berkeley",
  },
  {
    title: "66 Days of Data",
    description:
      "A personal challenge inspired by Ken Jee to build daily data science habits and share the work.",
    href: "https://github.com/karmasta13/Learning-Station/tree/main/66-days-of-data",
  },
  {
    title: "Certification Station",
    description:
      "A place where I keep my certificates for reference and the occasional show-and-tell.",
    href: "https://github.com/karmasta13/certificates-station",
  },
];
