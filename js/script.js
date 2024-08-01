// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
let overlay = document.querySelector(".dark-overlay");

if (!overlay) {
  overlay = document.createElement("div");
  overlay.className = "dark-overlay hidden";
  document.body.appendChild(overlay);
}

// Toggle the visibility of the search panel
function toggleInputVisibility() {
  const searchPanel = document.getElementById("search-panel");
  if (searchPanel.classList.contains("hidden")) {
    searchPanel.classList.remove("hidden");
    searchPanel.classList.add("flex");
    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
  } else {
    searchPanel.classList.remove("flex");
    searchPanel.classList.add("hidden");
    overlay.classList.remove("flex");
    overlay.classList.add("hidden");
  }
  document.getElementById("search-input").focus();
}

// Close the search panel if clicked outside of it
document.addEventListener("click", function (event) {
  const searchPanel = document.getElementById("search-panel");
  const searchContainer = document.getElementById("search-container");
  const searchButton = document.getElementById("search-button"); // Assuming there's a button to open the search panel

  if (
    !searchContainer.contains(event.target) &&
    !searchButton.contains(event.target) &&
    !searchPanel.classList.contains("hidden")
  ) {
    searchPanel.classList.remove("flex");
    searchPanel.classList.add("hidden");
    overlay.classList.remove("flex");
    overlay.classList.add("hidden");
  }
});

// Example dictionary of search terms, their corresponding links, and text content
const dictionaries = {
  id: {
    "home s": {
      link: "index.html#home",
      text: "Selamat datang di bagian rumah di mana Anda dapat menemukan pembaruan terbaru.",
    },
    about: {
      link: "index.html#about",
      text: "Pelajari lebih lanjut tentang perusahaan dan tim kami di bagian tentang.",
    },
    product: {
      link: "index.html#product",
      text: "Temukan berbagai produk kami di bagian produk.",
    },
    contact: {
      link: "index.html#contact",
      text: "Hubungi kami melalui bagian kontak.",
    },
    catalog: {
      link: "catalog.html",
      text: "Jelajahi katalog kami untuk melihat semua item yang tersedia.",
    },
  },
  en: {
    "home s": {
      link: "index.html#home",
      text: "Welcome to the home section where you can find the latest updates.",
    },
    about: {
      link: "index.html#about",
      text: "Learn more about our company and team in the about section.",
    },
    product: {
      link: "index.html#product",
      text: "Discover our range of products in the product section.",
    },
    contact: {
      link: "index.html#contact",
      text: "Get in touch with us through the contact section.",
    },
    catalog: {
      link: "catalog.html",
      text: "Browse our catalog to see all available items.",
    },
  },
};

// Perform the search and display results
// Perform the search and display results
function performSearch() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  // Get the user's device language
  const deviceLang = navigator.language.split("-")[0]; // Get the language code (e.g., 'en' from 'en-US')
  const supportedLangs = ["en", "id"]; // List of supported languages
  const defaultLang = supportedLangs.includes(deviceLang) ? deviceLang : "en"; // Fallback to 'en' if deviceLang is not supported

  const selectedLang = localStorage.getItem("selectedLang") || defaultLang;
  const dictionary = dictionaries[selectedLang];

  // Filter the dictionary based on the query
  const results = Object.keys(dictionary).filter((key) => {
    const item = dictionary[key];
    return key.includes(query) || item.text.toLowerCase().includes(query);
  });

  // Display the results
  results.forEach((result) => {
    const item = dictionary[result];
    const li = document.createElement("li");
    li.classList.add(
      "p-2",
      "cursor-pointer",
      "hover:underline",
      "hover:text-[#c19b86]",
      "truncate"
    );

    const topic = document.createElement("span");
    topic.textContent = result;
    topic.classList.add("font-bold");

    const text = document.createElement("span");
    text.innerHTML = highlightText(item.text, query);
    text.classList.add("md:text-base", "text-xl", "text-gray-600", "truncate");

    li.appendChild(topic);
    li.appendChild(document.createTextNode(" - "));
    li.appendChild(text);
    li.onclick = () => {
      window.location.href = item.link;
    };

    resultsContainer.appendChild(li);
  });
}

// Function to highlight the search text
function highlightText(text, query) {
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, '<span class="highlight">$1</span>');
}
//ketika humburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  overlay.classList.toggle("active"); // Show or hide the overlay
};

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    overlay.classList.remove("active");
  }
});

// Efek Bg Navbar saat di scroll
window.onscroll = function () {
  const navbars = document.querySelectorAll(
    ".navbar, .navbar-alt, .lang-en, .lang-in"
  );
  navbars.forEach((navbar) => {
    if (window.scrollY > 400) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
};

// Readmore About Us
document
  .querySelectorAll(".read-more-btn, .read-less-btn")
  .forEach((button) => {
    button.addEventListener("click", function () {
      var moreText = document.querySelector(".readless");
      var readMoreBtn = document.querySelector(".read-more-btn");
      var readLessBtn = document.querySelector(".read-less-btn");

      // Toggle the "about-4" text visibility
      moreText.classList.toggle("hidden");

      // Toggle the buttons visibility
      if (readMoreBtn) readMoreBtn.classList.toggle("hidden");
      if (readLessBtn) readLessBtn.classList.toggle("hidden");
    });
  });
// // Efek Scroll Smooth
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

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

function setLanguage(lang) {
  localStorage.setItem("selectedLang", lang);
  applyTranslations(lang);
  updateLanguageStyles(lang);
}

// Apply translations based on the selected language
function applyTranslations(lang) {
  const translations = {
    en: {
      // Index Navbar
      home: "Home",
      about: "About Us",
      product: "Product",
      contact: "Contact",
      catalog: "Catalog",
      search: "Search...",
      // Index Home Section
      home1: "Discover Natural Goodness",
      home12: "with Abila Indonesia",
      home13:
        "Leading manufacturer of Virgin Coconut Oil. Developed with love and dedication to quality, our products provide direct benefits from nature for your health and beauty.",
      home14:
        "Experience Abila's natural touch, a wise choice for your body's health and skin's beauty.",
      home2: "Experience Natural Health Benefits with Virgin Coconut Oil",
      // Index About Us Section
      about1: "Get to Know Us",
      about2: "at Abila Indonesia",
      about3:
        "Abila Virgin Coconut Oil is a complete solution for your family's health and beauty. It is needed to address problems while keeping the body healthy and beautiful.",
      selengkapnya: "Read More",
      about4:
        "The natural wonder of Abila Virgin Coconut Oil! Specifically designed to care for the beauty and health of your skin and body naturally. Enriched with virgin coconut nutrients that help maintain moisture and strengthen hair, this product is the best choice for your daily care. Feel its gentle touch and prove its excellence today!",
      sedikitnya: "Read Less",
      about6: "Why Should",
      about61: " Abila?",
      about7:
        "Here are quotes from health experts about the benefits of virgin coconut oil for health and body beauty",
      about8: "1. Healthy and Glowing Skin",
      about9:
        "Enriched with vitamin E and essential fatty acids, Abila coconut oil provides deep hydration for smooth and radiant skin.",
      about10: "2. Strong and Shiny Hair",
      about11:
        "Use as a hair mask or natural hair serum, Abila coconut oil strengthens your hair strands, making them soft and shiny.",
      about12: "3. Antioxidants for Protection",
      about13:
        "Natural protection from free radicals, helps fight premature aging and keeps the skin young and healthy.",
      about14: "4. Guaranteed Purity",
      about15:
        "Processed under strict standards to ensure the highest purity, without harmful chemical additives.",
      about16: "5. Eco-Friendly Choice",
      about17:
        "Made with sustainability and quality in mind, Abila ensures that every drop of coconut oil supports a better environment.",
      about5:
        "Make Abila Virgin Coconut Oil a part of your beauty and health routine and feel the difference. With consistent use, you not only care for yourself but also enjoy real results. Optimize your beauty and health with the natural wonder of Abila coconut oil today.",
      about18: "Supports Care",
      about19: "For Your Health and Beauty",
      about20: "Certified Halal by the Republic of Indonesia with",
      about21: "ID00110000440040622",
      about22: "Enriched with",
      about23: "Vitamin E",
      about24: "and",
      about25: "Essential Fatty Acids",
      about26: "To Create Healthy and Glowing Skin",
      terjual: "Sold Products",
      lihat: "View Products",
      mitra: "Our Partners",
      lihatmitra: "View Partners",
      komunitas: "Followers and Community",
      lihatkomunitas: "Join Community",
      // Index Product Section
      unggulan: "Featured Products",
      desunggulan:
        "Explore our featured products, customer favourites with premium quality and actual results, formulated for your beauty and health.",
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
      // Index Blog Section
      keunggulan1: "COCONUT ",
      keunggulan2: "OIL ",
      keunggulan3: "ADVANTAGE ",
      blog1:
        "VCO (virgin coconut oil) has been researched to have many health benefits, including helping to reduce weight, prevent heart attacks, address insulin resistance in diabetes patients, and maintain skin health.",
      blog2:
        "Coconut oil benefits for pregnant women over 6 months can be used as a massage oil. It is good for the skin while also reducing pain and muscle aches that usually occur in the third trimester of pregnancy.",
      blog3:
        "Virgin Coconut Oil (VCO) is generally safe for consumption by pregnant women and has not been shown to have any negative effects on pregnancy and the fetus. VCO is known to have many health benefits, including boosting the immune system, preventing and helping to treat bacterial and viral infections, lowering bad cholesterol levels, and increasing good cholesterol levels, among others.",
      blog4: "Virgin coconut oil can restore skin radiance in a short time.",
      blog5:
        "Coconut oil is an important oil because it contains Lauric Acid. Lauric Acid has unique properties for use in the food industry as well as in soap and cosmetic industries.",
      blog6:
        "Virgin coconut oil is not new. Its use has been practiced by Ayurvedic medicine practitioners in India for 3,000 to 4,000 years because it is a remedy for various diseases.",
      blog7:
        "Coconut oil helps prevent obesity, boosts immunity, protects against bacteria, viruses, and fungi while ensuring a healthy heart.",
      blog8:
        "If there is an oil that can be used daily for eating that helps with heart issues, cancer, and other critical diseases, as well as aiding digestion and the immune system, would you be interested? If so, I suggest taking coconut oil.",
      blog9:
        "Coconut oil improves healthy digestion and has anti-inflammatory properties. Both are important in helping relieve reflux or painful acid indigestion during late pregnancy.",
      faq1: "FAQ :",
      //  Index FAQ Section
      faq2: "Virgin Coconut Oil",
      q1: "What is virgin coconut oil?",
      a1: "Virgin coconut oil is oil extracted from fresh coconut meat that is processed without chemicals or excessive heating. This process preserves the nutritional quality and natural flavor of the coconut oil.",
      q2: "What is the difference between virgin coconut oil and hydrogenated coconut oil?",
      a2: "Virgin coconut oil is obtained from fresh coconuts without additional chemical processes, whereas hydrogenated coconut oil has undergone chemical processing to improve shelf life and stability, which may reduce some health benefits.",
      q3: "What are the health benefits of virgin coconut oil?",
      a3: "Virgin coconut oil contains healthy saturated fats, such as lauric acid, which can support heart health, boost the immune system, and has anti-inflammatory and antibacterial properties.",
      q4: "How should virgin coconut oil be stored?",
      a4: "Store virgin coconut oil in a cool, dry place, away from direct sunlight. When stored properly, virgin coconut oil can last a long time without becoming rancid.",
      q5: "Can virgin coconut oil be used for cooking?",
      a5: "Yes, virgin coconut oil is suitable for cooking because it has a high smoke point, making it safe for high-temperature cooking. Additionally, its mild flavor can enhance the taste of various dishes.",
      q6: "What are other uses for virgin coconut oil?",
      a6: "Besides cooking, virgin coconut oil is often used in skincare and haircare, such as moisturizing the skin, reducing wrinkles, or as a hair mask.",
      q7: "Is virgin coconut oil safe for everyone?",
      a7: "virgin coconut oil is generally safe for most people, but those with coconut allergies or certain health conditions should consult with a medical professional before use.",
      q8: "How can you distinguish virgin coconut oil from regular coconut oil?",
      a8: "Virgin coconut oil usually has a label indicating 'virgin' or 'extra virgin,' and typically has a distinctive coconut aroma. Regular or processed coconut oil may undergo refining and flavor removal.",
      // Catalog
      cat1: "Featured",
      cat2: "Product",
      catalog1: "Find our best products here",
      catalog2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusantium iste iusto at quia dicta.",
      catalog3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis ullam molestiae? Adipisci assumenda tenetur eius ea atque a nihil?",
      catalog4: "Category: Coconut Oil",
      terlaris: "Best Seller",
      vco250: "Virgin Coconut Oil 250 ml",
      vco250title:
        "VCO 250ml - Virgin Coconut Oil for Beauty - Herbal Virgin Coconut Oil",
      sekarang: "Get Now",
      vco500: "Virgin Coconut Oil 500 ml",
      vco500title:
        "VCO 500ml - Virgin Coconut Oil for Beauty - Herbal Virgin Coconut Oil",
      // Cat1Pro
      jumlah: "Quantity : ",
      keranjang: "Add to Cart",
      beli: "Buy Now",
      desc: "Description",
      howto: "How to Use",
      review: "Review",
      desminyak: "Abila Coconut Oil",
      manfaat: "Benefits",
      desmanfaat1:
        "Cooking: Virgin coconut oil has a high smoke point, making it safe for frying, sautéing, and baking. It can also add a delicious coconut flavor to your dishes. Health: Virgin coconut oil contains high levels of lauric acid, which has antimicrobial and antiviral properties. It can help boost immunity, fight infections, and support digestive health. Beauty Care: Virgin coconut oil can be used as a natural moisturizer for skin and hair. It can help hydrate the skin, address dry and dull hair, and even aid in hair growth. Advantages : ",
      desmanfaat2:
        "Pure: Made from 100% fresh coconut milk without additional chemicals. Healthy: Rich in beneficial lauric acid. Versatile: Can be used for cooking, maintaining health, and beauty care. Convenient: 250 ml packaging is easy to store and carry.",
      desmanfaat3:
        "Cooking: Use virgin coconut oil for frying, sautéing, or baking. Health: Take 1-2 tablespoons of virgin coconut oil each morning with warm water. Beauty Care: Use virgin coconut oil as a moisturizer for skin and hair. Store in a cool place away from direct sunlight.",
      howtodes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente alias repellendus provident sed harum ad necessitatibus commodi! Labore sunt officia rerum id nemo doloremque asperiores nostrum. Labore, in quis.",
      // VCO 250
      desminyak250:
        "This 250 ml virgin coconut oil is made from 100% selected fresh coconut milk processed without additional chemicals. This oil is rich in benefits for health and beauty, making it an ideal choice for various needs at home.",
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
      // Index Navbar
      home: "Beranda",
      about: "Tentang Kami",
      product: "Produk",
      contact: "Kontak",
      catalog: "Katalog",
      search: "Cari...",
      // Index Home Section
      home1: "Temukan Kebaikan Alami",
      home12: "Abila Indonesia",
      home13:
        "Produsen terkemuka Minyak Kelapa Murni. Dikembangkan dengan cinta dan dedikasi untuk kualitas, produk kami memberikan manfaat langsung dari alam untuk kesehatan dan kecantikan Anda.",
      home14:
        "Segera rasakan sentuhan alami Abila, pilihan bijak untuk kesehatan tubuh dan kecantikan kulit Anda.",
      home2: "Rasakan Manfaat Kesehatan Alami dengan Virgin Coconut Oil",
      // Index About Us Section
      about1: "Ketahui Kami",
      about2: "di Abila Indonesia",
      about3:
        "Minyak Kelapa Murni Abila, adalah solusi lengkap untuk kesehatan dan kecantikan keluarga Anda. Dibutuhkan untuk menyelesaikan masalah sekaligus menjaga tubuh tetap sehat dan cantik.",
      selengkapnya: "Baca Selengkapnya",
      about4:
        "Keajaiban alami Minyak Kelapa Murni Abila! Dirancang khusus untuk merawat kecantikan dan kesehatan kulit juga tubuh Anda secara alami. Diperkaya dengan nutrisi kelapa murni yang membantu menjaga kelembapan dan memperkuat rambut, produk ini adalah pilihan terbaik untuk perawatan harian Anda. Rasakan sentuhan lembutnya dan buktikan keunggulannya hari ini!",
      sedikitnya: "Baca Lebih Sedikit",
      about6: "Kenapa Harus",
      about61: " Abila?",
      about7:
        "Berikut adalah kutipan dari para pakar kesehatan tentang manfaat minyak kelapa murni untuk kesehatan dan kecantikan tubuh",
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
      about5:
        "Jadikan minyak kelapa murni Abila bagian dari rutinitas kecantikan dan kesehatan Anda serta rasakan perbedaannya. Dengan penggunaan yang konsisten, Anda tidak hanya merawat diri tetapi juga menikmati hasil yang nyata. Optimalisasi kecantikan juga kesehatan Anda dengan keajaiban alami dari minyak kelapa Abila hari ini.",
      about18: "Membantu Perawatan",
      about19: "Untuk Kesehatan dan Kecantikan Anda",
      about20: "Tersertifikasi Halal Republik Indonesia dengan",
      about21: "ID00110000440040622",
      about22: "Diperkaya dengan",
      about23: "Vitamin E",
      about24: "dan",
      about25: "Asam Lemak Esensial",
      about26: "Untuk Membuat Kulit yang Sehat dan Bersinar",
      terjual: "Produk Terjual",
      lihat: "Lihat Produk",
      mitra: "Mitra Kami",
      lihatmitra: "Lihat Mitra",
      komunitas: "Pengikut dan Komunitas",
      lihatkomunitas: "Gabung Komunitas",
      // Index Product Section
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
      // Index Blog Section
      keunggulan1: "KEUNGGULAN ",
      keunggulan2: "MINYAK ",
      keunggulan3: "KELAPA",
      blog1:
        "VCO (virgin coconut oil) memang telah diteliti memiliki banyak manfaat bagi kesehatan, di antaranya untuk membantu menurunkan berat badan, mencegah serangan jantung, mengatasi resistensi insulin pada penderita diabetes, dan menjaga kesehatan kulit.",
      blog2:
        "Manfaat minyak kelapa untuk ibu hamil 6 bulan ke atas bisa digunakan sebagai minyak pijat. Bagus untuk kulit, sekaligus mengurangi rasa sakit dan nyeri otot yang biasanya datang pada trimester ke-3 kehamilan.",
      blog3:
        "Virgin Coconut Oil (VCO) aman-aman saja untuk dikonsumsi wanita yang sedang hamil dan hingga saat ini tidak terbukti ada dampak negatif tertentu terhadap kehamilan dan janin dalam kandungan. VCO diketahui memiliki banyak manfaat bagi kesehatan, antara lain meningkatkan kerja sistem imunitas tubuh, mencegah dan membantu mengatasi infeksi bakteri ataupun virus, dapat menurunkan kadar kolesterol jahat dan meningkatkan kadar kolesterol baik, dan lain sebagainya.",
      blog4:
        "Minyak kelapa murni mampu mengembalikan pancaran kulit dalam waktu singkat.",
      blog5:
        "Minyak kelapa adalah minyak yang paling penting karena mengandung Asam Lemak laurat. Lemak laurat memiliki sifat unik untuk digunakan dalam industri makanan serta penggunaan sabun dan industri kosmetik.",
      blog6:
        "Minyak kelapa murni bukanlah hal baru. Penggunaannya telah digunakan oleh praktisi pengobatan Ayurveda di India sejak 3 hingga 4 ribu tahun yang lalu. Ini karena minyak kelapa murni adalah obat untuk berbagai penyakit.",
      blog7:
        "Minyak kelapa membantu mencegah obesitas, meningkatkan kekebalan, melindungi dari bakteri, virus, dan jamur sekaligus memastikan jantung yang sehat.",
      blog8:
        "Jika ada minyak yang bisa digunakan setiap hari untuk makan yang membantu masalah jantung, kanker, dan penyakit kritis lainnya serta membantu proses pencernaan dan sistem kekebalan tubuh, apakah Anda tertarik? Jika demikian, saya sarankan untuk menggunakan minyak kelapa.",
      blog9:
        "Minyak kelapa meningkatkan pencernaan yang sehat dan anti-inflamasi. Keduanya penting dalam membantu meredakan refluks alias asam lambung naik yang menyakitkan selama akhir kehamilan.",
      // Index FAQ Section
      faq: "Cari Tahu tentang Abila",
      faq1: "FAQ :",
      faq2: "Minyak Kelapa Murni",
      q1: "Apa itu minyak kelapa murni?",
      a1: "Minyak kelapa murni adalah minyak yang diperoleh dari daging kelapa segar yang diproses tanpa menggunakan bahan kimia atau pemanasan berlebih. Proses ini mempertahankan kualitas nutrisi dan rasa alami minyak kelapa.",
      q2: "Apa perbedaan antara minyak kelapa murni dan minyak kelapa terhidrogenasi?",
      a2: "Minyak kelapa murni adalah minyak yang diperoleh dari kelapa segar tanpa proses kimia tambahan, sementara minyak kelapa terhidrogenasi telah mengalami proses kimia untuk meningkatkan umur simpan dan stabilitasnya, yang dapat menghilangkan beberapa manfaat kesehatan.",
      q3: "Apa manfaat kesehatan dari minyak kelapa murni?",
      a3: "Minyak kelapa murni mengandung asam lemak jenuh sehat, seperti asam laurat, yang dapat mendukung kesehatan jantung, meningkatkan sistem kekebalan tubuh, dan memiliki sifat anti-inflamasi dan antibakteri.",
      q4: "Bagaimana cara menyimpan minyak kelapa murni?",
      a4: "Simpan minyak kelapa murni di tempat yang sejuk dan kering, jauh dari sinar matahari langsung. Jika disimpan dengan benar, minyak kelapa murni dapat bertahan lama tanpa mudah tengik.",
      q5: "Bisakah minyak kelapa murni digunakan untuk memasak?",
      a5: "Ya, minyak kelapa murni cocok untuk memasak karena memiliki titik asap yang tinggi, sehingga aman digunakan untuk memasak dengan suhu tinggi. Selain itu, rasanya yang lembut dapat menambah cita rasa pada berbagai hidangan.",
      q6: "Apa saja penggunaan lain dari minyak kelapa murni?",
      a6: "Selain digunakan dalam memasak, minyak kelapa murni juga sering digunakan dalam perawatan kulit dan rambut, seperti untuk melembapkan kulit, mengurangi kerutan, atau sebagai masker rambut.",
      q7: "Apakah minyak kelapa murni aman untuk semua orang?",
      a7: "Minyak kelapa murni umumnya aman untuk sebagian besar orang, tetapi bagi mereka yang memiliki alergi terhadap kelapa atau kondisi kesehatan tertentu, sebaiknya konsultasikan dengan profesional medis sebelum menggunakannya.",
      q8: "Bagaimana cara membedakan minyak kelapa murni dari minyak kelapa biasa?",
      a8: "Minyak kelapa murni biasanya memiliki label yang menyebutkan bahwa produk tersebut 'virgin' atau 'extra virgin', dan umumnya memiliki aroma kelapa yang khas. Minyak kelapa biasa atau olahan mungkin memiliki proses pemurnian dan penghilangan rasa.",
      // Catalog
      cat1: "Produk",
      cat2: "Unggulan",
      catalog1: "Temukan produk-produk terbaik kami disini",
      catalog2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusantium iste iusto at quia dicta.",
      catalog3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis ullam molestiae? Adipisci assumenda tenetur eius ea atque a nihil?",
      catalog4: "Kategori : Minyak Kelapa",
      vco250: "VCO Minyak Kelapa 250 ml",
      vco250title:
        "VCO Oil Minyak Kelapa Murni 250ml - Minyak VCO Untuk Kecantikan - Minyak Virgin Coconut Oil Herbal",
      terjual: "Produk Terjual",
      sekarang: "Dapatkan Sekarang",
      vco500: "VCO Minyak Kelapa 500 ml",
      vco500title:
        "VCO Oil Minyak Kelapa Murni 500ml - Minyak VCO Untuk Kecantikan - Minyak Virgin Coconut Oil Herbal",
      // Cat1Pro
      jumlah: "Jumlah : ",
      keranjang: "Masukkan Keranjang",
      beli: "Beli Sekarang",
      desc: "Deskripsi",
      howto: "Cara Penggunaan",
      review: "Review",
      desminyak: "Minyak kelapa Abila",
      manfaat: "Manfaat",
      desmanfaat1:
        "Memasak: Minyak kelapa murni memiliki titik didih tinggi sehingga aman untuk digunakan untuk menggoreng, menumis, dan membakar makanan. Minyak ini juga dapat memberikan rasa kelapa yang lezat pada masakan Anda. Menjaga kesehatan: Minyak kelapa murni mengandung asam lemak laurat yang tinggi, yang memiliki sifat antimikroba dan antivirus. Minyak ini dapat membantu meningkatkan kekebalan tubuh, melawan infeksi, dan menjaga kesehatan pencernaan. Merawat kecantikan: Minyak kelapa murni dapat digunakan sebagai pelembap alami untuk kulit dan rambut. Minyak ini dapat membantu menghidrasi kulit, mengatasi rambut kering dan kusam, dan bahkan membantu pertumbuhan rambut. Keunggulan :",
      desmanfaat2:
        "Murni: Dibuat dari 100% santan kelapa segar tanpa bahan kimia tambahan. Sehat: Kaya akan asam lemak laurat yang bermanfaat untuk kesehatan. Serbaguna: Dapat digunakan untuk memasak, menjaga kesehatan, dan merawat kecantikan. Praktis: Kemasan 250 ml mudah disimpan dan dibawa ke mana saja.",
      desmanfaat3:
        "Memasak: Gunakan minyak kelapa murni untuk menggoreng, menumis, atau membakar makanan. Menjaga kesehatan: Minum 1-2 sendok makan minyak kelapa murni setiap pagi dengan air hangat. Merawat kecantikan: Gunakan minyak kelapa murni sebagai pelembap untuk kulit dan rambut. Simpan di tempat yang sejuk dan terhindar dari sinar matahari langsung.",
      howtodes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente alias repellendus provident sed harum ad necessitatibus commodi! Labore sunt officia rerum id nemo doloremque asperiores nostrum. Labore, in quis.",
      // VCO 250
      desminyak250:
        "Minyak kelapa murni dalam kemasan 250 ml ini terbuat dari 100% santan kelapa segar pilihan yang diolah tanpa bahan kimia tambahan. Minyak ini kaya akan manfaat untuk kesehatan dan kecantikan, menjadikannya pilihan ideal untuk berbagai kebutuhan di rumah Anda.",
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
  document.querySelectorAll("[data-key]").forEach((elem) => {
    const key = elem.getAttribute("data-key");
    if (translations[lang] && translations[lang].hasOwnProperty(key)) {
      elem.textContent = translations[lang][key];
    }
  });
}

// Update language button styles

function updateLanguageStyles(lang) {
  const langIn = document.getElementById("lang-in");
  const langEn = document.getElementById("lang-en");

  if (lang === "id") {
    langIn.classList.add("not-lang");
    langIn.classList.remove("scrolled");
    langEn.classList.add("scrolled");
    langEn.classList.remove("not-lang");
  } else {
    langEn.classList.add("not-lang");
    langEn.classList.remove("scrolled");
    langIn.classList.add("scrolled");
    langIn.classList.remove("not-lang");
  }
}

// Load the selected language on page load
document.addEventListener("DOMContentLoaded", () => {
  const selectedLang = localStorage.getItem("selectedLang") || "id";
  if (!selectedLang) {
    // Auto-detect user language
    const userLang = navigator.language || navigator.userLanguage;
    selectedLang = userLang.startsWith("id") ? "id" : "en";
  }
  console.log(selectedLang);
  setLanguage(selectedLang);
});

// Event listeners for language buttons
document
  .getElementById("lang-in")
  .addEventListener("click", () => setLanguage("id"));
document
  .getElementById("lang-en")
  .addEventListener("click", () => setLanguage("en"));
