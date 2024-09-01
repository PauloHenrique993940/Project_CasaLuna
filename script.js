const toggleButton = document.getElementById('navbar-toggle');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
