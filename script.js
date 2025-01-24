/*
Scrolling animation scripts
*/

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Add scroll event listener
document.addEventListener("scroll", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add("active");
        }
    });
});

// Trigger animations for already-visible elements on load
document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add("active");
        }
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// Select all fade-in elements
document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

console.log("Fade-in animaitions loaded properly");

/*
This is header scrolling scripts
*/

// Select the header element
const header = document.querySelector("header");

let lastScrollY = 0;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        header.classList.add("hidden");
    } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        header.classList.remove("hidden");
        header.classList.add("visible");
    } else if (currentScrollY <= 100) {
        // At the top of the page
        header.classList.remove("hidden");
        header.classList.remove("visible");
    }

    lastScrollY = currentScrollY;
});

/*
Hamburger menu scripting
*/

// Select hamburger menu and off-screen menu elements
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

// Toggle the menu on click
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInsideMenu = offScreenMenu.contains(event.target);
    const isClickOnHamMenu = hamMenu.contains(event.target);

    // Close menu if click is outside both the menu and the hamburger icon
    if (!isClickInsideMenu && !isClickOnHamMenu) {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
    }
});