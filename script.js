// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");
const navList = document.getElementById("navList");

navToggle.addEventListener("click", () => {
  if (navMobile.innerHTML === "") {
    navMobile.innerHTML = navList.innerHTML;
    navMobile.style.display = "block";
  } else {
    navMobile.innerHTML = "";
    navMobile.style.display = "none";
  }
});

// Reveal-on-scroll
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach(el => observer.observe(el));
