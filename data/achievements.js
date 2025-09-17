// ========================================
// ACHIEVEMENTS & RECOGNITION DATA
// ========================================
// Edit this file to add, remove, or modify your achievements

const achievementsData = [
  {
    id: 1,
    title: "Research Fellowship",
    date: "July 2025",
    role: "Research Fellow & Resident Assistant",
    organization: "Oxford University",
    description: "Conducted advanced research at Oxford University as a Research Fellow and Resident Assistant. Gained invaluable experience in academic research methodologies and international collaboration.",
    icon: "uil-graduation-cap",
    tags: ["Oxford University", "Research", "International"],
    featured: true,
    order: 1
  },
  {
    id: 2,
    title: "Rhodes House Finalist",
    date: "2024",
    role: "PureAcrazy Project",
    organization: "Rhodes House",
    description: "Our innovative PureAcrazy project reached the finalist stage at Rhodes House, showcasing cutting-edge solutions and impactful research in our field.",
    icon: "uil-trophy",
    tags: ["Rhodes House", "Finalist", "Innovation"],
    featured: true,
    order: 2
  },
  {
    id: 3,
    title: "Final Year Project Winner",
    date: "College",
    role: "Outstanding Academic Achievement",
    organization: "College",
    description: "Recognized for excellence in final year project development, demonstrating exceptional technical skills and innovative problem-solving capabilities.",
    icon: "uil-medal",
    tags: ["Academic Excellence", "Innovation", "Leadership"],
    featured: true,
    order: 3
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = achievementsData;
}
