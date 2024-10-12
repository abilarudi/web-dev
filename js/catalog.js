// Order by WhatsApp
// Retrieve the selected language from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const selectedLang = localStorage.getItem("selectedLang") || "id";
  console.log("Selected Language in catalog.js:", selectedLang);
  // Use the selectedLang variable as needed
  // For example, you can call a function to set the language
  // setLanguage(selectedLang);
});

// Utility function to create elements with classes and content
function createElement(tag, content = "", classes = []) {
  const element = document.createElement(tag);
  if (content) element.textContent = content;
  if (classes.length > 0) element.classList.add(...classes);
  return element;
}

// Utility function to append multiple children to a parent
function appendChildren(parent, children) {
  children.forEach((child) => parent.appendChild(child));
}

const catContent = document.getElementById("catalog-content"); // New container for the template

async function fetchAndDisplayProducts() {
  try {
    const response = await fetch(
      "https://admin.abilaindonesia.com/wp-json/custom-cms/v1/product-section"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }

    const data = await response.json();
    const catContainer = document.getElementById("cat"); // New container for the template

    // Add the specified class and style to the catContent element

    // Create a fragment to minimize reflows and repaints
    const catFragment = document.createDocumentFragment(); // New fragment for the template

    data.forEach((product) => {
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

    catContainer.appendChild(catFragment); // Append the catFragment to #cat

    clearAndRenderBody(navbar, catContent, footer);
    // After the product list is loaded, initialize routing
    setupRoutes(data);
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
}

// Function to render product details
async function renderProductDetail(productId, products) {
  // Dynamically add the CSS file to the document head
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "CSS/slide.css";
  document.head.appendChild(link);

  const productss = document.createElement("section");

  // Add the product list to the body
  productss.id = "products";
  document.body.appendChild(productss);

  const productContainer = document.getElementById("products");
  const product = products.find((p) => p.id == productId);

  if (product) {
    // Format product.description and product.benefits
    const formattedDescription = formatDescription(product.description);
    productContainer.innerHTML = `
          <section
  class="p-10 w-full h-max relative"
  style="background-image: url('/image/catalogpro/bg.svg')"
>
            <img
              src="image/catalogpro/awan-3.svg"
              alt=""
              class="absolute z-0 bottom-0 right-0 w-[35%] md:w-[20%]"
            />
            <img
              src="image/catalogpro/awan-4.svg"
              alt=""
              class="absolute z-0 bottom-0 left-0 w-[35%] md:w-[20%]"
            />
            <img
              src="image/catalogpro/pohon1.svg"
              alt=""
              class="w-[35%] md:w-[30%] absolute z-0 bottom-0 left-0 hidden xl:block"
            />

            <div
              class="relative container flex flex-col mx-auto lg:flex-row text-gray-800 rounded-xl mt-20 mb-6 bg-orange-100"
            >
              <img
                src="image/catalogpro/+.svg"
                alt=""
                class="w-[10%] xl:w-[5%] absolute z-20 top-0 left-0"
              />
              <img
                src="image/catalogpro/kelapa.svg"
                alt=""
                class="w-[10%] absolute z-20 bottom-0 right-0 hidden md:block"
              />

              <!-- slider img-->
              <div class="relative w-full xl:w-2/5 h-max rounded-xl z-20">
                <div class="relative flex items-center justify-center p-14 lg:p-12">
                  <div class="carousel">
                    <div class="carousel-inner">
                      ${product.media
                        .map(
                          (image, index) => `
                            <input
                              class="carousel-open"
                              type="radio"
                              id="carousel-${index + 1}"
                              name="carousel"
                              aria-hidden="true"
                              hidden=""
                              checked="${index === 0 ? "checked" : ""}"
                            />
                            <div class="carousel-item">
                              <img src="${image}" alt="Product Image ${
                            index + 1
                          }" />
                            </div>
                          `
                        )
                        .join("")}
                      <label for="carousel-${
                        product.media.length
                      }" class="carousel-control prev control-1">‹</label>
                      <label for="carousel-1" class="carousel-control next control-${
                        product.media.length
                      }">›</label>
                      <ol class="carousel-indicators">
                      ${product.media
                        .map(
                          (image, index) => `
                          <li>
                            <label for="carousel-${
                              index + 1
                            }" class="carousel-bullet">•</label>
                          </li>
                          `
                        )
                        .join("")}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <!-- content -->
              <div
                class="relative z-40 flex flex-col px-5 py-8 space-y-6 rounded-xl sm:p-8 w-full xl:w-3/5 lg:p-12 h-max xl:h-72 text-black"
              >
                <img
                  src="image/catalogpro/pohon2.svg"
                  alt=""
                  class="w-[30%] absolute z-30 block xl:hidden bottom-0 right-0"
                />
                <div class="relative z-50 flex space-x-2 sm:space-x-4">
                  <div class="space-y-4">
                    <p class="text-3xl font-semibold leading-snug">
                      ${product.title}
                    </p>
                  </div>
                </div>

                <div class="relative flex space-x-2 sm:space-x-4">
                  <div class="space-y-4">
                    <p class="text-3xl font-bold leading-snug">Rp ${
                      product.price
                    }</p>
                  </div>
                </div>

                <div class="flex space-x-2 sm:space-x-4">
                  <div class="space-y-4 flex gap-x-10">
                    <div alt="quantity">
                      <p class="text-2xl font-semibold mt-4">Jumlah:</p>
                    </div>
                    <div class="flex items-center text-xl mt-2">
                      <button
                        id="decrement"
                        class="border bg-yellow-900 hover:bg-yellow-950 text-gray-50 px-4 rounded-md mr-2"
                      >
                        -
                      </button>
                      <span id="counter" class="text-center w-8">1</span>
                      <button
                        id="increment"
                        class="border bg-yellow-900 hover:bg-yellow-950 text-gray-50 px-4 rounded-md ml-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div class="relative z-50 w-full h-max flex justify-start gap-10">
                  <a
                    href="https://wa.me/6281212345678"
                    id="wa"
                    class="relative z-50 px-4 py-3 mt-10 xl:mt-20 text-lg font-semibold rounded bg-yellow-900 hover:bg-yellow-950 text-gray-50"
                  >
                    <span class="italic">Order via WhatsApp</span>
                  </a>
                  <a
                    href="https://shopee.co.id/abilaindonesia"
                    class="relative z-50 px-4 py-3 mt-10 xl:mt-20 text-lg font-semibold rounded bg-yellow-900 hover:bg-yellow-950 text-gray-50"
                  >
                    <span class="italic">Order via Shopee</span>
                  </a>
                </div>
              </div>
            </div>se 
          </section>
          
          <section
            class="category pt-10 w-full h-max relative z-0"
            id="category"
            style="background-image: url('/image/catalogpro/bg.svg')"
          >
            <img
              src="image/catalogpro/awan-1.svg"
              alt=""
              class="absolute z-0 top-0 left-0 w-[35%] md:w-[20%]"
            />
            <img
              src="image/catalogpro/awan-2.svg"
              alt=""
              class="absolute z-0 top-0 right-0 w-[35%] md:w-[20%]"
            />

            <!-- Product Description Section -->
            <div class="py-10 relative">
              <div class="product-description">
                <button class="desk" data-city="deskripsi" onclick="openCity(event,'Deskripsi')">Deskripsi</button>
                <button class="desk" data-city="howto" onclick="openCity(event,'Cara Penggunaan')">Cara Penggunaan</button>
              </div>

              <div class="border-sum">
                <div id="Deskripsi" class="sumcontent" style="display:block">
                  <div class="desc-fix">
                    <div  class="content-desc p-5 text-xl">${formattedDescription}</div>
                  </div>

                </div>

                <div id="Cara Penggunaan howto" class="sumcontent">
                  <div class="content-desc p-5 text-xl">${product.howto}</div>
                </div>
              </div>
            </div>
          </section>

          `;
  } else {
    productContainter.innerHTML = "<p>Product not found.</p>";
  }

  // Wait for the content to be fully loaded
  await new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve();
    } else {
      window.addEventListener("load", resolve);
    }
  });
  clearAndRenderBody(navbar, productContainer, footer);
}

function clearAndRenderBody(navbar, productContainer, footer) {
  document.body.innerHTML = ""; // Clear the body

  document.body.appendChild(navbar); // Append the navbar
  document.body.appendChild(productContainer); // Append the product container
  document.body.appendChild(footer); // Append the footer
}

// Function to format description based on asterisks (*) and double line breaks (\r\n\r\n)
function formatDescription(text) {
  // Split the description based on double \r\n\r\n
  let paragraphs = text.split("\r\n\r\n");

  return paragraphs
    .map((paragraph) => {
      // Check for *{sentence}* pattern
      if (paragraph.includes("*")) {
        // Replace *{sentence}* with div.title-desc
        paragraph = paragraph.replace(/\*(.*?)\*/g, (match, p1) => {
          return `<div class="title-desc font-semibold text-2xl"><span>${p1}</span></div>`;
        });
      }

      // Wrap remaining content in div.content-desc
      return `<div class="content-desc p-5 text-xl">${paragraph}</div>`;
    })
    .join(""); // Combine all formatted paragraphs
}

document.addEventListener("DOMContentLoaded", () => {
  const wa = document.getElementById("wa");
  const counter = document.getElementById("counter").textContent;
  const message = `Halo, saya ingin memesan ${product.title} sebanyak ${counter} dengan harga ${product.price}.`;
  const url = `https://wa.me/6281212345678?text=${encodeURIComponent(message)}`;
  wa.href = url;
});

// Global Var
const footer = document.getElementById("footer");
const footers = document.createElement("footer");
footers.classList.add("w-full", "h-max", "bg-teal-800", "text-white");

// Function to setup routes
function setupRoutes(products) {
  hasReloaded = localStorage.setItem("hasReloaded", false);
  // Product detail route
  function showProductDetail() {
    const hash = window.location.hash.substring(1); // Remove #
    console.log("hash : " + window.location.hash);

    const [path, id] = hash.split("/");
    // Check if the hash is empty
    if (path === "catalog" && !localStorage.getItem("hasReloaded")) {
      localStorage.setItem("hasReloaded", true); // Set the flag to true
      window.location.reload();
      localStorage.setItem("hasReloaded", false);
      return;
    }
    console.log("hash : " + window.location.hash);

    if (path === "product") {
      console.log("path : " + path);
      console.log("id : " + id);
      renderProductDetail(id, products);
    }
  }

  // Listen for hash changes
  window.addEventListener("hashchange", showProductDetail);

  // Show the initial view
  showProductDetail();
}

// Call the function to fetch and display products when the page is loaded
document.addEventListener("DOMContentLoaded", fetchAndDisplayProducts);

function sendwa(product, price) {
  // Validate parameters
  if (typeof product !== "string" || typeof price !== "number") {
    console.error(
      "Invalid parameters: product should be a string and price should be a number."
    );
    return;
  }

  // Get the WhatsApp link element
  const wa = document.getElementById("wa");

  // Check if the element exists
  if (!wa) {
    console.error('Element with ID "wa" not found.');
    return;
  }

  // Create the message and URL
  const message = `Halo, saya ingin memesan ${product} dengan harga Rp${price}.`;
  const url = `https://wa.me/6281212345678?text=${encodeURIComponent(message)}`;

  // Set the href attribute of the element
  wa.href = url;
}
