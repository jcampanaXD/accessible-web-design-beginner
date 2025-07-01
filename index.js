const toggleButton = document.getElementById(".menu-toggle");
const mainMenu = document.getElementById(".main-menu");

toggleButton.addEventListener("click", () => {
    mainMenu.classList.toggle("active");
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", this.window.scrollY > 50);
});