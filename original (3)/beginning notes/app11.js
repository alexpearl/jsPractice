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

// makeRant("i hate mayo", document.body);
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
const btn = document.querySelector("button");

//refactoring once taught promises
const moveX = (el, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = el.getBoundingClientRect().right;
      const currLeft = el.getBoundingClientRect().left;

      if (elRight + amount > bodyBoundary) {
        reject(bodyBoundary, elRight, amount);
      } else {
        el.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

moveX(btn, 300, 1000)
  .then(() => moveX(btn, 3000, 1000)) //gives a promises, implicit arrow func return
  .then(() => moveX(btn, 3000, 1000))
  .then(() => moveX(btn, 3000, 1000))
  .then(() => moveX(btn, 3000, 1000))
  .then(() => moveX(btn, 3000, 1000))
  //destructing the data from reject()
  .catch(({ bodyBoundary, amount, elRight }) => {
    console.log(`body is ${bodyBoundary}px wide`);
    console.log(`element is at ${elRight}px, ${amount}px is too large `);
  }); //will catch any .thens that fail

// setTimeout(() => {
//   btn.style.transform = "translateX(100px)";
//   setTimeout(() => {
//     btn.style.transform = `translate(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translate(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translate(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translate(500px)`;
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const moveX = (el, amount, delay, callback, onSuccess, onFailure) => {
//   setTimeout(() => {
//     const bodyBoundary = document.body.clientWidth;
//     const elRight = el.getBoundingClientRect().right;
//     const currLeft = el.getBoundingClientRect().left;

//     if (elRight + amount > bodyBoundary) {
//       onFailure();
//     } else {
//       el.style.transform = `translateX(${currLeft + amount}px)`;
//       onSuccess();
//     }
//   }, delay);
// };

//making the callback arrow function
// moveX(btn, 100, 2000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000);
//       });
//     });
//   });
// });

// LOOK AT THIS UGLY MESS!
// moveX(
//   btn,
//   100,
//   1000,
//   () => {
//     //success callback
//     moveX(
//       btn,
//       400,
//       1000,
//       () => {
//         console.log("Second move succeeded");
//       },
//       () => {
//         //failure callback
//         alert("Second move failed!");
//       }
//     );
//   },
//   () => {
//     //failure callback
//     alert("First move failed!");
//   }
// );

//promise is an object representing the eventual completion or failure of an asynchronous operation
//a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function
// const willGetYouADog = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// //.then will run if resolved
// //.cactch will run if rejected
// willGetYouADog
//   .then(() => {
//     console.log("yay we got a dog");
//   })
//   .catch(() => {
//     console.log(`no dog`);
//   });

//same as above
// willGetYouADog.then(() => {
//   console.log("yay we got a dog");
// });
// willGetYouADog.catch(() => {
//   console.log(`no dog`);
// });

//returning promises from function
const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};

makeDogPromise()
  .then(() => {
    console.log("yay we got a dog");
  })
  .catch(() => {
    console.log(`no dog`);
  });

//fake request promise
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "bilbo" },
          { id: 5, username: "esmerelda" },
        ],
        "/about": "this is the about page",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 2000);
  });
};

//will run because /users exists
fakeRequest("/users")
  .then((response) => {
    console.log("status code", response.status);
    console.log("data", response.data);
  })
  .catch((response) => {
    console.log(response.status);
    console.log("request failed");
  });

//test one that doesnt run because /dogs doesnt exist
fakeRequest("/dogs")
  .then((response) => {
    console.log("status code", response.status);
    console.log("data", response.data);
  })
  .catch((response) => {
    console.log(response.status);
    console.log("request failed");
  });

//promise chaining in seperate folder
