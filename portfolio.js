// Menu Toggle (Only If Needed)
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menu) {
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
}

// Typing Effect for Swathi's Skills
const typed = new Typed('.multiple-text', {
    strings: [
        'Cybersecurity Enthusiast',
        'Ethical Hacker',
        'Penetration Tester',
        'Web Security Analyst',
        'BCA Student'
    ],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});