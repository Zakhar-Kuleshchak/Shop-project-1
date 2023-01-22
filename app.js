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
    // modal.style.backgroundColor = "red";
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
let likeBtns = document.querySelectorAll(".like");
likeBtns.forEach((item) =>
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  })
);

// Варіант 1: задасть при кліку червоний бекграунд:
// let likeBtns = document.querySelectorAll(".like");
// likeBtns.forEach((item) =>
//   item.addEventListener("click", function () {
//     item.style.backgroundColor = "red";
//   })
// );
// Варіант 2: задасть при кліку червоний бекграунд:
// let likeBtns = document.querySelectorAll(".like");
// likeBtns.forEach((item) =>
//   item.addEventListener("click", function (e) {
//     e.target.style.backgroundColor = "red";
//   })
// );

// slider
$(".slider").slick({
  autoplay: true,
  dots: true,
});

// Урок 20
// function Car(model, year, color) {
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   // console.log(this);
//   this.hi = function () {
//     console.log("Hi " + this.model);
//   };

//   this.hello = function () {
//     console.log("Hello " + this.model);
//   };
// }

// let audi = new Car("A6", 2020, "black");
// let bmw = new Car("328", 2010, "grey");
// let mercedes = new Car("c300", 2000, "white");

// console.log(audi);
// console.log(bmw);
// console.log(mercedes);

// audi.hi();
// mercedes.hello();

// лічильник для 1го товару:

// let decrementBtns = document.querySelectorAll(".decrement-btn")[0];
// let incrementBtns = document.querySelectorAll(".increment-btn")[0];
// let productsCount = document.querySelectorAll(".product-quantity input")[0];

// function Counter(incrementBtn, decrementBtn, inputField) {
//   this.domRefs = {
//     incrementBtn,
//     decrementBtn,
//     inputField,
//   };

//   this.toggleButtonState = function () {
//     let count = this.domRefs.inputField.value;
//     this.domRefs.decrementBtn.disabled = count <= 1;
//     this.domRefs.incrementBtn.disabled = count >= 10;
//   };

//   this.toggleButtonState();

//   this.increment = function () {
//     this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
//     this.toggleButtonState();
//   };

//   this.decrement = function () {
//     this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
//     this.toggleButtonState();
//   };

//   this.domRefs.incrementBtn.addEventListener(
//     "click",
//     this.increment.bind(this)
//   );
//   this.domRefs.decrementBtn.addEventListener(
//     "click",
//     this.decrement.bind(this)
//   );
// }

// const counter1 = new Counter(incrementBtns, decrementBtns, productsCount);
// console.log(counter1);
// приклад
// let user = {
//   name: "Pablo",
//   hi: function () {
//     console.log(this.name);
//   },
// };
// user.hi();
// приклад
// function hi() {
//   console.log(this);
//   console.log("Hi " + this.name);
// }
// let pablo = {
//   name: "pablo",
// };
// let anna = {
//   name: "anna",
// };
// hi.apply(pablo);
// hi.apply(anna);
// приклад
// function hi(surname) {
//   console.log(this);
//   console.log("Hi " + this.name + " " + surname);
// }
// let pablo = {
//   name: "pablo",
// };
// let anna = {
//   name: "anna",
// };
// hi.call(pablo, "Call");
// hi.apply(anna, ["Apply"]);
// let test = hi.bind(pablo, "Bind");
// test();

// урок 21 робимо каунтер для всіх товарів
let decrementBtns = document.querySelectorAll(".decrement-btn");
let incrementBtns = document.querySelectorAll(".increment-btn");
let productsCount = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };

  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}

let counters = [];
productsCount.forEach(
  (item, i) =>
    (counters[i] = new Counter(incrementBtns[i], decrementBtns[i], item))
);

// урок 21 асинхронний код загрузка через 5 секунд
// setTimeout(openModal, 5000);

AOS.init();
