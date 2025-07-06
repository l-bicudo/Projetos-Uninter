const links = document.querySelectorAll(".navbar-links a");
const sections = document.querySelectorAll("section");

// Update active link when clicked
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("ativo"));
    link.classList.add("ativo");
  });
});

// Update active link on scroll
window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      links.forEach(link => {
        link.classList.remove("ativo");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("ativo");
        }
      });
    }
  });
});