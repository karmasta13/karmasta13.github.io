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