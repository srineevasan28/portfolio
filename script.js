// Simple scroll reveal
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
    const height = sec.offsetHeight;
    if (top > offset && top < offset + height) {
      sec.classList.add('visible');
    }
  });
});
// Initialize ScrollReveal
ScrollReveal({
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  reset: false
});

// Reveal sections
ScrollReveal().reveal('.section h2', {
  origin: 'top',
  delay: 100
});

ScrollReveal().reveal('.skill', {
  origin: 'bottom',
  interval: 100
});

ScrollReveal().reveal('.project-card', {
  origin: 'bottom',
  interval: 200
});

ScrollReveal().reveal('.hero-content', {
  origin: 'left',
  delay: 200
});
document.addEventListener("DOMContentLoaded", () => {
  const text = "From concepts to creation 🧠💡 | Let’s build something amazing 🌐";
  const typingTarget = document.querySelector(".typing-text");
  const brandingSection = document.querySelector("#branding");

  let hasTyped = false; // flag to prevent repeat typing

  function typeText() {
    let index = 0;
    function type() {
      if (index < text.length) {
        typingTarget.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50);
      }
    }
    type();
  }

  function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  window.addEventListener("scroll", () => {
    if (!hasTyped && isElementInView(brandingSection)) {
      hasTyped = true;
      typingTarget.style.animation = "typing 5s steps(40, end) forwards";
      typeText();
    }
  });
});
