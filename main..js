'use-strict'
const carts = document.querySelectorAll(".add-cart");
const cartSpan = document.querySelector('.cart span');
const Products = [
  {
    name:'Gray Tshirt',
    tag:'Hoodie',
    price:30,
    incart:0,
  },
  {
    name:'Gray Tshirt',
    tag:'Hoodie',
    price:30,
    incart:0,
  },
  {
    name:'Black Tshirt',
    tag:'Hoodie',
    price:30,
    incart:0,
  },
  {
    name:'Gray Tshirt',
    tag:'Hoodie',
    price:30,
    incart:0,
  }
]

for(let i = 0; i < carts.length; i++);

carts.forEach(cart => {
  cart.addEventListener('click',() => {
    cartNumbers();
  })
});

function loadCarts() {
let productNumbers = localStorage.getItem("cartNumbers");
  cartSpan.textContent = productNumbers;

}

function cartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  
  if(productNumbers) {
   localStorage.setItem("cartNumbers", productNumbers + 1);
   cartSpan.textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers" ,1);
    cartSpan.textContent =  1;
  }
};
loadCarts();