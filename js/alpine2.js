document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        img: "1.jpg",
        name: "VCO Minyak Kelapa 100 ml",
        desk: "VCO Oil Minyak Kelapa Murni 100ml - Minyak VCO Untuk Kecantikan - Minyak Virgin Coconut Oil Herbal",
        price: 40000,
        link: "<a href='cat1pro1.html'></a>",
      },
      {
        id: 2,
        img: "2.jpg",
        name: "VCO Minyak Kelapa 250 ml",
        desk: "VCO Oil Minyak Kelapa Murni 250ml - Minyak VCO Untuk Kecantikan - Minyak Virgin Coconut Oil Herbal",
        price: 60000,
        link: "<a href='cat1pro1.html'></a>",
      },
      {
        id: 3,
        img: "3.jpg",
        name: "VCO Minyak Kelapa 500 ml",
        desk: "VCO Oil Minyak Kelapa Murni 500ml - Minyak VCO Untuk Kecantikan - Minyak Virgin Coconut Oil Herbal",
        price: 95000,
        link: "<a href='cat1pro2.html'></a>",
      },
      {
        id: 4,
        img: "4.jpg",
        name: "VCO Minyak Kelapa 1000 ml",
        desk: "VCO Oil Minyak Kelapa Murni 1000ml - Minyak VCO Untuk Kecantikan - Minyak Virgin Coconut Oil Herbal",
        price: 120000,
        link: "<a href='cat1pro3.html'></a>",
      },
    ],
  }));
});
