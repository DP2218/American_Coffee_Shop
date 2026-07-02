// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuBtn.querySelector("i");

function toggleMenu(forceClose) {

    const isOpen = navLinks.classList.contains("active");
    const shouldOpen = forceClose ? false : !isOpen;

    navLinks.classList.toggle("active", shouldOpen);
    menuBtn.setAttribute("aria-expanded", String(shouldOpen));

    if (menuIcon) {
        menuIcon.classList.toggle("fa-bars", !shouldOpen);
        menuIcon.classList.toggle("fa-xmark", shouldOpen);
    }

}

menuBtn.addEventListener("click", () => toggleMenu());

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => toggleMenu(true));
});

// Close menu when tapping outside of it (mobile)
document.addEventListener("click", (e) => {

    if (!navLinks.classList.contains("active")) return;

    const clickedInsideMenu = navLinks.contains(e.target);
    const clickedToggle = menuBtn.contains(e.target);

    if (!clickedInsideMenu && !clickedToggle) {
        toggleMenu(true);
    }

});

// ==========================
// STICKY NAVBAR
// ==========================

const navbar = document.querySelector(".navbar");

let lastScrollY = window.scrollY;

function updateNavbarState() {

    const currentY = window.scrollY;

    navbar.classList.toggle("scrolled", currentY > 80);

    const menuIsOpen = navLinks.classList.contains("active");

    if (!menuIsOpen && currentY > lastScrollY && currentY > 140) {
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
    }

    lastScrollY = currentY;

}

window.addEventListener("scroll", updateNavbarState);
window.addEventListener("load", updateNavbarState);

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId.length < 2) return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ==========================
// SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(
    ".card,.review,.gallery-grid img,.features div,.left img,.contact-box div,.why-card"
);

function reveal() {

    const trigger = window.innerHeight - 120;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("current");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("current");

        }

    });

});

// ==========================
// CARD HOVER EFFECT (skips touch devices)
// ==========================

const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

if (!isTouchDevice) {

    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.transform =
                `perspective(800px)
                 rotateY(${(x - rect.width / 2) / 20}deg)
                 rotateX(${-(y - rect.height / 2) / 20}deg)
                 translateY(-8px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "rotateX(0) rotateY(0)";

        });

    });

}

// ==========================
// GALLERY ZOOM
// ==========================

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("zoom");

    });

});

// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const size = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = size + "px";
        circle.style.height = size + "px";

        circle.style.left =
            e.clientX - this.getBoundingClientRect().left - size / 2 + "px";

        circle.style.top =
            e.clientY - this.getBoundingClientRect().top - size / 2 + "px";

        circle.className = "ripple";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

// ==========================
// STAT COUNTERS
// ==========================

const statNumbers = document.querySelectorAll(".stat-num");

function animateCount(el) {

    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimal || "0", 10);
    const duration = 1400;
    const start = performance.now();

    function tick(now) {

        const progress = Math.min((now - start) / duration, 1);
        const value = target * progress;

        el.textContent = decimals ? value.toFixed(decimals) : Math.floor(value);

        if (progress < 1) {
            requestAnimationFrame(tick);
        } else {
            el.textContent = decimals ? target.toFixed(decimals) : target;
        }

    }

    requestAnimationFrame(tick);

}

if (statNumbers.length) {

    const statObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }

        });

    }, { threshold: 0.5 });

    statNumbers.forEach(el => statObserver.observe(el));

}

// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const scrollTopBtn = document.getElementById("scrollTopBtn");
const whatsappBtn = document.querySelector(".fab-whatsapp");
const callFab = document.querySelector(".fab-call");

function updateFabVisibility() {

    const show = window.scrollY > 400;

    if (scrollTopBtn) scrollTopBtn.classList.toggle("visible", show);
    if (whatsappBtn) whatsappBtn.classList.toggle("visible", show);
    if (callFab) callFab.classList.toggle("visible", show);

}

window.addEventListener("scroll", updateFabVisibility);
window.addEventListener("load", updateFabVisibility);

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({ top: 0, behavior: "smooth" });

    });

}

// ==========================
// PRELOADER (OPTIONAL)
// ==========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// ==========================
// END
// ==========================
