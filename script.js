  let lastScrollTop = 0;
const header = document.getElementById("siteHeader");
const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Scroll progress bar logic
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + "%";

  // Header hide/show on scroll
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    header.classList.add("hide-header");
  } else {
    header.classList.remove("hide-header");
  }

  lastScrollTop = scrollTop;
});

window.addEventListener("load", () => {
  document.getElementById("loader-wrapper").style.display = "none";
});

// Toggle menu + icon switch
function toggleMenu() { 
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");
  menu.classList.toggle("show");
  toggle.textContent = menu.classList.contains("show") ? "✖" : "☰";
}
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".vivek-project-btn");
  const projectCards = document.querySelectorAll(".vivek-project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");

      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      projectCards.forEach(card => {
        if (filterValue === "all" || card.classList.contains(filterValue)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});


      tsParticles.load("particles-js", {
  fullScreen: { enable: false },
  background: {
    color: "#121212"
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.5
        }
      }
    }
  },
  particles: {
    color: { value: "#ffffff" },
    links: {
      color: "#ffffff",
      distance: 180, // ⬅️ Increased distance (fewer links)
      enable: true,
      opacity: 0.3,  // ⬅️ Lighter lines
      width: 1.2
    },
    collisions: { enable: false },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 60 // ⬅️ Slightly reduced dots
    },
    opacity: { value: 0.4 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 4 } }
  },
  detectRetina: true
});
const counters = document.querySelectorAll('.counter');
const speed = 10; // ⏳ Bigger = Slower

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText.replace('+', '');

    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment + '+';
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target + '+';
    }
  };

  updateCount();
});



  function animateVivekPortfolioSkills() {
    const skills = document.querySelectorAll('.vivek-portfolio-skill');

    skills.forEach(skill => {
      const outer = skill.querySelector('.vivek-portfolio-outer');
      const span = skill.querySelector('span');
      const percentage = parseInt(skill.getAttribute('data-percentage'));
      let current = 0;

      const interval = setInterval(() => {
        if (current >= percentage) {
          clearInterval(interval);
        } else {
          current++;
          let angle = 360 - (current / 100) * 360;  // 👈 Reverse direction
          outer.style.background = `
            conic-gradient(
                #2b2b2b ${angle}deg,
                #FD6F00 ${angle}deg,
                #FD6F00 ${(angle + 20)}deg,
                #E46400 360deg
            )`;
          span.textContent = current + '%';
        }
      }, 15);
    });
  }

  let vivekTriggered = false;
  window.addEventListener('scroll', () => {
    const section = document.querySelector('#vivek-portfolio-skills');
    const rect = section.getBoundingClientRect();

    if (rect.top <= window.innerHeight - 100 && !vivekTriggered) {
      vivekTriggered = true;
      animateVivekPortfolioSkills();
    }
  });

  const serviceCards = document.querySelectorAll('.vivek-portfolio-service-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 150); // staggered delay
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
});

serviceCards.forEach(card => {
  observer.observe(card);
});





const buttons = document.querySelectorAll('.vivek-project-btn');
const projectCards = document.querySelectorAll('.vivek-project-card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
        card.classList.add('show'); // 👈 optional: for animation
      } else {
        card.style.display = 'none';
        card.classList.remove('show');
      }
    });
  });
});



