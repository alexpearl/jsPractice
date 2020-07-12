//section 10: apply functions to collections of data

//intro to array callback methods

//forEach - accepts a callback func and calls the func once per element in the array

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// numbers.forEach(function (num) {
//   console.log(num);
// });
// //runs all 20-27

// function printTriple(n) {
//   console.log(n * 3);
// }
// //forEach way to get index number
// numbers.forEach(function (num, idx) {
//   console.log(idx, num);
// });
// numbers.forEach(printTriple);
//call func printTriple for each element of numbers array

//more complex array where each element is an object
const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "A Truly Horrible Book",
    authors: ["Xavier Time"],
    rating: 2.18,
    genres: ["fiction", "garbage"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

const titles = books.map(function (b) {
  return b.title;
});

//here book in the function is just a placeholder, already have books array
books.forEach(function (book) {
  console.log(book.title.toUpperCase());
});
//could also do same thing with for of loop
//book is elements of books
for (let book of books) {
  console.log(book.title.toUpperCase());
}
//could also do a for loop
for (let i = 0; i < books.length; i++) {
  console.log(books[i].title.toUpperCase());
}

//

//map() creates a new array with the results of calling a callback on every element in the array
const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map(function (t) {
  return t.toUpperCase();
});
texts; //["rofl", "lol", "omg", "ttyl"]
caps; //["ROFL", "LOL", "OMG", "TTYL"]

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ["asap", "byob", "rsvp", "diy"];

const doubles = numbers.map(function (num) {
  return num * 2;
});

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});

//making new array without map
const doubles2 = [];
for (let num of numbers) {
  doubles2.push(num * 2);
}
//vs using mapping
const abbrevs = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});

//

//arrow functions intro- easier function expression
// const square = function (x) {
//   return x * x;
// };
//same code as arrow func
const square = (x) => {
  return x * x;
};

const isEven = (num) => {
  return num % 2 === 0;
};
//isEven(3) false
//if you only have one parameter like one above you can drop the ()

const multiply = (x, y) => {
  return x * y;
};
//multiply(4,7) 28

const greet = () => {
  console.log("hi");
};
//greet() hi

// const square = (n) => {
//   return n * n;
// };
//can rewrite
// const square = (n) => n * n;

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const doubles1 = nums.map(function (n) {
//   return n * 2;
// });
//both are same as above
// const doubles2 = nums.map((n) => {
//   return n * 2;
// });
// const doubles3 = nums.map((n) => n * 2); //best

//map numbers into a string with even and odd
// const parityList = nums.map(function (n) {
//   if (n % 2 === 0) return "even";
//   return "odd";
// });
// const parityList = nums.map((n) => {
//   if (n % 2 === 0) return "even";
//   return "odd";
// });
// const parityList = nums.map(
//   (n) => (n % 2 === 0 ? "even" : "odd") //ternary ops useful to make one-liner
// );

//array method find() finds first match
let movies = [
  "the fantastic mr. fox",
  "mr. and mrs. smith",
  "mrs. doubtfire",
  "mr. deeds",
];
const movie = movies.find((movie) => {
  return movie.includes("mrs");
});
const movie2 = movies.find((m) => {
  return m.indexOf("mrs") === 0; //means it will be start of string so starting movie with mrs
});

//using this array of objects again
// const books = [
//     {
//       title: "good omens",
//       authors: ["terry pratchett", "neil gaiman"],
//       rating: 4.25,
//     },
//     {
//       title: "bone: the complete edition",
//       authors: ["jeff smith"],
//       rating: 4.42,
//     },
//     {
//       title: "a gentleman in moscow",
//       authors: ["amor towles"],
//       rating: 4.36,
//     },
//   ];
const goodBook = books.find((b) => b.rating >= 4.3);
//first book where neil is found as author
const authorNeil = books.find((b) => {
  return b.authors.includes("neil gaiman");
});

//filter() creates a new array with all elements that pass the test implemented by the provided function
const nums = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums.filter((n) => n % 2 === 1);
const evens = nums.filter((n) => n % 2 === 0);
const bigNums = nums.filter((n) => n > 50);

//big example using previous array of books
// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'Changing My Mind',
//     authors: ['Zadie Smith'],
//     rating: 3.83,
//     genres: ['nonfiction', 'essays']
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42,
//     genres: ['fiction', 'graphic novel', 'fantasy']
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36,
//     genres: ['fiction', 'historical fiction']
//   },
//   {
//     title: 'The Name of the Wind',
//     authors: ['Patrick Rothfuss'],
//     rating: 4.54,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'The Overstory',
//     authors: ['Richard Powers'],
//     rating: 4.19,
//     genres: ['fiction', 'short stories']
//   },
//   {
//     title: 'The Way of Kings',
//     authors: ['Brandon Sanderson'],
//     rating: 4.65,
//     genres: ['fantasy', 'epic']
//   },
//   {
//     title: 'Lord of the flies',
//     authors: ['William Golding'],
//     rating: 3.67,
//     genres: ['fiction']
//   }
// ]
const goodBooks = books.filter((b) => b.rating > 4.3);
const fantasyBooks = books.filter((book) => book.genres.includes("fantasy"));
const shortForm = books.filter((b) => {
  return b.genres.includes("short stories") || b.genres.includes("essays");
});

//search query for the
const query = "the";
const results = books.filter((book) => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase());
});

//every() and some() are boolean-accept true or false
const wordss = ["dog", "dig", "log", "bag", "wag"];

const all3Letters = wordss.every((word) => word.length === 3); //returns true

const endG = wordss.every((word) => {
  const last = word.length - 1;
  return word[last] === "g";
});

//some() only cares if any of the elements pass the test
const wordD = words.some((word) => word[0] === "d"); //checks if one word starts with d and returns true here

const checkRat = books.every((book) => book.rating > 3.5);

const numAuthors = books.some((book) => book.authors.length >= 2);

//sort()
const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

const badSort = prices.slice().sort(); //sorts of strings
const ascendSort = prices.slice().sort((a, b) => a - b); //ascending order
//since both referring to same array could slice to make a copy
const descendSort = prices.slice().sort((a, b) => b - a); //descending

books.sort((a, b) => a.rating - b.rating); //sorts by rating ascending

//reduce()- executes a reducer function on each element of the array, resulting in just one single value
//could be used for summing/accumulating

// array.reduce((accumulator, currentValue)=>{
//     return accumulator+currentValue;
// });

const numz = [3, 4, 5, 6, 7];
const prod = numz.reduce((total, currentVal) => {
  return total * currentVal;
});

//can find max of array with reduce
const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];
// const maxGrade = grades.reduce((max, currVal) => {
//   if (currVal > max) return currVal;
//   return max;
// });
//could also write as
const maxGrade = grades.reduce((max, currVal) => {
  return Math.max(max, currVal);
});
const minGrade = grades.reduce((min, currVal) => {
  return Math.min(min, currVal);
});

//can use reduce with a starting initial value
const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
  return sum + currVal;
}, 1000); //sum will start at 1000

const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "y", "y", "y"];
// const results1 = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++;
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {});
const results1 = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});

const booksGroup = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book);
  return groupedBooks;
}, {});
