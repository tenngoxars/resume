```javascript
//
// Scripts
//

document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Lenis (Smooth Scroll)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 2. Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 3. Animations

    // Sidebar Elements Entrance
    const sidebarTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    sidebarTl.from(".profile-img", { scale: 0.8, opacity: 0, duration: 1, delay: 0.2 })
             .from(".name", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
             .from(".tagline", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
             .from(".nav li", { x: -20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4");

    // Section Titles Reveal
    gsap.utils.toArray(".section-title").forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Content Items Reveal (Timeline Items, Projects)
    const items = gsap.utils.toArray(".timeline-item, .project-group, .skill-list li, .education-item, .honor-item");
    items.forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation (About)
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl.from("#about h1", { y: 50, opacity: 0, duration: 1, delay: 0.2 })
          .from("#about .subheading", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
          .from("#about .lead", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
          .from("#about .social-icons", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6");

    // Section Headers Animation
    gsap.utils.toArray("section h2").forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Experience/Education/Project Cards Animation
    // Targeting the .d-flex containers we styled as cards
    gsap.utils.toArray(".resume-section-content > .d-flex").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // Skills List Animation
    gsap.from(".fa-ul li", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%"
        },
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
    });

});
