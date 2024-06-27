document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                updateNavLinks(id);
            }
        });
    }, options);

    function updateNavLinks(activeId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    }

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

    // Update nav links on initial load
    const activeSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });

    if (activeSection) {
        updateNavLinks(activeSection.getAttribute('id'));
    }
});

function togglelight(checkbox) {
    const body = document.body;
    const nav = document.querySelector("nav");
    const menu = document.querySelector(".menu-toggle");
    const footer = document.querySelector("footer");

    const homeSection = document.getElementById("home");
    const projectsSection = document.getElementById("projects");
    const skillsSection = document.getElementById("skills");
    const educationSection = document.getElementById("education");

    if (checkbox.checked) {
        const typingText = document.querySelector(".dark-mode-typing-text");
        const timeline = document.querySelectorAll(".dark-mode-timeline-content");

        body.classList.remove("dark-mode-bd");
        body.classList.add("light-mode-bd");

        homeSection.classList.remove("dark-mode-section");
        homeSection.classList.add("light-mode-section");

        projectsSection.classList.remove("dark-mode-bd");
        projectsSection.classList.add("light-mode-bd");

        skillsSection.classList.remove("dark-mode-section");
        skillsSection.classList.add("light-mode-section");

        educationSection.classList.remove("dark-mode-bd");
        educationSection.classList.add("light-mode-bd");

        if (menu) {
            menu.style.color = "#000"
        }


        if (footer) {
            footer.style.backgroundColor = "#f8f8f8"
        }

        if (nav) {
            nav.classList.remove("dark-mode-nav");
            nav.classList.add("light-mode-nav");
            nav.style.backgroundColor = "#f8f8f8";
        }

        if (typingText) {
            typingText.classList.remove("dark-mode-typing-text");
            typingText.classList.add("light-mode-typing-text");
        }

        timeline.forEach(timeline => {
            timeline.classList.remove("dark-mode-timeline-content")
            timeline.classList.add("light-mode-timeline-content");
        });
    } else {
        const typingText = document.querySelector(".light-mode-typing-text");
        const timeline = document.querySelectorAll(".light-mode-timeline-content");

        body.classList.remove("light-mode-bd");
        body.classList.add("dark-mode-bd");

        homeSection.classList.remove("light-mode-section");
        homeSection.classList.add("dark-mode-section");

        projectsSection.classList.remove("light-mode-bd");
        projectsSection.classList.add("dark-mode-bd");

        skillsSection.classList.remove("light-mode-section");
        skillsSection.classList.add("dark-mode-section");

        educationSection.classList.remove("light-mode-bd");
        educationSection.classList.add("dark-mode-bd");

        if (menu) {
            menu.style.color = "#fff"
        }

        if (footer) {
            footer.style.backgroundColor = "#181818"
        }

        if (nav) {
            nav.classList.remove("light-mode-nav");
            nav.classList.add("dark-mode-nav");
            nav.style.backgroundColor = "#181818";
        }

        if (typingText) {
            typingText.classList.remove("light-mode-typing-text")
            typingText.classList.add("dark-mode-typing-text");
        }

        timeline.forEach(timeline => {
            timeline.classList.remove("light-mode-timeline-content");
            timeline.classList.add("dark-mode-timeline-content");
        });
    }
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}