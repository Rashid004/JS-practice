// 'use-strict'
// const carts = document.querySelectorAll(".add-cart");
// const cartSpan = document.querySelector(".cart span");

// const products =[
//   {
//     name:'Red Hoodie',
//     tag:'red',
//     price:10,
//     inCart:0,
//   },
//   {
//     name:'Black Hoodie',
//     tag:'black',
//     price:20,
//     inCart:0,
//   },
//   {
//     name:'grey Tshirt',
//     tag:'grey',
//     price:15,
//     inCart:0,
//   },
//   {
//     name:'orange Tshirt',
//     tag:'orange',
//     price:25,
//     inCart:0,
//   },
//   {
//     name:'White Tshirt',
//     tag:'white',
//     price:45,
//     inCart:0,
//   },
// ]

// for(let i = 0; i < carts.length; i++){

// carts[i].addEventListener('click',() => {
//     cartNumbers(products[i]);
//     totalCost(products[i]);
//   });


// };
// const loadCarts = () => {
// let productNumbers = localStorage.getItem("cartNumbers");
//   cartSpan.textContent = productNumbers;
// }

// const cartNumbers = (product) => {
//   let productNumbers = localStorage.getItem('cartNumbers');
//   productNumbers = parseInt(productNumbers);
  
//   if(productNumbers) {
//    localStorage.setItem("cartNumbers", productNumbers + 1);
//    cartSpan.textContent = productNumbers + 1;
//   } else {
//     localStorage.setItem("cartNumbers" ,1);
//     cartSpan.textContent =  1;
//   }
//   setItem(product);
// };

// // 
// const setItem = (product) => {
// let cartItems = localStorage.getItem("productsInCart");
// cartItems = JSON.parse(cartItems);

// console.log("Inside of setitem");
// console.log("My Product is ", product);
// console.log(cartItems);

// if(cartItems != null) {
//   // IF Product in undefined 
// if (cartItems[product.tag] == undefined) {
//      cartItems = {
//     ...cartItems,
//       [product.tag]: product
//     }
//   } 
//   cartItems[product.tag].inCart += 1;
// }else{
//   product.inCart = 1;
//    cartItems = {
//   [product.tag]: product,
//   }
// }
// localStorage.setItem("productsInCart",JSON.stringify(cartItems));
// }

// // Function for total cost
// const totalCost = (product) => {
//   let cartCost = localStorage.getItem("totalCost");
//   console.log("My cartCost is ", cartCost)
//   // if(cartCost != null) {
//    cartCost = parseInt(cartCost);
//    localStorage.setItem("totalCost", cartCost + product.price);
//   // }else {
//    localStorage.setItem("totalCost",product.price)
//   // } 
//    cartCost = cartCost !== null ? parseInt(cartCost) + product.price : product.price;
//     localStorage.setItem("totalCost", cartCost);
// }

// // Function for Cart Page
// const displayCart = () => {
//   let cartItems = localStorage.getItem("productsInCart");
//   cartItems = JSON.parse(cartItems);
//   console.log(cartItems);
//   let productContainer = document.querySelector(".products");

//   if(cartItems && productContainer) {
//     productContainer.innerHTML = '';
//     Object.values(cartItems).map(item => {
//       productContainer.innerHTML += `
//        <div class="products">
//         <ion-icon name="close-circle"></ion-icon>
//         <img src="images/${item.tag}.jpg" alt="">
//         <span>${item.name}</span>
//       </div>
//        <div class="price">${item.price}</div>
//       <div class="quantity">
//        <ion-icon name="caret-back-circle-sharp"></ion-icon>
//        <span>${item.inCart}</span>
//        <ion-icon name="caret-forward-circle-sharp"></ion-icon> 
//       <div class="price">
//        ${item.inCart * item.price},00
//       </div>
//        </div>
//        `;
//     });
//   }
// }
// displayCart();
// loadCarts();

// Practice 
// const fruits = ((apples,orange) =>  {
// const juice = `${apples} glass of apple juice and ${orange} orange glass juice`;
//   return juice;
// })

// console.log(fruits(2, 0));
// fruits(1, 4);
// fruits(0, 8);
// // console.log(fruits);
// // console.log();
// // console.log();

// const retirMent = function(birthYear,firstName) {
// const age = 2030 - birthYear;
// const retirMentYears = 66 - age;
// // return retirMentYears;  
// return `${firstName} retire in ${retirMentYears} Years old`;  
// }
// console.log(retirMent(1995, "Rashid"));
//  Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

const calcAverage = (a,b,c) => (a + b + c) /3;
console.log(calcAverage(3,4,5));

const scorDolphins = calcAverage(44,33,71);
const scorKoalas = calcAverage(65,54,49);

console.log(scorDolphins,scorKoalas);

const checkWinner = function(avgDolphin,avgKoalas) {
 if(avgDolphin >= avgKoalas) {
  console.log(`Dolphins win 🏆${avgDolphin} vs. ${avgKoalas}`)

 }else if (avgKoalas >= avgDolphin){

   console.log(`Koalas win 🏆${avgKoalas} vs. ${avgDolphin}`);
 }else {

  console.log('NO TEAM WIN...')
 }
}

checkWinner(scorDolphins,scorKoalas);

// const rashid = {
//   firstName: "Rashid",
//   lastName: "Ansari",
//   age: 2023 - 2003,
//   job: "Frontend-Dev",
// };

// console.log(rashid.firstName);

// const intrestde = prompt('what do you want to know about rashid firstName,lastName,age,job');

// if(intrestde) {
//   console.log(rashid[intrestde]);
// }else {
//   console.log('No match Found💥');
// }

const freinds = ['jonas','rakib','hanzala'];
// console.log(freinds)
const arr2 = freinds.map((element) => {
  // element.;
})
console.log(arr2);

// freinds[0] = 'zaid';
// console.log(freinds);

// const firstName = 'rashid';
// const arr1 = [firstName, freinds,'teacher'];
// console.log(arr1);

const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 
};

const bills = [ 125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills,tips,total);


// Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
//  mass / (height * height);
const mark = {
  fullName: 'Mark Miller',
  mass: 86,
  height:1.69,
  calcBmi : function() {
  this.bmi =  this.mass / (this.height * this.height);
  return this.bmi;
  }
}
const john = {
  fullName: "John Smith",
  mass: 112,
  height: 1.90,
  calcBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const markBMI = mark.calcBmi();
const johnBMI = john.calcBmi();
// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
console.log(markBMI,johnBMI);

if(markBMI < johnBMI) {
  console.log(`${john.fullName}'s BMI (${johnBMI}) is higher than ${mark.fullName}'s (${markBMI})!`);

} else if (johnBMI < markBMI) {
console.log(`${mark.fullName}'s BMI (${markBMI}) is higher than 
${john.fullName}'s (${johnBMI})!`);
}else {
  console.log('Both are equals')
}

for(let rep = 1; rep <= 10; rep++){
 console.log(`I have lots of bike ${rep}`)
};