# 📝 Portfolio Editing Guide

## 🎯 Quick Start
This portfolio is designed for easy editing! You can update all content without touching HTML, CSS, or JavaScript files.

## 📁 File Structure
```
data/
├── personal-info.js    # Your personal information & contact details
├── projects.js         # All your projects
├── achievements.js     # Awards & recognition
└── experience.js       # Professional experience (already exists)
```

## 🔧 How to Edit

### 1. Personal Information (`data/personal-info.js`)
Edit your basic info, contact details, and about section:

```javascript
const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ... edit any field you want
};
```

### 2. Projects (`data/projects.js`)
Add, remove, or modify projects:

```javascript
{
  id: 1,
  title: "Project Name",
  description: "Project description...",
  image: "./assets/project1.png",
  category: "data-science", // or "web", "mobile", "blockchain"
  technologies: ["Python", "React", "Node.js"],
  links: {
    github: "https://github.com/yourusername",
    live: "https://yourproject.com"
  },
  featured: true, // true = highlighted project
  order: 1 // display order
}
```

### 3. Achievements (`data/achievements.js`)
Add your awards and recognition:

```javascript
{
  id: 1,
  title: "Award Name",
  date: "2024",
  role: "Your Role",
  organization: "Organization Name",
  description: "What you achieved...",
  icon: "uil-trophy", // Icon from Unicons
  tags: ["Tag1", "Tag2"],
  featured: true,
  order: 1
}
```

## 🎨 Available Icons
Use any Unicons icon name (without the "uil-" prefix):
- `uil-trophy` - Trophy
- `uil-medal` - Medal
- `uil-graduation-cap` - Graduation cap
- `uil-award` - Award
- `uil-star` - Star
- `uil-certificate` - Certificate

## 📊 Project Categories
- `data-science` - Data Science & ML projects
- `web` - Web development projects
- `mobile` - Mobile app projects
- `blockchain` - Blockchain projects

## 🖼️ Adding Images
1. Place images in the `assets/` folder
2. Update the `image` field in your data files
3. Use relative paths: `"./assets/your-image.png"`

## 🚀 Adding New Sections
To add a new section (like achievements):
1. Create a data file in `data/` folder
2. Add the HTML structure in `index.html`
3. Add CSS styles in `style.css`
4. Add JavaScript functionality in `index.js`

## 📱 Responsive Design
The portfolio automatically adapts to:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (below 768px)

## 🎯 Best Practices
1. **Keep descriptions concise** - 2-3 sentences max
2. **Use high-quality images** - 800x600px recommended
3. **Update regularly** - Keep your portfolio fresh
4. **Test changes** - Always preview before publishing

## 🔄 Making Changes Live
1. Edit the data files
2. Save changes
3. Refresh your browser
4. Changes appear immediately!

## 🆘 Need Help?
- Check the console for errors (F12 → Console)
- Ensure all image paths are correct
- Verify JSON syntax in data files
- Make sure all required fields are filled

## 📞 Support
If you need help with advanced customizations, the codebase is well-organized and documented for easy modification.

---
**Happy Editing! 🎉**
