document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  links.forEach(link => link.addEventListener('click', function() {
    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    navLinks.classList.remove('active');
  }));
});
