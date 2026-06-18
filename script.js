// =========================
// MOBILE NAVBAR TOGGLE
// =========================

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-menu");
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

// =========================
// NAVIGATION LINKS
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

let clicked = false;

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        clicked = true;

        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        // Update active link immediately
        navLinks.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");

        // Close mobile menu
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");

        // Smooth scroll
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        setTimeout(() => {
            clicked = false;
        }, 800);
    });
});

// =========================
// SCROLL EVENTS
// =========================

window.addEventListener("scroll", () => {

    // Sticky header
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);

    if (clicked) return;

    let currentSection = "";

    sections.forEach(section => {
        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }
    });
});

// =========================
// SCROLL REVEAL
// =========================

if (typeof ScrollReveal !== "undefined") {

    ScrollReveal({
        distance: "80px",
        duration: 2000,
        delay: 300
        // reset: true
    });

    ScrollReveal().reveal(
        ".home-content, .heading",
        { origin: "top" }
    );

    ScrollReveal().reveal(
        ".home-img, .skills-container, .works-box, .contact form",
        { origin: "bottom" }
    );

    ScrollReveal().reveal(
        ".home-content h1, .about-img",
        { origin: "left" }
    );

    ScrollReveal().reveal(
        ".home-content p, .about-content",
        { origin: "right" }
    );
}

// =========================
// TYPED JS
// =========================

if (typeof Typed !== "undefined") {

    new Typed(".multiple-text", {
        strings: [
            "Fresno State Student",
            "Future Teacher",
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

}