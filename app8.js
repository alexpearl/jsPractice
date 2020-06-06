//object methods and the 'this' keyword

//old way of doing it
// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum / arr.length;
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg,
//   };
// };

//newer way
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return {
    max,
    min,
    sum,
    avg,
  };
};
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const stats = getStats(reviews);

//computed properties
const role = "host";
const person = "jools holland";
const role2 = "director";
const person2 = "james cameron";

// const team = {};
// team[role] = person;
// team[role2] = person2;
const team = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: "sixteen",
};

// function addProp(obj, k, v) {
//   const copy = { ...obj };
//   copy[k] = v;
//   return copy;
// }
// const addProp = (obj, k, v) => {
//   return {
//     ...obj,
//     [k]: v,
//   };
// };
const addProp = (obj, k, v) => ({ ...obj, [k]: v });
const res = addProp(team, "happy", ":)");

//adding methods to objects
//makes it cleaner and more organized(basically a container for these functions)
const math = {
  add: function (x, y) {
    return x + y;
  },
  multiply: function (a, b) {
    return a * b;
  },
};
//math.add(4,5)
//math.multiply(2,3)

//method shorthand and syntax
const auth = {
  username: "tommy boy",
  login() {
    console.log("logged you in");
  },
  logout() {
    console.log("logged you out");
  },
};

//

//keyword 'this' -----------------------------

//https://www.youtube.com/watch?v=YOlr79NaAtQ
//What is THIS in JavaScript? in 100 seconds
//references another value, usually an object that represents the current execution context (global or object calling the function)
function whodis() {
  console.log(this);
}
const showFace = {
  face: "woah",
  whodis: function () {
    console.log(this);
  },
  buttWhoAmI: () => console.log(this),
};
const showJeffsFace = showFace.bind(jeff); //.bind makes a new function where this is explicit
console.log(showJeffsFace());

showFace.call(jeff, 1, 2, 3);
showFace.apply(jeff, [1, 2, 3]);

function Horse(name) {
  this.name = name;
}
const myHorse = new Horse("secretariat"); //new creates objects where this is the new object

function thisIsFun() {
  console.log(this); //undefined
}

//mdn def of bind
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

//
function sayHi() {
  console.log("say hi");
  console.log(this); //current execution scope
}

const women = {
  first: "cherilyn",
  last: "sarkisian",
  nickName: "cher",
  fullName() {
    const { first, last, nickName } = this; //using destructing
    return `${first} ${last} aka ${nickName}`; //aware of object it lives in using this
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a person`);
  },
  laugh: () => {
    //different with arrow func and usually dont use arrow functions in objects
    console.log(this);
    console.log(`${this.nickName} says hahahah`);
  },
};

//this: invocation context
const printBio = person.printBio;

//annoyomatic demo
const annoyer = {
  phrases: [
    "literally",
    "cray cray",
    "i cant even",
    "totes!",
    "yolo",
    "cant stop, wont stop",
  ],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
    console.log(`phew thank god that is over`);
  },
};
//using a arrow function helps because it doesnt make a new this

//deck of cards
// function makeDeck() {
//   const deck = [];
//   const suits = ["hearts", "diamonds", "spades", "clubs"];
//   const values = "2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A";
//   for (let value of values.split(",")) {
//     for (let suit of suits) {
//       deck.push({ value, suit });
//     }
//   }
//   return deck;
// }

// function drawCard(deck) {
//   return deck.pop();
// }

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);

//structured code all in one object
// const myDeck = {
//   deck: [],
//   drawnCards: [],
//   suits: ["hearts", "diamonds", "spades", "clubs"],
//   values: "2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A",
//   initializeDeck() {
//     const { suits, values, deck } = this; //destructured
//     for (let value of values.split(",")) {
//       for (let suit of suits) {
//         deck.push({ value, suit });
//       }
//     }
//     // return deck;
//   },
//   drawCard() {
//     const card = this.deck.pop();
//     this.drawnCards.push(card);
//     return card;
//   },
//   drawMultiple(numCards) {
//     const cards = [];
//     for (let i = 0; i < numCards; i++) {
//       cards.push(this.drawCard());
//     }
//     return cards;
//   },
//   shuffle() {
//     const { deck } = this;
//     //loop over arr backwards
//     for (let i = deck.length - 1; i > 0; i--) {
//       //pick random index before current element
//       let j = Math.floor(Math.random() * (i + 1));
//       //swap
//       [deck[i], deck[j]] = [deck[j], deck[i]];
//     }
//   },
// };

//creating a second deck/multiply decks ...copy from above basically
const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: "2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A",
    initializeDeck() {
      const { suits, values, deck } = this; //destructured
      for (let value of values.split(",")) {
        for (let suit of suits) {
          deck.push({ value, suit });
        }
      }
      // return deck;
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultiple(numCards) {
      const cards = [];
      for (let i = 0; i < numCards; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      const { deck } = this;
      //loop over arr backwards
      for (let i = deck.length - 1; i > 0; i--) {
        //pick random index before current element
        let j = Math.floor(Math.random() * (i + 1));
        //swap
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    },
  };
};

const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle;

const deck2 = makeDeck();
deck2.initializeDeck();
