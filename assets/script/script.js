const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById("nav_links");

function toggleButton() {
    navList.classList.toggle('show');

}

hamburgerButton.addEventListener('click', toggleButton);