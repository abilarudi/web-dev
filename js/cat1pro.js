// Define the observer
const observer = new MutationObserver(() => {
  // Counter
  const counterElement = document.getElementById("counter");
  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");

  if (counterElement && incrementButton && decrementButton) {
    // Attach the event listeners
    incrementButton.addEventListener("click", function () {
      updateCounter(1);
    });

    decrementButton.addEventListener("click", function () {
      updateCounter(-1);
    });

    // Stop observing once the elements are found and listeners are attached
    observer.disconnect();
  }
});

// Start observing for changes in the body or container
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Function to update the counter
function updateCounter(increment) {
  const counterElement = document.getElementById("counter");
  let currentValue = parseInt(counterElement.innerText);
  currentValue += increment;
  if (currentValue < 0) {
    currentValue = 0;
  }
  counterElement.innerText = currentValue;
  // updateWhatsAppLink(currentValue);
}

// Function to update the WhatsApp link
function updateWhatsAppLink(quantity) {
  const productName = "Product Name"; // Replace with dynamic product name if needed
  const productPrice = 10000; // Replace with dynamic product price if needed
  const message = `Halo, saya ingin memesan ${productName} sebanyak ${quantity} buah dengan harga total Rp ${
    productPrice * quantity
  }.`;
  const phoneNumber = "628123456789"; // Replace with your WhatsApp number
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  whatsappLink.href = whatsappURL;
}

// Initial update of the WhatsApp link
updateWhatsAppLink(parseInt(counterElement.innerText));

// Define the observer
const observers = new MutationObserver(() => {
  const sumcontentElements = document.getElementsByClassName("sumcontent");
  const deskElements = document.getElementsByClassName("desk");

  // Check if both sumcontent and desk elements exist
  if (sumcontentElements.length > 0 && deskElements.length > 0) {
    // Attach the click event listeners to the "desk" elements
    for (let i = 0; i < deskElements.length; i++) {
      deskElements[i].addEventListener("click", function (evt) {
        openCity(evt, deskElements[i].getAttribute("data-city")); // Assume "data-city" holds the city name
      });
    }

    // Open the default tab (Deskripsi)
    openCity(null, "Deskripsi");

    // Stop observing once the elements are found and listeners are attached
    observers.disconnect();
  }
});

// Start observing for changes in the body or container
observers.observe(document.body, {
  childList: true,
  subtree: true,
});

// Function to open the city (tab)
function openCity(evt, cityName) {
  var i, sumcontent, desk;
  console.log("aloo");

  // Hide all content with the class 'sumcontent'
  sumcontent = document.getElementsByClassName("sumcontent");
  for (i = 0; i < sumcontent.length; i++) {
    sumcontent[i].style.display = "none";
  }

  // Remove 'active' class from all desk elements
  desk = document.getElementsByClassName("desk");
  for (i = 0; i < desk.length; i++) {
    desk[i].className = desk[i].className.replace(" active", "");
  }

  // Show the content for the selected city and add the 'active' class
  const cityElement = document.getElementById(cityName);
  if (cityElement) {
    cityElement.style.display = "block";
  }
  if (evt) {
    evt.currentTarget.className += " active";
  }
}

// You can add more observers or other functionality here as needed.

// // function toggle class active shopping cart
// const cart = document.querySelector("#shopping-cart");
// document.querySelector("#shopping").onclick = (e) => {
//   cart.classList.toggle("active");
//   e.preventDefault();
// };

// function openCity(evt, cityName) {
//   var i, sumcontent, desk;
//   sumcontent = document.getElementsByClassName("sumcontent");
//   for (i = 0; i < sumcontent.length; i++) {
//     sumcontent[i].style.display = "none";
//   }
//   desk = document.getElementsByClassName("desk");
//   for (i = 0; i < desk.length; i++) {
//     desk[i].className = desk[i].className.replace(" active", "");
//   }

//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
// document.addEventListener("DOMContentLoaded", function () {
//   openCity(null, "Deskripsi");
// });
