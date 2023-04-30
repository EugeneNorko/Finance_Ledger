const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
  const currentScrollPosition = window.pageYOffset;
  if (window.innerWidth >= 768 && currentScrollPosition >= 70) {
    header.classList.add('scrolled');
  } else if (window.innerWidth < 768 && currentScrollPosition >= 120) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
