// ========================================
// PROJECTS DATA
// ========================================
// Edit this file to add, remove, or modify your projects

const projectsData = [
  {
    id: 1,
    title: "PureAcrazy Project",
    description: "An innovative data science project that reached the finalist stage at Rhodes House, showcasing cutting-edge solutions and impactful research in our field.",
    image: "./assets/project1.png",
    category: "data-science",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Research"],
    links: {
      github: "https://github.com/karmasta13/pureacrazy",
      live: "https://pureacrazy.com"
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
      github: "https://github.com/karmasta13",
      live: "https://github.com/karmasta13"
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
      github: "https://github.com/karmasta13",
      live: "https://github.com/karmasta13"
    },
    featured: false,
    order: 4
  },
  {
    id: 5,
    title: "Data Analysis Dashboard",
    description: "A comprehensive dashboard for analyzing business metrics and KPIs with interactive visualizations and real-time data processing capabilities.",
    image: "./assets/project5.png",
    category: "data-science",
    technologies: ["Python", "Django", "Chart.js", "PostgreSQL"],
    links: {
      github: "https://github.com/karmasta13",
      live: "https://github.com/karmasta13"
    },
    featured: true,
    order: 5
  },
  {
    id: 6,
    title: "Machine Learning Model",
    description: "Advanced machine learning model for predictive analytics with high accuracy and real-time processing capabilities.",
    image: "./assets/project6.png",
    category: "data-science",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas"],
    links: {
      github: "https://github.com/karmasta13",
      live: "https://github.com/karmasta13"
    },
    featured: false,
    order: 6
  },
  {
    id: 7,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, payment integration, and inventory management.",
    image: "./assets/project7.png",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    links: {
      github: "https://github.com/karmasta13",
      live: "https://github.com/karmasta13"
    },
    featured: false,
    order: 7
  },
  {
    id: 8,
    title: "Research Paper Analysis Tool",
    description: "AI-powered tool for analyzing research papers and extracting key insights using natural language processing.",
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
    title: "Portfolio Website",
    description: "Responsive portfolio website built with modern web technologies and optimized for performance.",
    image: "./assets/project9.png",
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    links: {
      github: "https://github.com/karmasta13",
      live: "https://karmasta13.github.io"
    },
    featured: false,
    order: 9
  },
  {
    id: 10,
    title: "Data Visualization App",
    description: "Interactive data visualization application with multiple chart types and export capabilities.",
    image: "./assets/project10.png",
    category: "data-science",
    technologies: ["D3.js", "React", "Python", "Flask"],
    links: {
      github: "https://github.com/karmasta13",
      live: "https://github.com/karmasta13"
    },
    featured: false,
    order: 10
  },
  {
    id: 11,
    title: "Mobile App Development",
    description: "Cross-platform mobile application with offline capabilities and real-time synchronization.",
    image: "./assets/project11.png",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Redux", "JavaScript"],
    links: {
      github: "https://github.com/karmasta13",
      live: "https://github.com/karmasta13"
    },
    featured: false,
    order: 11
  },
  {
    id: 12,
    title: "Blockchain Project",
    description: "Decentralized application built on blockchain technology with smart contract integration.",
    image: "./assets/project12.png",
    category: "blockchain",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    links: {
      github: "https://github.com/karmasta13",
      live: "https://github.com/karmasta13"
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
