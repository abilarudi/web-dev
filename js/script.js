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
      home1: "Discover Natural Goodness",
      home12: "with Abila Indonesia",
      home13:
        "Leading manufacturer of Pure Coconut Oil. Developed with love and dedication to quality, our products provide direct benefits from nature for your health and beauty.",
      home14:
        "Experience Abila's natural touch, a wise choice for your body's health and skin's beauty.",
      home2: "Experience Natural Health Benefits with Virgin Coconut Oil",
      about1: "Get to know us",
      about2: "at Abila Indonesia",
      about3:
        "Abila Pure Coconut Oil, is the complete solution for your family's health and beauty. It is needed to solve problems while keeping the body healthy and beautiful.",
      about4:
        "The natural wonders of Abila Pure Coconut Oil! Specially designed to care for the beauty and health of your skin and grow naturally. Enriched with pure coconut nutrients that help to retain moisture and strengthen hair, this product is the best choice for your daily care. Feel its gentle touch and prove its superiority today!",
      about5:
        "Make Abila virgin coconut oil part of your beauty and wellness routine and feel the difference. With consistent use, you not only take care of yourself but also enjoy tangible results. Optimise your beauty as well as your health with the natural wonders of Abila coconut oil today.",
      about6: "Why Abila?",
      about7:
        "Here are quotes from health experts on the health and beauty benefits of virgin coconut oil",
      about8: "1. Healthy and Glowing Skin",
      about9:
        "Enriched with vitamin E and essential fatty acids, Abila coconut oil delivers deep moisture for smooth, radiant skin.",
      about10: "2. Strong and Shiny Hair:",
      about11:
        "Use as a hair mask or natural styling serum, Abila coconut oil strengthens your strands, leaving them soft and shiny.",
      about12: "3. Antioxidants for Protection",
      about13:
        "Natural protection from free radicals, helps fight premature ageing and keeps skin young and healthy.",
      about14: "4. Guaranteed Purity",
      about15:
        "Processed to strict standards to ensure the highest purity, with no added harmful chemicals.",
      about16: "5. Environmentally Friendly Choice",
      about17:
        "Made with sustainability and quality in mind, Abila ensures that every drop of coconut oil supports a better environment.",
      terjual: "Sold Products",
      lihat: "View Product",
      unggulan: "Featured Products",
      desunggulan:
        "Explore our featured products, customer favourites with premium quality and actual results, formulated for your beauty and health.",
      terlaris: "Top Selling Products",
      product1: "COCONUT OIL",
      despro1:
        "This product is perfect for a variety of purposes, from cooking, maintaining skincare, and hair. Discover the magic of our coconut oil and savour the goodness of nature in every drop.",
      terjualproduct1: "5432 products sold", // Urus Span
      product2: "COCONUT OIL",
      despro2:
        "This product is perfect for a variety of purposes, from cooking, maintaining skincare, and hair. Discover the magic of our coconut oil and enjoy the goodness of nature in every drop.",
      terjualproduct2: "5432 products sold",
      product3: "COCONUT OIL",
      despro3:
        "This product is perfect for a variety of purposes, from cooking, maintaining skincare, and hair. Discover the magic of our coconut oil and enjoy the goodness of nature in every drop.",
      terjualproduct3: "5432 products sold",
      product4: "COCONUT OIL",
      despro4:
        "This product is perfect for a variety of purposes, from cooking, maintaining skincare, and hair. Discover the magic of our coconut oil and enjoy the goodness of nature in every drop.",
      terjualproduct4: "5432 products sold",
      detail: "Detail Products",
      lainnya: "GET MORE!",
      keunggulan: "Coconut Oil Advantage", // Urus Span
      faq: "Find Out About Abila",
      q1: "Lorem ipsum dolor sit amet",
      a1: "ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio quae iusto molestiae iure facilis aut aperiam cupiditate inventore nihil.",
      q2: "Lorem ipsum dolor sit amet.",
      a2: "ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio quae iusto molestiae iure facilis aut aperiam cupiditate inventore nihil.",
      q3: "Lorem ipsum dolor sit amet.",
      a3: "ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio quae iusto molestiae iure facilis aut aperiam cupiditate inventore nihil.",
      contact1: "Contact Us",
      contact2: "Here's Abila Indonesia's Contact and Address",
      alamat: "Perum. Bumi Asri Blok E-10 Kec Kota, kediri, 64126",
      telp: "+62 838 5690 9114",
      email: "abilarudi@gmail.com",
      formname: "Full Name",
      formemail: "Email Address",
      formmsg: "Message",
      submit: "Submit",
      founder: "Founder",
      factory: "Factory",
      navigasi: "Navigation",
      social: "Social Media",
    },
    id: {
      home: "Beranda",
      about: "Tentang Kami",
      product: "Produk",
      contact: "Kontak",
      catalog: "Katalog",
      home1: "Temukan kebaikan alami",
      home12: "dengan ABILA",
      home13:
        "Produsen terkemuka Minyak Kelapa Murni. Dikembangkan dengan cinta dan dedikasi untuk kualitas, produk kami memberikan manfaat langsung dari alam untuk kesehatan dan kecantikan Anda.",
      home14:
        "Segera rasakan sentuhan alami Abila, pilihan bijak untuk kesehatan tubuh dan kecantikan kulit Anda.",
      home2: "Rasakan Manfaat Kesehatan Alami dengan Virgin Coconut Oil",
      about1: "Ketahui Kami",
      about2: "di Abila Indonesia",
      about3:
        "Minyak Kelapa Murni Abila, adalah solusi lengkap untuk kesehatan dan kecantikan keluarga Anda. Dibutuhkan untuk menyelesaikan masalah sekaligus menjaga tubuh tetap sehat dan cantik.",
      about4:
        "Keajaiban alami Minyak Kelapa Murni Abila! Dirancang khusus untuk merawat kecantikan dan kesehatan kulit juga tumbuh Anda secara alami. Diperkaya dengan nutrisi kelapa murni yang membantu menjaga kelembapan dan memperkuat rambut, produk ini adalah pilihan terbaik untuk perawatan harian Anda. Rasakan sentuhan lembutnya dan buktikan keunggulannya hari ini!",
      about5:
        "Jadikan minyak kelapa murni Abila bagian dari rutinitas kecantikan dan kesehatan Anda serta rasakan perbedaannya. Dengan penggunaan yang konsisten, Anda tidak hanya merawat diri tetapi juga menikmati hasil yang nyata. Optimalisasi kecantikan juga kesehatan Anda dengan keajaiban alami dari minyak kelapa Abila hari ini.",
      about6: "Mengapa Harus Abila?",
      about7:
        "Berikut adalah kutipan dari para pakar kesehatan tentang manfaat minyak kelapa murni untuk kesehatan dan kecantikan tubuh Anda.",
      about8: "1. ⁠Kulit yang Sehat dan Bersinar",
      about9:
        "Diperkaya dengan vitamin E dan asam lemak esensial, minyak kelapa Abila memberikan kelembapan mendalam untuk kulit yang halus dan bercahaya.",
      about10: "2.⁠ ⁠Rambut Kuat dan Berkilau :",
      about11:
        "Gunakan sebagai masker rambut atau serum penata rambut alami, minyak kelapa Abila memperkuat helai rambut Anda, menjadikannya lembut dan berkilau.",
      about12: "3.⁠ ⁠Antioksidan untuk Perlindungan",
      about13:
        "Perlindungan alami dari radikal bebas, membantu melawan penuaan dini dan menjaga kulit tetap muda dan sehat.",
      about14: "4.⁠ ⁠Kemurnian yang Dijamin",
      about15:
        "Diproses dengan standar ketat untuk memastikan kemurnian tertinggi, tanpa tambahan bahan kimia yang merugikan.",
      about16: "5. ⁠Pilihan Ramah Lingkungan",
      about17:
        "Dibuat dengan memperhatikan keberlanjutan dan kualitas, Abila memastikan bahwa setiap tetes minyak kelapa mendukung lingkungan yang lebih baik.",
      terjual: "Produk Terjual",
      lihat: "Lihat Produk",
      unggulan: "Produk Unggulan",
      desunggulan:
        "Jelajahi produk unggulan kami, favorit pelanggan dengan kualitas premium dan hasil nyata, dirancang untuk kecantikan dan kesehatan Anda",
      terlaris: "Produk Terlaris",
      product1: "MINYAK KELAPA",
      despro1:
        "Produk ini sangat cocok untuk berbagai keperluan, mulai dari memasak, menjaga perawatan kulit, dan rambut. Temukan keajaiban minyak kelapa kami dan nikmati kebaikan alam dalam setiap tetesnya.",
      terjualproduct1: "5432 produk terjual", // Urus Span
      product2: "MINYAK KELAPA",
      despro2:
        "Produk ini sangat cocok untuk berbagai keperluan, mulai dari memasak, menjaga perawatan kulit, dan rambut. Temukan keajaiban minyak kelapa kami dan nikmati kebaikan alam dalam setiap tetesnya.",
      terjualproduct2: "5432 produk terjual",
      product3: "MINYAK KELAPA",
      despro3:
        "Produk ini sangat cocok untuk berbagai keperluan, mulai dari memasak, menjaga perawatan kulit, dan rambut. Temukan keajaiban minyak kelapa kami dan nikmati kebaikan alam dalam setiap tetesnya.",
      terjualproduct3: "5432 produk terjual",
      product4: "MINYAK KELAPA",
      despro4:
        "Produk ini sangat cocok untuk berbagai keperluan, mulai dari memasak, menjaga perawatan kulit, dan rambut. Temukan keajaiban minyak kelapa kami dan nikmati kebaikan alam dalam setiap tetesnya.",
      terjualproduct4: "5432 produk terjual",
      detail: "Detail Produk",
      lainnya: "DAPATKAN LAINNYA!",
      keunggulan: "Keunggulan Minyak Kelapa", // Urus span
      faq: "Cari Tahu tentang Abila",
      q1: "Lorem ipsum dolor sit amet.?",
      a1: "ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio quae iusto molestiae iure facilis aut aperiam cupiditate inventore nihil.",
      q2: "Lorem ipsum dolor sit amet.?",
      a2: "ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio quae iusto molestiae iure facilis aut aperiam cupiditate inventore nihil.",
      q3: "Lorem ipsum dolor sit amet.?",
      a3: "ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio quae iusto molestiae iure facilis aut aperiam cupiditate inventore nihil.",
      contact1: "Hubungi Kami",
      contact2: "Berikut Kontak dan Alamat Abila Indonesia",
      alamat: "Perum. Bumi Asri Blok E-10 Kec Kota, kediri, 64126",
      telp: "+62 838 5690 9114",
      email: "abilarudi@gmail.com",
      formname: "Nama Lengkap",
      formemail: "Alamat Email",
      formmsg: "Pesan",
      submit: "Kirim",
      founder: "Pendiri",
      factory: "Perusahaan",
      navigasi: "Navigasi",
      social: "Media Sosial",
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
