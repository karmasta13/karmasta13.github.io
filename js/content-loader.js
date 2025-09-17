// ========================================
// DYNAMIC CONTENT LOADER
// ========================================
// This file automatically loads content from data files

class ContentLoader {
  constructor() {
    this.personalInfo = null;
    this.projectsData = null;
    this.achievementsData = null;
    this.experienceData = null;
  }

  // Load all data files
  async loadAllData() {
    try {
      // Load personal info
      await this.loadScript('data/personal-info.js');
      this.personalInfo = personalInfo;

      // Load projects data
      await this.loadScript('data/projects.js');
      this.projectsData = projectsData;
      this.projectCategories = projectCategories;

      // Load achievements data
      await this.loadScript('data/achievements.js');
      this.achievementsData = achievementsData;

      // Load experience data (already exists)
      await this.loadScript('data.js');
      this.experienceData = servicesData;

      console.log('✅ All data loaded successfully');
      return true;
    } catch (error) {
      console.error('❌ Error loading data:', error);
      return false;
    }
  }

  // Load script dynamically
  loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // Update personal information
  updatePersonalInfo() {
    if (!this.personalInfo) return;

    const info = this.personalInfo;

    // Update header
    document.querySelector('.header__content h1').textContent = info.name;
    document.querySelector('.header__content h4').textContent = info.title;
    document.querySelector('.header__content p').textContent = info.subtitle;

    // Update about section
    document.querySelector('.about__details p').textContent = info.about.description;

    // Update contact links
    const emailLink = document.querySelector('a[href*="mailto"]');
    if (emailLink) emailLink.href = `mailto:${info.contact.email}`;

    // Update CV link
    const cvLink = document.querySelector('a[href*="git_cv.pdf"]');
    if (cvLink) {
      cvLink.href = `./assets/${info.cv.filename}`;
      cvLink.textContent = info.cv.displayName;
    }

    // Update social links in footer
    this.updateSocialLinks();
  }

  // Update social links
  updateSocialLinks() {
    const socialContainer = document.querySelector('.footer__socials');
    if (!socialContainer || !this.personalInfo) return;

    socialContainer.innerHTML = '';
    this.personalInfo.socialLinks.forEach(link => {
      const socialLink = document.createElement('a');
      socialLink.href = link.url;
      socialLink.target = '_blank';
      socialLink.rel = 'noopener noreferrer';
      socialLink.innerHTML = `<i class="${link.icon}"></i>`;
      socialContainer.appendChild(socialLink);
    });
  }

  // Update projects section
  updateProjects() {
    if (!this.projectsData) return;

    const projectsContainer = document.querySelector('.projects__container');
    if (!projectsContainer) return;

    // Clear existing projects
    projectsContainer.innerHTML = '';

    // Sort projects by order
    const sortedProjects = this.projectsData.sort((a, b) => a.order - b.order);

    // Create project elements
    sortedProjects.forEach(project => {
      const projectElement = this.createProjectElement(project);
      projectsContainer.appendChild(projectElement);
    });

    // Update project categories filter
    this.updateProjectCategories();
  }

  // Create project element
  createProjectElement(project) {
    const article = document.createElement('article');
    article.className = `project mix ${project.category}`;
    article.setAttribute('data-order', project.order);

    article.innerHTML = `
      <div class="project__image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project__cta">
        <a href="${project.links.github}" target="_blank" rel="noopener noreferrer">
          <i class="uil uil-github-alt" style="color: grey;"></i>
        </a>
        <a href="${project.links.live}" target="_blank" rel="noopener noreferrer">
          <i class="uil uil-external-link-alt"></i>
        </a>
      </div>
    `;

    return article;
  }

  // Update project categories
  updateProjectCategories() {
    const categoriesContainer = document.querySelector('.projects__categories');
    if (!categoriesContainer || !this.projectCategories) return;

    categoriesContainer.innerHTML = '';
    this.projectCategories.forEach(category => {
      const button = document.createElement('button');
      button.className = 'btn';
      button.textContent = category.name;
      button.setAttribute('data-filter', category.filter);
      categoriesContainer.appendChild(button);
    });
  }

  // Initialize everything
  async init() {
    console.log('🚀 Initializing Content Loader...');
    
    const loaded = await this.loadAllData();
    if (!loaded) {
      console.error('Failed to load data files');
      return;
    }

    // Update all sections
    this.updatePersonalInfo();
    this.updateProjects();

    console.log('✅ Content Loader initialized successfully');
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const loader = new ContentLoader();
  loader.init();
});
