/* ==========Scroll reveal animation========== */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* ==========Scroll home========== */
sr.reveal('.logo',{})
sr.reveal('.location',{delay:300})
sr.reveal('h1',{delay:400})
sr.reveal('.visit',{interval:200})