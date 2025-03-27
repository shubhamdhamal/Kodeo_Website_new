let lastScrollTop = 0;
const header = document.querySelector("header");
const navbar = document.querySelector(".navbar");
const blurredLine = document.querySelector(".blurred-line");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down, hide navbar
        header.classList.add("hidden");
        navbar.classList.add("hide");
        blurredLine.classList.add("hide");
    } else {
        // Scrolling up, show navbar
        header.classList.remove("hidden");
        navbar.classList.remove("hide");
        blurredLine.classList.remove("hide");
    }

    lastScrollTop = scrollTop;
});

