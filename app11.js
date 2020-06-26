//section 11 async, callback, and promises

//callstack problem
const repeat = (string, times) => {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += string;
  }
  return result;
};

const scream = (string) => {
  return string.toUpperCase() + "!!!";
};

const getRantText = (phrase) => {
  let text = scream(phrase);
  let rant = repeat(text, 8);
  return rant;
};

const makeRant = (phrase, el) => {
  const h1 = document.createElement("h1");
  h1.innerText = getRantText(phrase);
  el.appendChild(h1);
};

makeRant("i hate mayo", document.body);
// makeRant("if you have a cough, please cover your mouth", document.body);

//JS is single-threaded, does one thing at a time

console.log("i print first");
setTimeout(function () {
  console.log(" i print in 3 seconds");
}, 3000); //broswer handles this and so js can handle next line
console.log("i print second");

//common interview fizbuz question

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//     console.log("fizbuz");
//   } else if (i % 3 == 0) {
//     console.log("fiz");
//   } else if (i % 5 == 0) {
//     console.log("buz");
//   }
//   console.log(i);
// }
for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 == 0 && i % 5 == 0) {
    output += "fizbuz";
  } else if (i % 3 == 0) {
    output += "fiz";
  } else if (i % 5 == 0) {
    output += "buz";
  } else {
    output = i;
  }
  console.log(output);
}

//callback hell ex...
