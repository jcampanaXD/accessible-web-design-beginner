const toggleButton = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

toggleButton.addEventListener("click", () => {
    mainMenu.classList.toggle("active");
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", this.window.scrollY > 50);
});