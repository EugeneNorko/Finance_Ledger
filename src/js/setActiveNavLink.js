const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.scroll');

function setActiveNavLink() {
  const currentScrollPosition = window.pageYOffset;
  sections.forEach(function (section) {
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (
      currentScrollPosition >= sectionTop - window.innerHeight * 0.5 &&
      currentScrollPosition < sectionBottom - window.innerHeight * 0.5
    ) {
      const currentSectionId = section.getAttribute('id');
      navLinks.forEach(function (navLink) {
        navLink.classList.remove('active');
        if (navLink.getAttribute('href') === '#' + currentSectionId) {
          navLink.classList.add('active');
        }
      });
    }
  });
}
setActiveNavLink();
window.addEventListener('scroll', setActiveNavLink);
