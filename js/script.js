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

//  Search Func
function search() {
  let filter = document.getElementById("find").value.toUpperCase();
  let cards = document.querySelectorAll(".product-card");
  let cardTitle = document.getElementsByTagName("h3");

  for (let i = 0; i <= cardTitle.length; i++) {
    let a = cardTitle[i].getElementsByTagName("h3")[0];
    let title = a.innerHTML || a.innerText || a.textContent;

    if (title.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

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

// Translate (Paling Bawah Taruhnya)
// Define translations

function changeLanguage(lang) {
  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      product: "Product",
      contact: "Contact",
      catalog: "Catalog",
      phome:
        " “We believe that a wide, halal, and blessed sustenance is to run a business that can provide solutions to existing problems, beneficial to the general public from upstream to downstream, trustworthy, and professional that carries IMTAQ and IPTEK. Abila present as a producer of Virgin Coconut Oil, committed to providing high-quality products that not only nourish, but also support environmental sustainability and community welfare.”",
      taghome: "Experience Natural Health Benefits with Virgin Coconut Oil ",
    },
    id: {
      home: "Beranda",
      about: "Tentang Kami",
      product: "Produk",
      contact: "Kontak",
      catalog: "Katalog",
      phome:
        "“Kami percaya bahwa rezeki yang lapang, halal, dan berkah adalah menjalankan bisnis yang dapat memberikan solusi atas permasalahan yang ada, bermanfaat bagi khalayak umum dari hulu ke hilir, amanah, dan profesional yang mengusung IMTAQ dan IPTEK. Abila hadir sebagai produsen Virgin Coconut Oil, berkomitmen untuk menyediakan produk berkualitas tinggi yang tidak hanya menyehatkan, tetapi juga mendukung keberlanjutan lingkungan dan kesejahteraan masyarakat.”",
      taghome: "Rasakan Manfaat Kesehatan Alami dengan Virgin Coconut Oil",
      
    },
  };
  console.log("translations: " + translations);
  document.querySelectorAll("[data-key]").forEach((elem) => {
    const key = elem.getAttribute("data-key");
    if (translations[lang] && translations[lang].hasOwnProperty(key)) {
      elem.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  changeLanguage("en"); // Or detect the user's language to set it dynamically
});
