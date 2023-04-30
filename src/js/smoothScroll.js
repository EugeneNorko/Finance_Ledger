const scrollLinks = document.querySelectorAll('.scroll');
scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  });
});
