let sections = document.querySelectorAll("section");
let navbarLinks = document.querySelectorAll(
  ".navbarDiv .navbar .linkList .linkListTitle li a"
);

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navbarLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(
            ".navbarDiv .navbar .linkList .linkListTitle li a#" + id + "Link"
          )
          .classList.add("active");
      });
    }
  });
};

function toggleMenu() {
  const selectedMenu = document.querySelector(".menu__list");
  const handburgerIcon = document.querySelector(".handburger__icon");
  selectedMenu.classList.toggle("open_menu");
  handburgerIcon.classList.toggle("open_menu");
}
