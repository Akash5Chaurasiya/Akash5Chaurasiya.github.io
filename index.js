const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  nav.classList.remove("open");
};
const sr = ScrollReveal({
  distance: "25px",
  duration: 2500,
  reset: true,
});

sr.reveal(".home-text", { delay: 190, origin: "bottom" });

sr.reveal("#about,#skills,#githubs,#projects,#contact", {
  delay: 200,
  origin: "bottom",
});
