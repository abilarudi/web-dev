//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika humburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});


// Klik di filter untuk menampilkan atau menghilangkan filter
var filterIcon = document.querySelector('.catalog-name .fa-filter');
var dropdownMenu = document.querySelector('.dropdown-menu');

filterIcon.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent the document click event from firing
  if (dropdownMenu.style.display === 'block') {
    dropdownMenu.style.display = 'none';
  } else {
    dropdownMenu.style.display = 'block';
  }
});

// Klik di mana saja untuk menghilangkan filter
document.addEventListener('click', function() {
  if (dropdownMenu.style.display === 'block') {
    dropdownMenu.style.display = 'none';
  }
});