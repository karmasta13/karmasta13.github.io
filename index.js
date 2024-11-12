const servicesButtons = document.querySelectorAll('.service__item');
const servicesDetails = document.querySelector('.services__right'); // Select a single .services__right element

const getServices = (category) => {
    const details = servicesData.find(item => item.category === category);

    const experienceHTML = details.experiences.map(experience => `
        <h3>${details.title} ${experience.experienceTitle}</h3>
        <h5>${experience.date}</h5>
        <ul>
            ${experience.description.map(item => `<li><i class="uil uil-caret-right experience-icon""></i>${item}</li>`).join('')}
        </ul>
        <br><br>
    `).join('');

    servicesDetails.innerHTML = experienceHTML;
}




const removeActiveClass = () => {
    servicesButtons.forEach(button => {
        button.classList.remove('active');
    })
}


servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass();
        const serviceClass = item.classList[1];
        getServices(serviceClass);
        item.classList.add('active');
    })
})

getServices('ds');


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

// You can call these functions when navigating using links or buttons
    





