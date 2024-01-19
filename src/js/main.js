import AOS from "aos";

AOS.init({
  once: true,
});

//scroll to section

const menuLinks = document.querySelectorAll("[data-goto]");

menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionToScroll = event.target.dataset.goto;

    document
      .querySelector(sectionToScroll)
      .scrollIntoView({ behavior: "smooth" });
  });
});
