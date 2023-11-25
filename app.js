// const items = [...document.querySelector('.sales-price');

// const updateCount = (el) => {
const el = document.querySelector(".sales-price");
const value = parseInt(el.dataset.value);
const increment = Math.ceil(value / 1000);
// const increment = 1;
let initialValue = 0;

const increaseCount = setInterval(() => {
  initialValue += increment;

  if (initialValue > value) {
    el.textContent = ` Saldo Total: R$ ${value}`;
    clearInterval(increaseCount);
    return;
  }
  el.textContent = `Saldo Total: R$ ${initialValue}`;
}, 1);
// console.log(increaseCount);

// items.forEach((item) => {
//   updateCount(item);
// });
var mybutton = document.querySelector(".up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
// ==========================//
function scrolling() {
  window.scrollBy(0,500)
}
