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

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
        form.reset();
        alert("Message sent successfully!");
        } else {
        alert("Something went wrong. Try again?");
        console.error("Web3Forms error:", result);
        }
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
});
