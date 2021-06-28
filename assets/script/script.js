const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById("nav_links");
const nameDiv = document.getElementById("name");

function toggleButton() {
    navList.classList.toggle('show');
    nameDiv.classList.toggle('hide');
}

hamburgerButton.addEventListener('click', toggleButton);