// Add smooth scrolling to all links
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  );
});

// Open and close the mobile menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav ul');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('open');
    menuOpen = false;
  }
});
