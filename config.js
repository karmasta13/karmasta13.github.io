// ========================================
// PORTFOLIO CONFIGURATION
// ========================================
// Edit this file to customize your portfolio settings

const portfolioConfig = {
  // Site Information
  site: {
    title: "Karmasta - Data Scientist & Researcher",
    description: "Portfolio of Karmasta, a passionate data scientist and researcher with expertise in machine learning and data analysis.",
    keywords: "data scientist, researcher, machine learning, data analysis, portfolio",
    author: "Karmasta",
    url: "https://karmasta13.github.io"
  },

  // Theme Settings
  theme: {
    primaryColor: "#f5c542",        // Main yellow color
    secondaryColor: "#f5a623",      // Secondary yellow
    darkMode: true,                 // Enable dark mode by default
    autoTheme: true,                // Auto-detect system theme
    animations: true,               // Enable animations
    particles: false                // Disable particle effects
  },

  // Layout Settings
  layout: {
    showScrollProgress: true,       // Show scroll progress indicator
    showBackToTop: true,            // Show back to top button
    enableSmoothScroll: true,       // Enable smooth scrolling
    enableParallax: false,          // Disable parallax effects
    maxWidth: "1200px"              // Maximum content width
  },

  // Section Settings
  sections: {
    header: {
      enabled: true,
      showParticles: false,
      showTypingAnimation: false
    },
    about: {
      enabled: true,
      showSkills: true,
      showDownloadCV: true
    },
    experience: {
      enabled: true,
      showConstellation: true,
      showConnectingLines: false,
      enableScrolling: false        // Desktop scrolling disabled
    },
    projects: {
      enabled: true,
      showFilter: true,
      showSearch: true,
      itemsPerPage: 12
    },
    achievements: {
      enabled: true,               // Disabled for now
      showTimeline: true
    },
    contact: {
      enabled: true,
      showForm: false,              // Contact form disabled
      showSocialLinks: true
    }
  },

  // Animation Settings
  animations: {
    duration: 0.6,                  // Animation duration in seconds
    easing: "ease-out",             // Animation easing
    stagger: 0.1,                   // Stagger delay between items
    enableOnScroll: true,           // Enable scroll-triggered animations
    enableOnHover: true             // Enable hover animations
  },

  // Performance Settings
  performance: {
    lazyLoadImages: true,           // Lazy load images
    preloadCriticalImages: true,    // Preload critical images
    enableServiceWorker: false,     // Service worker disabled
    compressAssets: true            // Compress assets
  },

  // SEO Settings
  seo: {
    enableOpenGraph: true,          // Enable Open Graph tags
    enableTwitterCards: true,       // Enable Twitter cards
    enableSchemaMarkup: true,       // Enable structured data
    enableSitemap: false            // Sitemap disabled
  },

  // Analytics (Optional)
  analytics: {
    googleAnalytics: "",            // Google Analytics ID
    googleTagManager: "",           // Google Tag Manager ID
    hotjar: "",                     // Hotjar ID
    mixpanel: ""                    // Mixpanel ID
  },

  // Social Media
  social: {
    linkedin: "https://linkedin.com/in/karmasta13",
    github: "https://github.com/karmasta13",
    twitter: "https://twitter.com/karmasta13",
    email: "karmasta13@gmail.com",
    phone: "+977-9841234567"
  },

  // Contact Form (if enabled)
  contactForm: {
    enabled: false,
    action: "",                     // Form action URL
    method: "POST",
    fields: {
      name: { required: true },
      email: { required: true },
      subject: { required: true },
      message: { required: true }
    }
  }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioConfig;
}
