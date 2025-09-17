// ========================================
// PROJECTS DATA
// ========================================
// Edit this file to add, remove, or modify your projects

const projectsData = [
  {
    id: 1,
    title: "Chess Engine (MinMax Algo)",
    description: "As someone who had no idea on chess, I needed a partner to learn it. What better partner than the AI? So, I taught computer to play chess  and in the same way learned it with it.",
    image: "./assets/project1.png",
    category: "data-science",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Research"],
    links: {
      github: "https://github.com/karmasta13/academics-station/tree/main/Karmasta%20Music%20Store",
      live: "https://github.com/karmasta13/academics-station/tree/main/Karmasta%20Music%20Store"
    },
    featured: true,
    order: 1
  },
  {
    id: 2,
    title: "Ropey DVD Management System",
    description: "The primary goal of this system is to help Ropey DVDs manage their rented and returned DVDs. It also assists them in managing the details of various members of their store.",
    image: "./assets/project2.png",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    links: {
      github: "https://github.com/karmasta13/ropey-system",
      live: "https://github.com/karmasta13/ropey-system"
    },
    featured: false,
    order: 2
  },
  {
    id: 3,
    title: "Karmasta Music Store",
    description: "This is a project that designs a system for a music store using XML development. This website is simply a prototype for a hypothetical company looking to build a website.",
    image: "./assets/project3.png",
    category: "web",
    technologies: ["XML", "HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/karmasta13/academics-station/tree/main/Karmasta%20Music%20Store",
      live: "https://github.com/karmasta13/academics-station/tree/main/Karmasta%20Music%20Store"
    },
    featured: false,
    order: 3
  },
  {
    id: 4,
    title: "Berkeley College System",
    description: "The database system has been developed and designed for a hypothetical college. According to the case study, the college requires the development of a web-based system capable of performing basic CRUD functions.",
    image: "./assets/project4.png",
    category: "web",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/karmasta13/academics-station/tree/main/berkeley",
      live: "https://github.com/karmasta13/academics-station/tree/main/berkeley"
    },
    featured: false,
    order: 4
  },
  {
    id: 5,
    title: "66 Days of Data",
    description: "66 Days of Data journey - a personal challenge inspired by Ken Jee to establish great data science habits through daily practice and sharing my work.",
    image: "./assets/project5.png",
    category: "data-science",
    technologies: ["Python", "Data Science", "Data Analysis", "Data Visualization"],
    links: {
      github: "https://github.com/karmasta13/Learning-Station/tree/main/66-days-of-data",
      live: "https://github.com/karmasta13/Learning-Station/tree/main/66-days-of-data"
    },
    featured: true,
    order: 5
  },
  {
    id: 6,
    title: "Certification Station",
    description: "A platform where I park my bragging rights, safely stored for future reference and spontaneous show-and-tell sessions. Welcome to the station where my  certificates catch the spotlight.",
    image: "./assets/project6.png",
    category: "data-science",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas"],
    links: {
      github: "https://github.com/karmasta13/certificates-station",
      live: "https://github.com/karmasta13/certificates-station"
    },
    featured: false,
    order: 6
  },
  {
    id: 7,
    title: "Data Science Station",
    description: "A space where I dump all my ongoing data science experiments from analysis, recommendation engine, visualizations that have yet to be deployed.",
    image: "./assets/project7.png",
    category: "web",
    technologies: ["Python", "NLP", "Transformers", "Streamlit"],
    links: {
      github: "https://github.com/karmasta13/data-science-station",
      live: "https://github.com/karmasta13/data-science-station"
    },
    featured: false,
    order: 7
  },
  {
    id: 8,
    title: "Pyenv Cheatsheet",
    description: "A space for organizing and documenting diverse Python environment experiments using pyenv, encompassing version control, activation, and experimentation with ongoing data science projects.",
    image: "./assets/project8.png",
    category: "data-science",
    technologies: ["Python", "NLP", "Transformers", "Streamlit"],
    links: {
      github: "https://github.com/karmasta13",
      live: "https://github.com/karmasta13"
    },
    featured: true,
    order: 8
  },
  {
    id: 9,
    title: "Git Cheatsheet",
    description: "A space for storing essential commands for version control, enabling efficient tracking, branching, merging, and collaboration in the projects.",
    image: "./assets/project9.png",
    category: "web",
    technologies: ["Git", "GitHub", "Version Control", "Collaboration"],
    links: {
      github: "https://github.com/karmasta13/cheatsheet/blob/main/git.md",
      live: "https://github.com/karmasta13/cheatsheet/blob/main/git.md"
    },
    featured: false,
    order: 9
  },
  {
    id: 10,
    title: "Insider Threat Detection Review",
    description: "I conducted a comprehensive review of the paper and subsequently created a concise presentation summarizing its key findings.",
    image: "./assets/project10.png",
    category: "data-science",
    technologies: ["Python", "NLP", "Transformers", "Streamlit"],
    links: {
      github: "https://github.com/karmasta13/karmasta13.github.io/blob/main/assets/Paper%20Exploration/Paper%20Exploration-%20Insider%20Threat%20Detection%20Based%20on%20Users%E2%80%99%20Mouse%20Movements%20and%20Keystrokes%20Behavior%20.pdf",
      live: "https://github.com/karmasta13/karmasta13.github.io/blob/main/assets/Paper%20Exploration/Paper%20Exploration-%20Insider%20Threat%20Detection%20Based%20on%20Users%E2%80%99%20Mouse%20Movements%20and%20Keystrokes%20Behavior%20.pdf"
    },
    featured: false,
    order: 10
  },
  {
    id: 11,
    title: "IoT with ESP32 Guide",
    description: "This document serves as a foundational resource for individuals eager to learn about Internet of Things (IoT) using the ESP32 microcontroller.",
    image: "./assets/project11.png",
    category: "mobile",
    technologies: ["ESP32", "IoT", "Arduino", "Python"],
    links: {
      github: "https://github.com/karmasta13/iot-station/blob/main/Beginner%20Guide%20Docs/A%20beginner%E2%80%99s%20guide%20to%20IoT%20with%20ESP32.md",
      live: "https://github.com/karmasta13/iot-station/blob/main/Beginner%20Guide%20Docs/A%20beginner%E2%80%99s%20guide%20to%20IoT%20with%20ESP32.md"
    },
    featured: false,
    order: 11
  },
  {
    id: 12,
    title: "HERstory Amplified",
    description: "Through this article, I aim to highlight the remarkable contributions of women in the fields of science and technology, acknowledging their invaluable impact on society.",
    image: "./assets/project12.png",
    category: "blockchain",
    technologies: ["Article", "Women in Science", "Technology"],
    links: {
      github: "https://medium.com/@labbikarmacharya/herstory-amplified-0899b19afea6",
      live: "https://medium.com/@labbikarmacharya/herstory-amplified-0899b19afea6"
    },
    featured: false,
    order: 12
  }
];

// Project Categories
const projectCategories = [
  { name: "All", filter: "all" },
  { name: "Data Science", filter: "data-science" },
  { name: "Web Development", filter: "web" },
  { name: "Mobile", filter: "mobile" },
  { name: "Blockchain", filter: "blockchain" }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projectsData, projectCategories };
}
