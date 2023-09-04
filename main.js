'use-strict'
const carts = document.querySelectorAll(".add-cart");
const cartSpan = document.querySelector('.cart span');
const productContainer = document.querySelector('.products');
const products = [
  {
    name:'Red Hoodie',
    tag:'redhoddie',
    price:10,
    inCart:0,
  },
  {
    name:'Black Hoodie',
    tag:'blackh',
    price:20,
    inCart:0,
  },
  {
    name:'grey Tshirt',
    tag:'greyhoodie',
    price:15,
    inCart:0,
  },
  {
    name:'orange Tshirt',
    tag:'orangehoodi',
    price:25,
    inCart:0,
  },
  {
    name:'White Tshirt',
    tag:'Hoodie',
    price:45,
    inCart:0,
  }
]

for(let i = 0; i < carts.length; i++){

carts[i].addEventListener('click',() => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });


};
const loadCarts = () => {
let productNumbers = localStorage.getItem("cartNumbers");
  cartSpan.textContent = productNumbers;
}

const cartNumbers = (product) => {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  
  if(productNumbers) {
   localStorage.setItem("cartNumbers", productNumbers + 1);
   cartSpan.textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers" ,1);
    cartSpan.textContent =  1;
  }
  setItem(product);
};

// 
const setItem = (product) => {
let cartItems = localStorage.getItem("productsInCart");
cartItems = JSON.parse(cartItems);

console.log("Inside of setitem");
console.log("My Product is ", product);
console.log(cartItems);

if(cartItems != null) {
  // IF Product in undefined 
if (cartItems[product.tag] == undefined) {
     cartItems = {
    ...cartItems,
      [product.tag]: product
    }
  } 
  cartItems[product.tag].inCart += 1;
}else{
  product.inCart = 1;
   cartItems = {
  [product.tag]: product,
  }
}
localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

// Function for total cost
const totalCost = (product) => {
  let cartCost = localStorage.getItem("totalCost");
  console.log("My cartCost is ", cartCost)
  // if(cartCost != null) {
  //   cartCost = parseInt(cartCost);
  //   localStorage.setItem("totalCost", cartCost + product.price);
  // }else {
  //   localStorage.setItem("totalCost",product.price)
  // } 
   cartCost = cartCost !== null ? parseInt(cartCost) + product.price : product.price;
    localStorage.setItem("totalCost", cartCost);
}

// Function for Cart Page
const displayCart = () => {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  console.log(cartItems);

  if(cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
          <div class="products">
           <ion-icon name="close-circle"></ion-icon>
           <img src=" images/${item.tag}.jpg" alt="First">
           <span>${item.name}</span>
       </div>
       <div class="price">${item.price}</div>
       <div class="quantity">
        <ion-icon name="caret-back-circle-sharp"></ion-icon>
        <span>${item.inCart}</span>
        <ion-icon name="caret-forward-circle-sharp"></ion-icon> 
       <div class="price">
        ${item.inCart * item.price},00
       </div>
        </div>
      `;
    })
  }
}
displayCart();
loadCarts();