const toggleButton = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".main-menu");
toggleButton.addEventListener("click", () => {
    mainMenu.classList.toggle("active");
});

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    navbar.classList.toggle("scrolled", this.window.scrollY > 50);
});