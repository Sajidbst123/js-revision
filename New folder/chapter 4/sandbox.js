//function declaration
// function greet() {
//   console.log("hello");
// }
// greet();

// //arguments& parameters

// const speak = function (name = "sajid", time = "morning") {
//   console.log(`good ${time} ${name}`);
// };
// speak();
// speak("ali");

// returning values

//  const speak = function (name = "sajid", time = "morning"){
//    console.log(`good ${time} ${name}`)
//  };

// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };
// const area = calcArea(5);
// console.log(area);

//regular funcions
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };
// //arrow function
// const calArea = (radius) => 3.14 * radius ** 2;

// const area = calcArea(5);
// // console.log("are is:", area);

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };
// console.log(bill([10, 15, 30] * 0.2));

const name = "sajid";

//functions
// const greet = () => "hi";
// let resultOne = greet();
// console.log(resultOne);

// //methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// //callbacks & foreach
// let people = ["mario", "luigi", "ryu ", "shaun", "chun-li"];
// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };
//people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector(".people");
const people = ["mario", "luigi", "ryu", "shaun", "chunli"];

let html = ``;

people.forEach((person) => {
  // create html template
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
