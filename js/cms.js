// // document.addEventListener("DOMContentLoaded", async function () {
// //   try {
// //     await fetchAndDisplayFAQ();
// //   } catch (error) {
// //     console.error("Error fetching the data:", error);
// //   }
// // });

// // async function fetchAndDisplayFAQ() {
// //   const response = await fetch(
// //     "https://admin.abilaindonesia.com/wp-json/custom-cms/v1/faq-section"
// //   );
// //   if (!response.ok) {
// //     throw new Error("Failed to fetch FAQ data");
// //   }

// //   const data = await response.json();
// //   const qnaContainer = document.getElementById("QnA-border");

// //   // Create a fragment to minimize reflows and repaints
// //   const fragment = document.createDocumentFragment();

// //   data.forEach((faq) => {
// //     const qnaDiv = createElement("div", null, ["QnA"]);

// //     const questionButton = createElement("button", faq.tanya, [
// //       "Question",
// //       "text-2xl",
// //       "p-4",
// //       "md:text-xl",
// //       "font-semibold",
// //     ]);
// //     questionButton.dataset.key = `q${faq.id}`;

// //     const answerDiv = createElement("div", null, [
// //       "Answer",
// //       "text-xl",
// //       "md:text-lg",
// //       "p-4",
// //     ]);
// //     answerDiv.style.display = "none"; // Initially hide answers

// //     const answerParagraph = createElement("p", faq.jawab);
// //     answerParagraph.dataset.key = `a${faq.id}`;

// //     answerDiv.appendChild(answerParagraph);
// //     appendChildren(qnaDiv, [questionButton, answerDiv]);

// //     // Append the QnA div to the fragment
// //     fragment.appendChild(qnaDiv);

// //     // Add event listener for accordion effect
// //     questionButton.addEventListener("click", function () {
// //       this.classList.toggle("active");
// //       if (answerDiv.style.display === "block") {
// //         answerDiv.style.display = "none";
// //       } else {
// //         answerDiv.style.display = "block";
// //       }
// //     });
// //   });

// //   // Append the fragment to the container
// //   qnaContainer.appendChild(fragment);
// // }

// // function createElement(tag, textContent = null, classNames = []) {
// //   const element = document.createElement(tag);
// //   if (textContent) element.textContent = textContent;
// //   if (classNames.length) element.classList.add(...classNames);
// //   return element;
// // }

// // function appendChildren(parent, children) {
// //   children.forEach((child) => parent.appendChild(child));
// // }

// // // Improved lazyLoadImages with throttling and better performance
// // function lazyLoadImages() {
// //   const lazyImages = document.querySelectorAll("img.lazy");

// //   if ("IntersectionObserver" in window) {
// //     const lazyImageObserver = new IntersectionObserver((entries, observer) => {
// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           const lazyImage = entry.target;
// //           lazyImage.src = lazyImage.dataset.src;
// //           lazyImage.classList.remove("lazy");
// //           lazyImageObserver.unobserve(lazyImage);
// //         }
// //       });
// //     });

// //     lazyImages.forEach((lazyImage) => {
// //       lazyImageObserver.observe(lazyImage);
// //     });
// //   } else {
// //     // Fallback for older browsers
// //     lazyImages.forEach((lazyImage) => {
// //       lazyImage.src = lazyImage.dataset.src;
// //       lazyImage.classList.remove("lazy");
// //     });
// //   }
// // }

// // // Function to initialize accordion click listeners
// // function initializeAccordions() {
// //   const accordions = document.getElementsByClassName("Question");

// //   for (let i = 0; i < accordions.length; i++) {
// //     accordions[i].addEventListener("click", function () {
// //       this.classList.toggle("active");
// //       const panel = this.nextElementSibling;
// //       panel.style.display = panel.style.display === "block" ? "none" : "block";
// //     });
// //   }
// // }

// // // Initialize accordions on document ready
// // document.addEventListener("click", initializeAccordions);

// document.addEventListener("DOMContentLoaded", async function () {
//   try {
//     // Fetch and display FAQ
//     await fetchAndDisplayFAQ();

//     // Fetch and display articles
//     await fetchAndDisplayArticles();
//   } catch (error) {
//     console.error("Error fetching the data:", error);
//   }
// });

// // Function to fetch and display FAQ
// async function fetchAndDisplayFAQ() {
//   try {
//     const response = await fetch(
//       "https://admin.abilaindonesia.com/wp-json/custom-cms/v1/faq-section"
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch FAQ data");
//     }

//     const data = await response.json();
//     const qnaContainer = document.getElementById("QnA-border");

//     // Create a fragment to minimize reflows and repaints
//     const fragment = document.createDocumentFragment();

//     data.forEach((faq) => {
//       const qnaDiv = createElement("div", null, ["QnA"]);

//       const questionButton = createElement("button", faq.tanya, [
//         "Question",
//         "text-2xl",
//         "p-4",
//         "md:text-xl",
//         "font-semibold",
//       ]);
//       questionButton.dataset.key = `q${faq.id}`;

//       const answerDiv = createElement("div", null, [
//         "Answer",
//         "text-xl",
//         "md:text-lg",
//         "p-4",
//       ]);
//       answerDiv.style.display = "none"; // Initially hide answers

//       const answerParagraph = createElement("p", faq.jawab);
//       answerParagraph.dataset.key = `a${faq.id}`;

//       answerDiv.appendChild(answerParagraph);
//       appendChildren(qnaDiv, [questionButton, answerDiv]);

//       // Append the QnA div to the fragment
//       fragment.appendChild(qnaDiv);

//       // Add event listener for accordion effect
//       questionButton.addEventListener("click", function () {
//         this.classList.toggle("active");
//         if (answerDiv.style.display === "block") {
//           answerDiv.style.display = "none";
//         } else {
//           answerDiv.style.display = "block";
//         }
//       });
//     });

//     // Append the fragment to the container
//     qnaContainer.appendChild(fragment);
//   } catch (error) {
//     console.error("Error fetching FAQ data:", error);
//   }
// }

// // Function to fetch and display articles
// async function fetchAndDisplayArticles() {
//   try {
//     const response = await fetch(
//       "https://admin.abilaindonesia.com/wp-json/custom-cms/v1/article-section"
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch article data");
//     }

//     const data = await response.json();
//     const blogContent = document.getElementById("blogContent");

//     // Create a fragment to minimize reflows and repaints
//     const fragment = document.createDocumentFragment();

//     data.forEach((item) => {
//       const blogItem = createElement("div", null, ["blog-item"]);

//       const kutipan = createElement("div", null, ["kutipan"]);
//       const markTop = createElement("div", "''", ["mark-top"]);
//       const content = createElement("div", item.article, ["content"]);
//       const markBot = createElement("div", "''", ["mark-bot"]);

//       const sumber = createElement("div", null, ["sumber"]);
//       const tokoh = createElement("div", item.tokoh ? `"${item.tokoh}"` : "", [
//         "tokoh",
//       ]);
//       const link = createElement("div", null, ["link"]);

//       const anchor = createElement("a", item.ref);
//       anchor.href = item.ling;

//       // Append children to their respective parents
//       appendChildren(link, [anchor]);
//       appendChildren(sumber, [tokoh, link]);
//       appendChildren(kutipan, [markTop, content, markBot, sumber]);
//       blogItem.appendChild(kutipan);

//       // Append the blog item to the fragment
//       fragment.appendChild(blogItem);
//     });

//     // Append the fragment to the container
//     blogContent.appendChild(fragment);
//   } catch (error) {
//     console.error("Error fetching article data:", error);
//   }
// }

// // Utility function to create an element with optional text and class names
// function createElement(tag, textContent = null, classNames = []) {
//   const element = document.createElement(tag);
//   if (textContent) element.textContent = textContent;
//   if (classNames.length) element.classList.add(...classNames);
//   return element;
// }

// // Utility function to append multiple children to a parent element
// function appendChildren(parent, children) {
//   children.forEach((child) => parent.appendChild(child));
// }

// // Improved lazyLoadImages function with throttling and better performance
// function lazyLoadImages() {
//   const lazyImages = document.querySelectorAll("img.lazy");

//   if ("IntersectionObserver" in window) {
//     const lazyImageObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const lazyImage = entry.target;
//           lazyImage.src = lazyImage.dataset.src;
//           lazyImage.classList.remove("lazy");
//           lazyImageObserver.unobserve(lazyImage);
//         }
//       });
//     });

//     lazyImages.forEach((lazyImage) => {
//       lazyImageObserver.observe(lazyImage);
//     });
//   } else {
//     // Fallback for older browsers
//     lazyImages.forEach((lazyImage) => {
//       lazyImage.src = lazyImage.dataset.src;
//       lazyImage.classList.remove("lazy");
//     });
//   }
// }

// // Function to initialize accordion click listeners
// function initializeAccordions() {
//   const accordions = document.getElementsByClassName("Question");

//   for (let i = 0; i < accordions.length; i++) {
//     accordions[i].addEventListener("click", function () {
//       this.classList.toggle("active");
//       const panel = this.nextElementSibling;
//       panel.style.display = panel.style.display === "block" ? "none" : "block";
//     });
//   }
// }

// // Initialize accordions on document ready
// document.addEventListener("click", initializeAccordions);
document.addEventListener("DOMContentLoaded", async function () {
  try {
    // Fetch and display FAQ
    await fetchAndDisplayFAQ();

    // Fetch and display articles
    await fetchAndDisplayArticles();

    // Initialize slick carousel and event listeners
    initializeSlickCarousel();
  } catch (error) {
    console.error("Error fetching the data:", error);
  }
});

// Function to fetch and display FAQ
async function fetchAndDisplayFAQ() {
  const response = await fetch(
    "https://admin.abilaindonesia.com/wp-json/custom-cms/v1/faq-section"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch FAQ data");
  }

  const data = await response.json();
  const qnaContainer = document.getElementById("QnA-border");

  // Create a fragment to minimize reflows and repaints
  const fragment = document.createDocumentFragment();

  data.forEach((faq) => {
    const qnaDiv = createElement("div", null, ["QnA"]);

    const questionButton = createElement("button", faq.tanya, [
      "Question",
      "text-2xl",
      "p-4",
      "md:text-xl",
      "font-semibold",
    ]);
    questionButton.dataset.key = `q${faq.id}`;

    const answerDiv = createElement("div", null, [
      "Answer",
      "text-xl",
      "md:text-lg",
      "p-4",
    ]);
    answerDiv.style.display = "none"; // Initially hide answers

    const answerParagraph = createElement("p", faq.jawab);
    answerParagraph.dataset.key = `a${faq.id}`;

    answerDiv.appendChild(answerParagraph);
    appendChildren(qnaDiv, [questionButton, answerDiv]);

    // Append the QnA div to the fragment
    fragment.appendChild(qnaDiv);

    // Add event listener for accordion effect
    questionButton.addEventListener("click", function () {
      this.classList.toggle("active");
      if (answerDiv.style.display === "block") {
        answerDiv.style.display = "none";
      } else {
        answerDiv.style.display = "block";
      }
    });
  });

  // Append the fragment to the container
  qnaContainer.appendChild(fragment);
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
