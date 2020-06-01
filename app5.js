//functions section
/* functions allow us to write reusable, modeular code
we define a "chunck" of code than we can then execute at a later point */

//methods are functions such as .toUpperCase()
function grumpus() {
  console.log("ugh....you again:/");
  console.log("for the last time.....");
  console.log("leave me alone!!!");
}
grumpus(); //will run the function

//die roll function
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1; //0-6
  console.log(`rolled: ${roll}`);
}
rollDie();

//function to throw dice from rollDice() func
function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    rollDie();
  }
}
throwDice(5); //roll 5 times

//indexOf('h') ---the h is an arugment in the func

//argument of name, what it can accept
function greet(name) {
  console.log(`hi, ${name}`);
}
greet("billy"); //will output hi,billy

function add(x, y) {
  return x + y; //can only return one thing whether its a string or combo of two elements
}

//order matters with parameters
// function isPurple(color) {
//   if (color.toLowerCase() === "purple") {
//     return true;
//   }
//   return false; //don't need an else
// }
//could make even simplier
function isPurple(color) {
  return color.toLowerCase() === "purple";
}

function containsPurple(arr) {
  for (let color of arr) {
    if (color === "purple" || color === "magenta") {
      return true;
    }
  }
  return false;
}
containsPurple(["blue", "pink", "magenta"]); //returns true

//--------------------

//write a isValidPassword function
//accepts 2 arguments: password and username
//password must be atleast 8 characters, cannot contain a space, cannot contain the username
//if all above is met return true, if not return false

function isValidPassword(password, username) {
  if (password.length <= 8) {
    return false;
  }
  if (password.indexOf(" ") !== -1) {
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

//write a function to find the average value in an array of numbers
function avgNumber(arr) {
  let totalNum = 0;
  for (let num of arr) {
    totalNum += num;
  }
  return totalNum / arr.length;
}
//got this on my own had to switch where some things were:)

// write a function called isPangram, which checks to see if a given
// sentence contans every letter of the alphabet. make sure to ignore
// string cases
function isPangram(str) {
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (str.toLowerCase().indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

//write a getCard() function which returns a random playing card object like:
//{
//  value:'K'
//  suits: 'clubs'
//}
//pick a random value from: 1-10,J,K,Q,A
//pick random suit: clubs, spades, hearts, diamonds
//return both in an object

function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}
function getCard() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q",
    "A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];

  return { value: pick(values), suit: pick(suits) };
}

//function scope section
//scope= variable "visibility", the location where a variable is defined
//dictates where we have access to that variable
function lol() {
  let person = "tom"; //these are scoped to this function, cant be accessed outside func
  const age = 45;
  var color = "teal";
}
//means multiple functions can use same variables

let bird = "mandarin duck";
function birdWatch() {
  let bird = "golden pheasant";
  console.log(bird);
}
birdWatch();
console.log(bird); //shows that they are two different variables w same name

// if (true) {
//   const animal = "eel"; //animal is scoped inside with const and let
//   console.log(animal);
// }
// console.log(animal);

if (true) {
  var animal = "eel"; //using var both log out to console(not scoped)
  console.log(animal);
}
console.log(animal);

function doubleArr(arr) {
  const results = []; //empty array
  for (let num of arr) {
    let double = num * 2;
    results.push(double);
  }
  return results;
}
//tried myself
function add3(array) {
  const results = [];
  for (let x of array) {
    let adds = x + 3;
    results.push(adds);
  }
  return results;
}

//var is not block scoped, let and const are scoped only to confines of block(such as a function)

//lexical scope- inner functions are bound to their outer functions only
// function outer() {
//   let movie = "amadeus";
//   function inner() {
//     //let movie='the shining' if this is added and run out() the shining will ouput because it takes over
//     console.log(movie.toUpperCase());
//   }
//   inner(); //only have access to inner inside of outer for now
// }

function outer() {
  let movie = "amadeus";

  function inner() {
    let movie = "the shining";

    function extraInner() {
      console.log(movie.toUpperCase());
    }
    extraInner(); //doesnt have a movie defined so looks above to inner()
  }
  inner(); //only have access to inner inside of outer for now
}

//function expressions
//can store functions in variables because they are objects!!!!!!
const square = function (num) {
  return num * num;
};

function add(x, y) {
  return x + y;
}
//function expression to do same thing^ but in 2 different formats
const sum = function (x, y) {
  return x + y;
};

//named function expression
const product = function multiply(x, y) {
  return x * y;
};

//function stored in array
function add(x, y) {
  return x + y;
}
const subtract = function (x, y) {
  return x - y;
};
function mult(x, y) {
  return x * y;
}
const div = function (x, y) {
  return x / y;
};

const operations = [add, subtract, mult, div];
for (let func of operations) {
  let result = func(30, 5);
  console.log(result);
}
//can treat functions as any other value, we can store them in arrays, loop over them etc
const thing = {
  doSomething: mult,
};
thing.doSomething(40, 3); //by adding a function to an object we create a method

//

//higher order functions operate on/with other functions
//they can accept other functions as arguments or return a function
function call3Times(f) {
  f();
  f();
  f();
}
function cry() {
  console.log('booo ho, i"m so sad');
}
function rage() {
  console.log("i hate everything");
}
call3Times(cry);

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}
repeatNTimes(rage, 13);

//picks one random function to run
function pickOne(f1, f2) {
  let rand = Math.random();
  console.log(rand);
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}

//return value function     factories
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

// const triple = multiplyBy(3);
// triple(2); //6

// const double = multiplyBy(2);
// const half = multiplyBy(0.5);

//makeBetween function
function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}

//functions
const isChild = makeBetweenFunc(0, 18);
const isInNineties = makeBetweenFunc(1990, 2000);
const isNiceWeather = makeBetweenFunc(65, 80);

function makes5LessThan(x) {
  return function (num) {
    return (num -= 5);
  };
}
const test = makes5LessThan();
test(10); //5

//callback funcs---------------------------------------------------
//function then time in milliseconds
// function grumpus() {
//   alert("go awaayyy");
// }
// setTimeout(grumpus, 5000); //built in function accepts a function and milliseconds

// setTimeout(function () {
//   alert("welcome");
// }, 5000); //will say welcome after 5 seconds

// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   alert("why did you click me");
// });
//often use anonymous function if not needed to use again

//hoisting
console.log(animal);
var animal = "tapir"; //undefined but no error: hoists up the variable dec var animal but as undefined

//different with let and const: are not hoisted
console.log(shrimp);
let shrimp = "harlequin shrimp";

howl(); //functions are hoisted and work still, pretend functions are at top of file processed first
function howl() {
  console.log("awoooooooooo");
}

hoot(); //function expressions aren't hoisted same as function declarations because they are stored in variable
var hoot = function () {
  console.log(`hooo hoooo`);
};
