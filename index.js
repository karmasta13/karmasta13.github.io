// Enhanced Experience Section JavaScript
const servicesButtons = document.querySelectorAll('.service__item');
const servicesDetails = document.querySelector('.services__right');

const getServices = (category) => {
    const details = servicesData.find(item => item.category === category);
    
    // Fade out current content
    servicesDetails.style.opacity = '0';
    servicesDetails.style.transform = 'translateX(20px)';
    
    setTimeout(() => {
      // Create Experience HTML
      const experienceHTML = details.experiences.map(experience => `
        <div class="experience__content">
          <h3>${details.title} ${experience.experienceTitle}
            <a href="${experience.companyLink}" target="_blank" class="company-link">
              <i class="uil uil-external-link-alt"></i>
            </a>
          </h3>
          <h5>${experience.date}</h5>
          <ul>
            ${experience.description.map(item => `
              <li><i class="uil uil-check-circle experience-icon"></i>${item}</li>
            `).join('')}
          </ul>
          
          <div class="experience__technologies">
            ${experience.technologies.map(tech => `
              <span class="tech-tag">${tech}</span>
            `).join('')}
          </div>
        </div>
      `).join('');
      
      servicesDetails.innerHTML = experienceHTML;
      
      // Fade in new content
      servicesDetails.style.opacity = '1';
      servicesDetails.style.transform = 'translateX(0)';
    }, 300);
  };

const removeActiveClass = () => {
  servicesButtons.forEach(button => {
    button.classList.remove('active');
  });
};

servicesButtons.forEach(item => {
  item.addEventListener('click', () => {
    removeActiveClass();
    const serviceClass = item.classList[1];
    getServices(serviceClass);
    item.classList.add('active');
  });
});

// Initialize with the first experience
getServices('ds');

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
// CommonJS

const containerEl = document.querySelector('.projects__container');
var mixer = mixitup(containerEl, {
    animation: {
        enable:false
    }
});

mixer.filter('*');



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
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    // Add loading overlay for 2 seconds
    const loadingOverlay = document.getElementById('loading-overlay');
    setTimeout(() => {
        loadingOverlay.style.display = 'none'; 
        document.body.classList.add('dark'); 
    }, 0); 
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



// Add this to your JavaScript
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
  });

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