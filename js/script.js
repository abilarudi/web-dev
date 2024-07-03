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

// Efek Bg Navbar saat di scroll
window.onscroll = function () {
  const navbars = document.querySelectorAll(".navbar, .navbar-alt");
  navbars.forEach((navbar) => {
    if (window.scrollY > 400) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
};

// Efek Scroll Smooth
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Klik di filter untuk menampilkan atau menghilangkan filter
var filterIcon = document.querySelector(".catalog-name .fa-filter");
var dropdownMenu = document.querySelector(".dropdown-menu");

filterIcon.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the document click event from firing
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});

// Klik di mana saja untuk menghilangkan filter
document.addEventListener("click", function () {
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  }
});

// Klik di Button Question untuk menampilkan Answer
// var acc = document.querySelector(".FAQ .QnA .Question");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
