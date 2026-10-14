function showMessage() {
    alert("Thank you for visiting my resume!");
}

window.addEventListener("DOMContentLoaded", function () {

    // Display the current date on the resume page
    const dateElement = document.getElementById("currentDate");

    if (dateElement) {
        dateElement.textContent =
            "Today's Date: " + new Date().toLocaleDateString();
    }

    // Display the current date on the bio-data page
    const bioDate = document.getElementById("bioDate");

    if (bioDate) {
        bioDate.textContent = new Date().toLocaleDateString();
    }

    // Highlight the link for the current page
    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
        if (link.href === window.location.href) {
            link.style.color = "#93c5fd";
        }
    });

    console.log("Website loaded successfully!");
});