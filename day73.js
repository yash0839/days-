let themeBtn = document.getElementById("themeBtn");


// Check saved theme when page loads

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.innerText = "Light Mode";
}


// Theme button click

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    // Check current theme

    if (document.body.classList.contains("dark")) {

        themeBtn.innerText = "Light Mode";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.innerText = "Dark Mode";

        localStorage.setItem("theme", "light");

    }

});