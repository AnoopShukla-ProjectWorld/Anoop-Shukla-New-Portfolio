// Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    // const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });

    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // ================= Typing Animation =================
const texts = [
  "Full Stack Developer",
  "Software Engineer",
  "MERN Stack Developer",
  "Java & React Developer"
];

let index = 0;
let char = 0;

function typeAnimation() {
  const element = document.querySelector(".typing-text");
  if (!element) return;

  element.textContent = texts[index].substring(0, char++);

  if (char > texts[index].length) {
    setTimeout(() => {
      char = 0;
      index = (index + 1) % texts.length;
    }, 1000);
  }
  setTimeout(typeAnimation, 120);
}
typeAnimation();

// ================= Active Navbar Link =================
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});
