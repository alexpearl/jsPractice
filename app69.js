function sayBee(numTimes) {
  for (let i = 0; i < numTimes; i++) {
    console.log("bumblebees!");
  }
}
sayBee(50); //output 50 "bumblebees!"

function sayAnimal(animalType) {
  for (let i = 0; i <= 9; i++) {
    console.log(`woah its a ${animalType}`);
  }
}

function banana() {
  sayAnimal("monkey");
}

// function weirdNum(x, y) {
//   let additionalNum = Math.floor(Math.random() * 10) + 1; //0-10
//   let subTotal = y * 3 + x;
//   let total = additionalNum + subTotal;
//   console.log(total);
// }
//similiar to below
function weirdNum(x, y, z) {
  x = +Math.floor(Math.random() * 10) + 1;
  let subTotal = y * 3 + x;
  let total = x + subTotal;
  console.log(total);
}

function findAvg(array) {
  let total = 0;
  for (let a of array) {
    total = +a;
  }
  let result = total / array.length;
  console.log(result);
}

//using function expression --- findd('brush") output true
const findd = function findLetterB(word) {
  //would work if you didn't name function findLetterB too
  for (let char of "b") {
    if (word.toLowerCase().indexOf(char) === -1) {
      return false;
    }
  }
  return true;
};
//other simplier way
// function findLetterB(word) {
//   if (word.toLowerCase().indexOf("b") === -1) {
//     return false;
//   }
//   return true;
// }

const isHigher = function (num1, num2) {
  if (num1 > num2) return num1;
  return num2;
};

//

//colt yt js video ex using functions

//name set to anonymous if no value is passed
function laugh(laughLevel, name = "anonymous") {
  const laughter = "ha".repeat(laughLevel);
  console.log(`${name} says ${laughter}`);
}
laugh(4, "jim");

const popReturnValue = [1, 2, 3].pop(); //will return 3

//last problem from yt video

//guessing game
// function startGame() {
//   const targetNum = generateRandom(); //1-10
//   let guess = getInput(); //convert string to number

//   while (guess !== targetNum) {
//     if (guess > targetNum) {
//       console.log(`${guess} is too high`);
//     } else {
//       console.log(`${guess} is too low`);
//     }
//     guess = getInput();
//   }
//   alert("you win!!");
// }
// function getInput() {
//   let guess = parseInt(prompt("enter a number"));
//   while (Number.isNaN(guess)) {
//     guess = parseInt(prompt("enter a valid number"));
//   }
//   return guess;
// }
// function generateRandom() {
//   return Math.floor(Math.random() * 10) + 1;
// }

//my try
function playGame() {
  const answer = random();
  let guess = playerInput();

  while (guess !== answer) {
    if (guess < answer) {
      console.log(`your guess of ${guess} was too low. try again man`);
    } else console.log(`your guess of ${guess} was too low. try again man`);

    guess = playerInput();
  }
  alert("you win, congrats!!");
}

function playerInput() {
  guess = parseInt(prompt("enter a guess please"));
  while (Number.isNaN(guess)) {
    guess = parseInt(prompt("enter a valid guess please"));
  }
  return guess;
}
function random() {
  return Math.floor(Math.random() * 10) + 1;
}

//tried to implement
// function checkGame() {
//   const stopName1 = "Stop".toLowerCase();
//   const stopName2 = "Quit".toLowerCase();
//   if (guess == stopName1 || stopName2) {
//     break;
//   }
// }

const smallNums = [4, 5, 8, 7, 9];
const largerNums = smallNums.map(function (num) {
  return num * 4;
});
//or const largerNums = smallNums.map((num) => num * 4);

const EvOd = smallNums.map((n) => (n % 2 === 0 ? "even" : "odd"));

//array methods
const items = [
  { name: "bike", price: 100 },
  { name: "tv", price: 200 },
  { name: "album", price: 10 },
  { name: "book", price: 5 },
  { name: "phone", price: 500 },
  { name: "computer", price: 1000 },
  { name: "keyboard", price: 25 },
];
const filteredItems = items.filter((item) => item.price <= 100);

const itemNames = items.map((item) => item.name);

const filter500 = items.filter((item) => item.price <= 500);

const foundItem = items.find((item) => {
  return (item.name = "book");
});

items.forEach((item) => console.log(item.name));

const hasInexpensiveItems = items.some((item) => item.price <= 10); //true

const hasExpensiveItems = items.every((item) => item.price >= 50); //true

const totalPrice = items.reduce((currTotal, item) => {
  return item.price + currTotal;
}, 0); //currTotal starts at 0

const numss = [1, 2, 3, 4, 5];
const includesTwo = numss.includes(2); //true

//testing commit from vscode
function sayHi() {
  console.log("hello");
}

const fake = (num) => console.log(` say hi to ${num}`);

//colt steele yt video on arrow functions
const div = (x, y) => x / y;

const makeCard = () => ({ suit: "hearts", val: 3 });
//need to wrap in parenthesis otherwise if implicit return will think its the function body {}

const invoices = [
  {
    client: "billy",
    amount: 400.49,
    hasPaid: false,
  },
  {
    client: "hedwig",
    amount: 350.99,
    hasPaid: false,
  },
  {
    client: "pizzaHead",
    amount: 135.5,
    hasPaid: true,
  },
  {
    client: "marty",
    amount: 79.35,
    hasPaid: false,
  },
  {
    client: "grizzley",
    amount: 99.99,
    hasPaid: true,
  },
];

// const payUp = invoices.filter((invoice) => invoice.hasPaid === false);

// const stillOwed = invoices
//   .filter(function (invoice) {
//     return !invoice.hasPaid;
//   })
//   .reduce(function (total, invoice) {
//     return total + invoice.amount;
//   }, 0);

const stillOwed = invoices
  .filter((i) => !i.hasPaid)
  .reduce((total, i) => total + i.amount, 0);

//arrow functions do not get their own follow of this like a regular function expression

const person = {
  name: "bilbo",
  // this will output bilbo says hi
  // sayHi: function () {
  //   console.log(this.name, "says hi");
  // },
  //this next one with arrow func will not retrieve the name of bilbo
  sayHi: () => {
    console.log(this.name, "says hi");
  },
};
person.sayHi();

//spread operator notes
//https://www.notion.so/The-Spread-Operator-b7608512fbd844ec9f27f31740fb7298

//in functions
const temps = [70, 60, 55, 75, 68, 91, 84];
const minTemp = Math.min(...temps);
// spreads so we can retrieve the whole array otherwise wouldn't have worked

//in array literals
const parents = ["jim", "sansa"];
const kids = ["maria", "susan", "bob"];
const family = [...parents, ...kids];

//also good to just copy an array
const originals = ["Mona Lisa", "American Gothic", "The School of Athens"];
const copies = [...originals];

//spread in object literals
const mainColors = { brightRed: "#e55039", waterfallBlue: "#38ada9" };
const accentColors = { lightGrey: "#778ca3", swanWhite: "#f7f1e3" };

const fullPalette = { ...mainColors, ...accentColors };
//{brightRed: "#e55039", waterfallBlue: "#38ada9", lightGrey: "#778ca3", swanWhite: "#f7f1e3"}

const lion = { hasTail: true, legs: 4 };
const eagle = { canFly: true };
const hybrid = { name: "Gryphon", ...lion, ...eagle };

//{name: "Gryphon", hasTail: true, legs: 4, canFly: true}

//

//destructing with Web Dev Simplified
//https://www.youtube.com/watch?v=NIq3qLaHCIs&t=8s

const alphabet = ["A", "B", "C", "D", "E", "F"];
const numb = ["1", "2", "3", "4", "5", "6"];

// const a = alphabet[0];
// const b = alphabet[1];
//instead do this
const [a, , c, ...everythingElse] = alphabet; //everythingElse gives you everything/rest of array
const [, , , , e] = alphabet; //can use commas to skip over what you dont want
console.log(a);
console.log(everythingElse);
console.log(e);

const combine = [...alphabet, ...numb]; //another ex of spread

function sumAndMultiple(a, b) {
  return [a + b, a * b, a / b];
}

const [sum, mult, division = "no division"] = sumAndMultiple(2, 3); //destructuring from function
//if no divison is set in the function then this default paremeter will output "no division"
console.log(sum);
console.log(mult);
console.log(division);

//destructing in objects
const personOne = {
  name: "kyle",
  age: 24,
  address: {
    city: "somewhere",
    state: "one of them",
  },
};
const personTwo = {
  name: "sally",
  age: 32,
  address: {
    city: "somewhere else",
    state: "another one of them",
  },
};

//destructing in objects is similar to as in arrays except now we use the key from the object whereas in the array we used position
//to change the name you want to use like we did for name below we can use : and give the variable name we want
const { name: firstName, age, favoriteFood = "default food" } = personOne;
console.log(firstName, age, favoriteFood);
//above is just simpler way to do whats below
// console.log(personTwo.name, personTwo.age);

// const { name, ...rest } = personTwo;
const {
  name,
  address: { city }, //to destructure nested objects
} = personTwo;
console.log(name, city);

const personThree = { ...personOne, ...personTwo }; //creating a thrid person where personTwo overrides all of personOne

// function printUser({user}) {
//   console.log(`name is: ${user.name}. age is: ${user.age}`);
// }
//can destructure in function parem to only accept an object with an age and name property
function printUser({ name, age }) {
  console.log(`name is:${name}. age is: ${age}`);
}
printUser(personOne);
