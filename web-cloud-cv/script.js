document.addEventListener("DOMContentLoaded", function () {
    console.log("CV website loaded successfully!");

    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Navigation link clicked:", link.textContent);
        });
    });
});