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
