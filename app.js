// add to cart
let productsCountEl = document.querySelector(".circle-pic");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
// console.log(addToCartBtns)

// щоб писало, що клікнуло в консолі
// for (let i = 0; i < addToCartBtns.length; i++) {
//   addToCartBtns[i].addEventListener("click", function () {
//     console.log("clicked");
//   });
// }

// дізналися, що записано в корзині 0
for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    let prevProductsCount = productsCountEl.textContent;
    console.log(prevProductsCount);
  });
}

// додати +1 в корзину
for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    let prevProductsCount = +productsCountEl.textContent;
    productsCountEl.textContent = prevProductsCount + 1;
  });
}

// Варіант 2 збільшити на 1 в кошику число
// for (let i = 0; i < addToCartBtns.length; i++) {
//   addToCartBtns[i].addEventListener("click", function () {
//     productsCountEl.textContent = +productsCountEl.textContent + 1;
//   });
// }

// modal
let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");

console.log(modal);
console.log(moreDetailsBtns);
// відкриє модальне вікно при натисканні на more details
// let modal = document.querySelector(".modal");
// let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
moreDetailsBtns.forEach((item) =>
  item.addEventListener("click", function () {
    modal.classList.add("show");
    modal.classList.remove("hide");
    modal.style.display = "block";
    modal.style.backgroundColor = "red";
  })
);
// закриє модальне вікно при натисканні на хрестик в модалці
let btnClose = document.querySelector(".btn-close");
btnClose.addEventListener("click", function () {
  modal.classList.add("hide");
  modal.classList.remove("show");
  modal.style.display = "none";
});

// варіант написання через функції для показу/приховування
// let modal = document.querySelector(".modal");
// let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

// показати модальне вікно при скролі більше 50%
function showModalByScroll() {
  if (window.scrollY >= document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);

// лайк для вікон CHANGE LIKE STATE ВАРІАНТ 1
// let likeBtns = document.querySelectorAll(".like");
// likeBtns.forEach((item) =>
//   item.addEventListener("click", function () {
//     if (item.classList.contains("liked")) {
//       item.classList.remove("liked");
//     } else {
//       item.classList.add("liked");
//     }
//   })
// );
// Варіант 2:
// let likeBtns = document.querySelectorAll(".like");
// likeBtns.forEach((item) =>
//   item.addEventListener("click", function () {
//     item.classList.toggle("liked");
//   })
// );
// Варіант 3:
// let likeBtns = document.querySelectorAll(".like");
// likeBtns.forEach((item) =>
//   item.addEventListener("click", function () {
//     item.style.background-color = red;
//   })
// );

$(".slider").slick();
