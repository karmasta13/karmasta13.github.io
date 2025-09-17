// Professional Constellation JavaScript
const constellationGrid = document.querySelector('.constellation-grid');
const experienceModal = document.getElementById('experienceModal');
const modalClose = document.getElementById('modalClose');

// Color mapping - only yellow for current roles, gray for past roles
const getColorClass = (experience) => {
  return experience.date.includes('Present') ? 'yellow' : 'gray';
};

// Create constellation cards
const createConstellationCards = () => {
  constellationGrid.innerHTML = '';
  
  // Flatten all experiences into individual cards
  const allExperiences = [];
  
  servicesData.forEach((service, serviceIndex) => {
    service.experiences.forEach(experience => {
      allExperiences.push({
        ...experience,
        serviceTitle: service.title,
        serviceIndex,
        category: service.category,
        colorClass: getColorClass(experience)
      });
    });
  });
  
  // Sort all experiences by date (newest first)
  const sortedExperiences = allExperiences.sort((a, b) => {
    const getDateValue = (dateStr) => {
      if (dateStr.includes('Present')) return new Date('2099-12-31'); // Current roles first
      const parts = dateStr.split(' - ');
      return new Date(parts[0]);
    };
    
    const aDate = getDateValue(a.date);
    const bDate = getDateValue(b.date);
    return bDate - aDate; // Newest first
  });
  
  // Create cards for each experience
  sortedExperiences.forEach((experience, index) => {
    const card = document.createElement('div');
    card.className = 'experience-card';
    card.setAttribute('data-category', experience.category);
    
    const isCurrent = experience.date.includes('Present');
    const companyName = experience.experienceTitle.replace('@ ', '');
    
    card.innerHTML = `
      <div class="card-header">
        <div class="card-title">
          <div class="card-icon ${experience.colorClass}"></div>
          <h3 class="role-name">${experience.serviceTitle}</h3>
          <span class="role-number">#${index + 1}</span>
          ${isCurrent ? '<i class="uil uil-star star-icon"></i>' : ''}
        </div>
      </div>
      <h4 class="company-name">${companyName}</h4>
      <p class="experience-date">${experience.date}</p>
    `;
    
    // Set CSS custom property for rotation
    const rotations = [-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1];
    card.style.setProperty('--card-rotation', `${rotations[index]}deg`);
    
    // Add click event to open modal
    card.addEventListener('click', () => {
      openExperienceModal(experience, experience, experience.colorClass);
    });
    
    constellationGrid.appendChild(card);
  });
};

// Open experience modal
const openExperienceModal = (experience, primaryExperience, colorClass) => {
  const modal = experienceModal;
  const isCurrent = experience.date.includes('Present');
  
  // Update modal content
  modal.querySelector('.role-icon').className = `role-icon ${colorClass}`;
  modal.querySelector('.role-title').textContent = experience.serviceTitle;
  modal.querySelector('.current-badge').style.display = isCurrent ? 'inline-block' : 'none';
  modal.querySelector('.company-name').textContent = experience.experienceTitle.replace('@ ', '');
  modal.querySelector('.date').textContent = experience.date;
  modal.querySelector('.company-link').href = experience.companyLink;
  
  // Create role summary (first description item)
  const summary = experience.description[0] || 'Leading initiatives in data science and technology solutions.';
  modal.querySelector('.summary-text').textContent = summary;
  
  // Update achievements list
  const achievementsList = modal.querySelector('.achievements-list');
  achievementsList.innerHTML = '';
  
  experience.description.forEach(achievement => {
    const li = document.createElement('li');
    li.textContent = achievement;
    achievementsList.appendChild(li);
  });
  
  // Update skills
  const skillsContainer = modal.querySelector('.skills-container');
  skillsContainer.innerHTML = '';
  
  experience.technologies.forEach(skill => {
    const tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.textContent = skill;
    skillsContainer.appendChild(tag);
  });
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Close modal
const closeModal = () => {
  experienceModal.classList.remove('active');
  document.body.style.overflow = 'auto';
};

// Event listeners
modalClose.addEventListener('click', closeModal);
experienceModal.addEventListener('click', (e) => {
  if (e.target === experienceModal) {
    closeModal();
  }
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && experienceModal.classList.contains('active')) {
    closeModal();
  }
});

// Initialize constellation
document.addEventListener('DOMContentLoaded', () => {
  createConstellationCards();
});

// Add CSS for the technology tags
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .experience__technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.5rem;
    }
    
    .tech-tag {
      display: inline-block;
      padding: 0.3rem 1rem;
      background: var(--color-gray-200);
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--color-gray-600);
      transition: var(--transition);
    }
    
    .tech-tag:hover {
      background: var(--color-primary);
      color: white;
      transform: translateY(-3px);
    }
    
    .services__right {
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    @media (max-width: 768px) {
      .services__container {
        grid-template-columns: 1fr;
      }
      
      .services__container::before {
        display: none;
      }
      
      .service__item::before {
        display: none;
      }
      
      .services__left {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      
      .service__item {
        padding: 0.5rem 1rem;
        border-radius: var(--radius-4);
        border: 1px solid var(--color-gray-300);
        border-left: 3px solid transparent;
      }
      
      .service__item:hover,
      .service__item.active {
        transform: translateY(-5px);
      }
      
      .service__item span {
        display: none;
      }
      
      .services__right {
        padding: 1.5rem;
      }
    }
  </style>
`);


/// ---------- mixitup --------------
// MixItUp filtering removed as per request (no desktop/mobile filters)



/// ---------- toggle --------------
const navMenu = document.querySelector('.nav__menu')
const navOpenBtn = document.querySelector('.nav__toggle-open')
const navClosenBtn = document.querySelector('.nav__toggle-close')

const openNavHandler = () => {
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navClosenBtn.style.display = 'inline-block';

}
const closeNavHandler = () => {
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navClosenBtn.style.display = 'none';

}



navOpenBtn.addEventListener('click', openNavHandler)
navClosenBtn.addEventListener('click', closeNavHandler)

// close nam menu on click of nav link on small screen
const navItems = navMenu.querySelectorAll('a');
if(window.innerWidth < 768){
    navItems.forEach(item => {
        item.addEventListener('click',closeNavHandler)
    }
        )
}


/// ---------- theme toggle button --------------

document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.querySelector('.nav__theme-btn');

    const getPreferredTheme = () => {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'dark'; // Default to dark theme
    };

    const applyTheme = (theme) => {
      document.body.classList.toggle('dark', theme === 'dark');
    };

    // Initialize theme
    applyTheme(getPreferredTheme());

    // Toggle theme
    themeBtn.addEventListener('click', () => {
      const next = document.body.classList.contains('dark') ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });

    // Loading overlay: hide once DOM is ready
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
      loadingOverlay.style.display = 'none';
    }
});



//DOM load event
window.addEventListener("DOMContentLoaded", () => {
    const spotlight = document.querySelector(".spotlight");
    window.addEventListener("mousemove", (e) => updateSpotlight(e));
    window.addEventListener("mousedown", (e) => {
      updateSpotlight(e);
    });
    window.addEventListener("mouseup", (e) => {
      updateSpotlight(e);
    });
    function updateSpotlight(e) {
      spotlight.style = `background: radial-gradient(600px at ${e.pageX}px ${e.pageY}px, rgba(29, 78, 216, 0.15), transparent 80%);`;
    }
  });

const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById("copyright");
    copyrightElement.innerHTML = `${currentYear} Karmacharya &copy; All Rights Reserved: Revised on July 2024`;


const indexPage = document.getElementById('index-page');
const addPage = document.getElementById('add-page');

function navigateToIndex() {
    addPage.classList.remove('active');
    indexPage.classList.add('active');
}

function navigateToAdd() {
    indexPage.classList.remove('active');
    addPage.classList.add('active');
}

    // Add this to your existing JavaScript
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    
    // Highlight active section in navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav__menu a');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute('id');
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

//   // Animate skill bars when they come into view
// const animateSkillBars = () => {
//     const skillBars = document.querySelectorAll('.skill__progress');
    
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const progress = entry.target.getAttribute('data-progress');
//           entry.target.style.width = progress;
//           observer.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.5 });
    
//     skillBars.forEach(bar => {
//       observer.observe(bar);
//     });
//   };
  
//   // Call after DOM is loaded
//   document.addEventListener('DOMContentLoaded', animateSkillBars);


// Add scroll animation
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      fadeInObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

fadeElements.forEach(element => {
  fadeInObserver.observe(element);
});



// Scroll progress ring functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');
const progressRing = document.querySelector('.progress-ring-circle');

if (scrollTopBtn && progressRing) {
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }

    // Update progress ring
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    const circumference = 125.6; // 2 * π * 20 = 125.6
    const offset = circumference - (scrollPercent / 100) * circumference;
    
    progressRing.style.strokeDashoffset = offset;
  });

  // Scroll to top functionality
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

  // Animate timeline connector
const animateTimelineConnector = () => {
    const timelineConnector = document.querySelector('.services__container::before');
    const experienceSection = document.getElementById('experience');
    
    if (!timelineConnector || !experienceSection) return;
    
    window.addEventListener('scroll', () => {
      const experienceTop = experienceSection.offsetTop;
      const experienceHeight = experienceSection.offsetHeight;
      const windowScroll = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the experience section is in view
      const inView = (windowScroll + windowHeight) - experienceTop;
      const percentInView = Math.min(Math.max(inView / experienceHeight, 0), 1);
      
      // Style for pseudo-element can't be directly modified, so we'll add a variable
      document.documentElement.style.setProperty('--timeline-progress', `${percentInView * 100}%`);
    });
    
    // Add the variable to your CSS
    document.head.insertAdjacentHTML('beforeend', `
      <style>
        :root {
          --timeline-progress: 0%;
        }
        
        .services__container::before {
          height: var(--timeline-progress);
          transition: height 0.1s ease;
        }
      </style>
    `);
  };
  
  document.addEventListener('DOMContentLoaded', animateTimelineConnector);