// Hamburger menu toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

if (hamburgerMenu) {
  hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}
