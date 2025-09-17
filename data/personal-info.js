// ========================================
// PERSONAL INFORMATION & CONTACT DATA
// ========================================
// Edit this file to update your personal information

const personalInfo = {
  // Basic Information
  name: "Labbi Karmacharya",
  title: "Namaste, my name is",
  subtitle: "I am a data scientist based in Kathmandu, Nepal. I have been working in this field for 4+ years.",
  location: "Kathmandu, Nepal",
  
  // Contact Information
  contact: {
    // email: "karmasta13@gmail.com",
    linkedin: "https://linkedin.com/in/karmasta13",
    github: "https://github.com/karmasta13",
    twitter: "https://twitter.com/karmasta13"
  },
  
  // CV/Resume
  cv: {
    filename: "git_cv.pdf",
    displayName: "Download CV"
  },
  
  // Profile Images
  images: {
    profile: "./assets/profile.png",
    about: "./assets/about.jpg",
    logo: "./assets/logo.png",
    favicon: "./assets/favicon.png"
  },
  
  // About Section
  about: {
    description: `I am a passionate data scientist and researcher with expertise in machine learning, 
    data analysis, and research methodologies. Currently working as a Research Fellow at Equitech Futures 
    and serving as a Module Leader at Islington College.`,
    
    highlights: [
      "Research Fellow at Equitech Futures",
      "Module Leader at Islington College", 
      "Founder of Digital Kala",
      "Expert in Machine Learning & Data Analysis"
    ],
    
    skills: [
      "Python", "R", "SQL", "Machine Learning", "Data Analysis", 
      "Research", "Statistics", "Deep Learning", "Data Visualization"
    ]
  },
  
  // Social Links for Footer
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com/in/karmasta13", icon: "uil-linkedin" },
    { name: "GitHub", url: "https://github.com/karmasta13", icon: "uil-github" },
    { name: "Twitter", url: "https://twitter.com/karmasta13", icon: "uil-twitter" },
    { name: "Email", url: "mailto:karmasta13@gmail.com", icon: "uil-envelope" }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = personalInfo;
}
