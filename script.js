// Show Menu
const navMenu = document.querySelector('[nav-menu]'),
    navToggle = document.querySelector('[nav-toggle]'),
    navClose = document.querySelector('[nav-close]');

// _____Menu Show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
};

// _____Menu Show
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
};
// Show Menu

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    // When we Click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
// Remove Menu Mobile



// Add Blur to Header
const blurHeader = () => {
    const header = document.querySelector('[header]');
    // When we scroll is greater than 50 viewport height, add the scroll-header class
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
}

window.addEventListener('scroll', blurHeader);
// Add Blur to Header




// EmailJS
const contactForm = document.querySelector('[contact-form]'),
    contactMessage = document.querySelector('[contact-message]');

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID, templateID, #form, publicKey
    emailjs.sendForm('service_80y6nkn', 'template_0xiggdg', '#contact-form', 'Q10dsxcTxMp7CbAdy')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅';

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            // Clear input fields
            contactForm.reset();
        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌';
        });
};

contactForm.addEventListener('submit', sendEmail);
// EmailJS



// Show Scroll Up
const scrollUp = () => {
    const scrollUp = document.querySelector('[scroll-up]');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the tag with the scroll up
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);
// Show Scroll Up




// Scroll Section Active Link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);
// Scroll Section Active Link



// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations repeat
});

sr.reveal(`.home-data, .home-social, .contact-container, .footer-container`);
sr.reveal(`.home-image`, {origin: 'bottom'});
sr.reveal(`.about-data`, {origin: 'left'});
sr.reveal(`.about-image, .skills-content`, {origin: 'right'});
sr.reveal(`.services-card, .projects-card`, {interval: 100});
// Scroll Reveal Animation