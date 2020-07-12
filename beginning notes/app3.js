//section 6: objects are collections of properties
//properties are a key-value pair    ex: username:  +  'crazyKat'
//rather than accessing data using an index, we use custom keys
//all keys are converted to strings
//if order is important than array is preferred but objects can be useful
//use {} for objects instead of [] like arrays

const fitbitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
};
//to access a property use dot
fitbitData.avgCalorieBurn; //will give us avgCalorieBurn

const numbers = {
  100: "one hundred",
  16: "sixteen",
};
numbers["100"]; //will find us "one hundred" because 100 is turned into string then tries to find it

const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};
//good to use the square bracket notation as used above to find 100

const userReviews = {};

userReviews["queenBee49"] = 4.0; //assigns queenBee49 as key and 4.0 as value
userReviews.mrSmith78 = 3.6;
userReviews["queenBee49"] += 2; //will update queenBee49 to =6

//nested arrays & objects
const student = {
  firstName: "david",
  lastName: "jones",
  strengths: ["music", "art"],
  exams: {
    attendance: 100,
    midterm: 92,
    final: 88,
  },
};

const avg = (student.exams.midterm + student.exams.final) / 2;
student.strengths[1]; //will give us art

//big array with objects
const shoppingCart = [
  {
    product: "jenga classic",
    price: 6.88,
    quantity: 1,
  },
  {
    product: "echo dot",
    price: 29.99,
    quantity: 3,
  },
  {
    product: "fire stick",
    price: 39.99,
    quantity: 2,
  },
];

const game = {
  player1: {
    username: "blue",
    playingAs: "x",
  },
  player2: {
    //objects
    username: "muffins",
    playingAs: "o",
  },
  board: [
    //nested arrays to make board
    ["0", null, "x"],
    ["x", "o", "x"],
    [null, "o", "x"],
  ],
};

//objects are also reference types like arrays which means we use const alot to keep the reference the same

//array/object equality
let nums = [1, 2, 3];
let mystery = [1, 2, 3];
//these do not == or === each other, have different addresses in memory

let MoreNums = nums; //have same address thus ===

const user = {
  username: "cherrygarcia78",
  email: "garcia@gmail.com",
  notifications: ["message", "alert"],
};

if (!user.notifications.length) {
  console.log("no new notifications");
}

//understand we can't easily compare arrays right now, they only check equality of reference
//overall objects use {} and arrays use [], and they can be used together
