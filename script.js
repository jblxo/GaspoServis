const toggleNavbar = () => {
  const navs = document.querySelectorAll('.navbar-items');

  navs.forEach(nav => {
    nav.classList.toggle('navbar-toggle-show');
  });
}

document.querySelector('.navbar-toggle').addEventListener('click', toggleNavbar);