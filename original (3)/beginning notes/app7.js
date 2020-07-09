//section 11 few other features

//default function parameters
//old way
// function multiply(x, y) {
//   if (typeof y === "undefined") {
//     y = 1;
//   }
//   return x * y;
// }

//still old way but better with ter ops
// function multiply(x, y) {
//   y = typeof y === "undefined" ? 1 : y;
//   return x * y;
// }

//new sytnax
function multiply(a, b = 1) {
  return a * b;
}

const greet = (person, greeting = "hi") => {
  console.log(`${greeting}, ${person}`);
};

//can use arrays and objects as default params
const blah = (x, y = [1, 2, 3]) => {
  console.log(x, y);
};

//spread - in function call
function giveMeFour(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "orange", "yellow", "green"];
giveMeFour(...colors);
//a red
//b orange
//c yellow
//d green

//spread- in array literals
const cephalopods = [
  "dumbo octupus",
  "humblodt squid",
  "flmaboyant cuttlefish",
];
const gastropods = ["giant african snail", "banana slug", "varibale neon slug"];
const cnidaria = ["fire coral", "moon jelly"];

const mollusca = [...cephalopods, ...gastropods]; //combining two arrays quickly

const inverts = [...cephalopods, ...gastropods, ...cnidaria]; //easier than using concat

//often used to just make a copy of an array
const cephCopy = [...cephalopods]; // clone of cephalopods, not same place in memory though

//can also use it to split up strings

//spread- in object literals
const feline = {
  legs: 4,
  family: "Felidae",
};
const canine = {
  family: "Caninae",
  furry: true,
};

const dog = {
  ...canine,
  isPet: true,
  isAdorable: true,
};

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: "unpredictable",
};

const catDog = {
  ...canine,
  ...feline,
}; //only show legs once

const tripod = {
  ...canine,
  legs: 3,
}; //updates legs to 3 because it comes after but if legs came before ...canine then it'd output 4 legs

const catDogClone = { ...catDog }; //clones object literal catDog, unique reference
//can only spread in another object, can't spread object in an array

const rand = [..."hello", { ...catDog }]; //combine string and object

//arguments object
// function sum() {
//   const argsArr = [...arguments];
//   return argsArr.reduce((total, curVal) => {
//     return total + curVal;
//   });
// }//not a real array so must turn into array if want to use array methods such as reduce
//doesnt work in arrow functions

//rest- same syntax as ... and collects all remaining arguments into an actual array
function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal;
  });
}

function fullName(first, last, ...titles) {
  console.log("first", first);
  console.log("last", last);
  console.log("titles", titles);
}

const multiplyy = (...nums) => nums.reduce((total, currVal) => total * currVal);
//used in arrow functions

//destructuring- short syntax to 'unpack' values from arrays and properties from objects into distict variables

//array destructuring
const raceResults = [
  "eliud kipchoge",
  "feyisa lelisa",
  "galen rupp",
  "ghirmay ghebreslassie",
  "alphonce simbu",
  "jared ward",
];
// const gold=raceResults[0]
// const silver=raceResults[1]
// const bronze=raceResults[2]
const [gold, silver, bronze] = raceResults; //same as above
const [first, , , fourth] = raceResults; //fourth now ghirmay which is right by adding commas for places to skip over
const [winner, ...others] = raceResults; //winner is eliud and ... combines the rest of them

//object destructuring
const runner = {
  firstN: "eliud",
  lastN: "kipchoge",
  country: "kenya",
  title: "elder of the order of the golden heart of kenya",
};
const { firstN, lastN, time } = runner; //time set to undef, must be existing key names
const { country: nation, title: honorofic } = runner; //will make variable called nation based of value of country from runner
const { firstN, lastN, ...other } = runner;

//nested destructuring
const results = [
  {
    firstN: "eliud",
    lastN: "kipchoge",
    country: "kenya",
  },
  {
    firstN: "feyissa",
    lastN: "lilesa",
    country: "ethiopia",
  },
  {
    firstN: "galen",
    lastN: "rupp",
    country: "USA",
  },
];

const [{ firstN: goldwinner }, { country }] = results; //want country of second runner so need ,

const [, silverMedal] = results; //could use these two lines to find silver medal winner
const { country } = silverMedal;

//param destructuring
// function print(person) {
//   const { first, last, title } = person;
//   console.log(`${first} ${last}, ${title}`);
// }
function print({ first, last, title }) {
  console.log(`${first} ${last}, ${title}`);
}

const response = ["http/1.1", "200 OK", "application/json"];
function parseResponse([protocol, statusCode, contentType]) {
  console.log(`status: ${statusCode}`);
}
