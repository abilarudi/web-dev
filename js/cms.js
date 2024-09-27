// // Initialize accordions on document ready
// document.addEventListener("click", initializeAccordions);
document.addEventListener("DOMContentLoaded", async function () {
  try {
    // Fetch and display FAQ
    await fetchAndDisplayFAQ();

    // Fetch and display articles
    await fetchAndDisplayArticles();

    // Fetch and display products
    await fetchAndDisplayProducts();

    // Initialize slick carousel and event listeners
    initializeSlickCarousel();
  } catch (error) {
    console.error("Error fetching the data:", error);
  }
});

// Function to fetch and display FAQ
async function fetchAndDisplayFAQ() {
  try {
    const response = await fetch(
      "https://admin.abilaindonesia.com/wp-json/custom-cms/v1/faq-section"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch FAQ data");
    }

    const data = await response.json();
    const qnaContainer = document.getElementById("QnA-border");

    if (qnaContainer) {
      // Create a fragment to minimize reflows and repaints
      const fragment = document.createDocumentFragment();

      data.forEach((faq) => {
        const qnaDiv = document.createElement("div");
        qnaDiv.classList.add("QnA");

        const questionButton = document.createElement("button");
        questionButton.classList.add(
          "Question",
          "text-2xl",
          "p-4",
          "md:text-xl",
          "font-semibold"
        );
        questionButton.dataset.key = `q${faq.id}`;
        questionButton.textContent = faq.tanya;

        const answerDiv = document.createElement("div");
        answerDiv.classList.add("Answer", "text-xl", "md:text-lg", "p-4");
        const answerParagraph = document.createElement("p");
        answerParagraph.dataset.key = `a${faq.id}`;
        answerParagraph.textContent = faq.jawab;
        answerDiv.appendChild(answerParagraph);

        qnaDiv.appendChild(questionButton);
        qnaDiv.appendChild(answerDiv);
        fragment.appendChild(qnaDiv);
      });

      // Append the fragment to the container
      qnaContainer.appendChild(fragment);

      // Initialize accordion functionality
      var acc = document.getElementsByClassName("Question");
      for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
    } else {
      console.error('Element with ID "QnA-border" not found in the DOM.');
    }
  } catch (error) {
    console.error("Error fetching or displaying FAQ:", error);
  }
}

// Function to fetch and display articles
async function fetchAndDisplayArticles() {
  try {
    const response = await fetch(
      "https://admin.abilaindonesia.com/wp-json/custom-cms/v1/article-section"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch article data");
    }

    const data = await response.json();
    const blogContent = document.getElementById("blogContent");

    // Create a fragment to minimize reflows and repaints
    const fragment = document.createDocumentFragment();

    data.forEach((item) => {
      const blogItem = createElement("div", null, ["blog-item"]);

      const kutipan = createElement("div", null, ["kutipan"]);
      const markTop = createElement("div", "''", ["mark-top"]);
      const content = createElement("div", item.article, ["content"]);
      const markBot = createElement("div", "''", ["mark-bot"]);

      const sumber = createElement("div", null, ["sumber"]);
      const tokoh = createElement("div", item.tokoh ? `"${item.tokoh}"` : "", [
        "tokoh",
      ]);
      const link = createElement("div", null, ["link"]);

      const anchor = createElement("a", item.ref);
      anchor.href = item.ling;

      // Append children to their respective parents
      appendChildren(link, [anchor]);
      appendChildren(sumber, [tokoh, link]);
      appendChildren(kutipan, [markTop, content, markBot, sumber]);
      blogItem.appendChild(kutipan);

      // Append the blog item to the fragment
      fragment.appendChild(blogItem);
    });

    // Append the fragment to the container
    blogContent.appendChild(fragment);

    // After the blog content is loaded, initialize the slick carousel
    initializeSlickCarousel();
  } catch (error) {
    console.error("Error fetching article data:", error);
  }
}

// Function to Fetch and Display Products
async function fetchAndDisplayProducts() {
  try {
    const response = await fetch(
      "https://admin.abilaindonesia.com/wp-json/custom-cms/v1/product-section"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }

    const data = await response.json();
    const productListContainer = document.getElementById("product-list");
    const catContainer = document.getElementById("cat"); // New container for the template

    // Create a fragment to minimize reflows and repaints
    const fragment = document.createDocumentFragment();
    const catFragment = document.createDocumentFragment(); // New fragment for the template

    data.forEach((product) => {
      const productLink = createElement("a", product.title);
      productLink.href = `#product/${product.id}`;
      productLink.style.display = "block";

      // Append the link to the fragment
      fragment.appendChild(productLink);

      // Create the new template and append it to the catFragment
      const productCard = document.createElement("div");
      productCard.classList.add("relative", "mx-auto", "w-full");

      productCard.innerHTML = `
        <a
          href="#product/${product.id}"
          class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
        >
          <div class="relative z-0 shadow p-4 rounded-lg bg-white">
            <p
              class="absolute z-10 top-1 left-1 bg-custom-green-30 text-custom-green-100 p-1 rounded"
              data-key="terlaris"
            >
              Produk terlaris
            </p>
            <div
              class="flex justify-center mx-auto relative z-20 rounded-lg overflow-hidden w-40 h-max md:w-56 md:h-56 mt-7"
            >
              <img
                src="${product.thumbnail}" 
                alt="${product.title}"
                class="w-full h-full"
              />
              <div
                class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full"
              >
                <div class="absolute inset-0 bg-black opacity-10"></div>
              </div>
            </div>

            <div class="mt-4 border-b-2">
              <h2
                class="font-bold text-base md:text-lg text-gray-800 line-clamp-1"
                title="${product.title}"
                data-key="vco250"
              >
                ${product.title}
              </h2>
              <p
                class="mt-2 text-sm text-gray-800 line-clamp-1 mb-2"
                title="${product.description}"
                data-key="vco250title"
              >
                ${product.description}
              </p>
            </div>

            <div class="grid grid-cols-2 gap-3 mt-8">
              <div class="flex items-center">
                <div class="relative">
                  <div class="">
                    <span class="text-yellow-800 font-bold text-sm">${product.selled}</span>
                  </div>
                  <span
                    class="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"
                  ></span>
                </div>

                <p
                  class="ml-2 text-gray-800 line-clamp-1 text-sm"
                  data-key="terjual"
                >
                  Produk Terjual
                </p>
              </div>

              <div class="flex justify-end">
                <p
                  class="inline-block font-semibold bg-custom-green-30 text-custom-green-100 whitespace-nowrap leading-tight rounded p-2"
                >
                  <span class="text-sm" data-key="sekarang">Dapatkan Sekarang</span>
                </p>
              </div>
            </div>
          </div>
        </a>
      `;

      catFragment.appendChild(productCard); // Append the card to the catFragment
    });

    // Append the fragments to their respective containers
    productListContainer.appendChild(fragment);
    catContainer.appendChild(catFragment); // Append the catFragment to #cat

    // After the product list is loaded, initialize routing
    setupRoutes(data);
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
}

// Function to render product details
function renderProductDetail(productId, products) {
  const productListContainer = document.getElementById("product-list");
  productListContainer.style.display = "none";
  const productDetailContainer = document.getElementById("product-detail");
  const product = products.find((p) => p.id == productId);

  if (product) {
    productDetailContainer.innerHTML = `
                <h2>${product.title}</h2>
                <img src="${product.thumbnail}" alt="${product.title}" />
                <p>Price: ${product.price}</p>
                <p>Description: ${product.description}</p>
                <p>How To Use: ${product.howto}</p>
                <p>Sold: ${product.selled}</p>
                <div>
                    ${product.media
                      .map(
                        (image) =>
                          `<img src="${image}" style="width: 100px; margin-right: 10px;">`
                      )
                      .join("")}
                </div>
                <a href="/product.html">Back to product list</a>
            `;
  } else {
    productDetailContainer.innerHTML = "<p>Product not found.</p>";
  }
}

// Function to setup routes
function setupRoutes(products) {
  // Home route
  function showHome() {
    document.getElementById("product-detail").innerHTML =
      "<p>Please select a product from the list.</p>";
  }

  // Product detail route
  function showProductDetail() {
    const hash = window.location.hash.substring(1); // Remove #
    const [path, id] = hash.split("/");
    if (path === "product") {
      renderProductDetail(id, products);
    } else {
      showHome();
    }
  }

  // Listen for hash changes
  window.addEventListener("hashchange", showProductDetail);
  // Initial route handling
  showProductDetail();
}

// Utility function to create an element with optional text and class names
function createElement(tag, textContent = null, classNames = []) {
  const element = document.createElement(tag);
  if (textContent) element.textContent = textContent;
  if (classNames.length) element.classList.add(...classNames);
  return element;
}

// Utility function to append multiple children to a parent element
function appendChildren(parent, children) {
  children.forEach((child) => parent.appendChild(child));
}

// Improved lazyLoadImages function with throttling and better performance
function lazyLoadImages() {
  const lazyImages = document.querySelectorAll("img.lazy");

  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach((lazyImage) => {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for older browsers
    lazyImages.forEach((lazyImage) => {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove("lazy");
    });
  }
}

// Function to initialize accordion click listeners
function initializeAccordions() {
  const accordions = document.getElementsByClassName("Question");

  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  }
}

// Function to initialize slick carousel and toggle active class
function initializeSlickCarousel() {
  $(document).ready(function () {
    function applySlick() {
      $(".blog-content").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    }

    function applySlickPC() {
      $(".blog-content").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      });
    }

    function toggleActiveClass() {
      $(".blog .blog-content .blog-item").click(function () {
        $(".blog .blog-content .blog-item").not(this).removeClass("active");
        $(this).toggleClass("active");
      });
    }

    function init() {
      // Check window width
      var windowWidth = $(window).width();

      if (windowWidth <= 768) {
        // Tablet or mobile screen size
        applySlick();
        toggleActiveClass();
      } else {
        // Desktop screen size
        applySlickPC();
        toggleActiveClass();
      }
    }

    // Call init function when the document is ready
    init();

    // Re-initialize on window resize
    $(window).resize(function () {
      init();
    });
  });
}

// Initialize accordions on document ready
document.addEventListener("click", initializeAccordions);
