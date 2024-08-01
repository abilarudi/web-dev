document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    // Fungsi untuk memperbarui nilai counter
    function updateCounter(increment) {
        let currentValue = parseInt(counterElement.innerText);
        currentValue += increment;
        if (currentValue < 0) {
          currentValue = 0;
        }
        counterElement.innerText = currentValue;
      }

    // Event listener untuk tombol plus
    incrementButton.addEventListener('click', function() {
      updateCounter(1);
    });

    // Event listener untuk tombol minus
    decrementButton.addEventListener('click', function() {
      updateCounter(-1);
    });
  });

// function toggle class active shopping cart
const cart = document.querySelector('#shopping-cart');
document.querySelector('#shopping').onclick = (e) => {
  cart.classList.toggle('active');
  e.preventDefault();
}