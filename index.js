const toggleButton = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".main-menu");

toggleButton.addEventListener("click", () => {
    mainMenu.classList.toggle("active");
    toggleButton.classList.toggle("open");
});

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", this.window.scrollY > 50);
});