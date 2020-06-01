//the world of loops
//allow us to repeat code

//for loops
// for (let i = 0; i <= 9; i++) {
//   console.log("hello wrld", i);
// }

// for (let num = 1; num <= 20; num++) {
//   console.log(`${num}x${num}=${num * num}`);
// }

// //backwards
// for (let i = 200; i >= 0; i -= 25) {
//   console.log(i);
// }

// //loops and arrays
// const examScores = [98, 77, 84, 91, 57, 66];
// for (let i = 0; i < examScores.length; i++) {
//   console.log(examScores[i]);
// }

// const myStudents = [
//   {
//     firstName: "zeus",
//     grade: 99,
//   },
//   {
//     firstName: "artemis",
//     grade: 88,
//   },
//   {
//     firstName: "hera",
//     grade: 72,
//   },
//   {
//     firstName: "apollo",
//     grade: 54,
//   },
// ];
// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   console.log(`${student.firstName} got a score of ${student.grade}`);
// }
// let total = 0;
// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   total += student.grade;
// }
// console.log(total / myStudents.length); //avg

// const word = "stressed";
// let reversedWord = "";
// for (i = word.length - 1; i >= 0; i--) {
//   reversedWord += word[i];
//   console.log(reversedWord);
// }

// //nested for loops
// for (let i = 1; i <= 10; i++) {
//   console.log("outer loop:", i);
//   for (let j = 10; j >= 0; j -= 2) {
//     console.log(" inner loop:", j);
//   }
// }

// const gameBoard = [
//   [4, 32, 8, 4],
//   [64, 8, 32, 2],
//   [8, 32, 16, 4],
//   [2, 8, 4, 2],
// ];
// let totalScore = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//     totalScore += row[j];
//   }
// }
// console.log(totalScore);

//while loops
//in the loop, update or attempt to make the condition false
// let j = 0;
// while (j <= 5) {
//   console.log(j);
//   j++;
// }

// const target = Math.floor(Math.random() * 10); //random number
// let guess = Math.floor(Math.random() * 10);

// while (guess !== target) {
//   console.log(`target: ${target}   guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`target: ${target}   guess: ${guess}`);
// console.log("congrats you win");

//break; can allow us to break out of loops in for loops which is incommon though
for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    break; //breaks when reaches 5
  }
}

const target = Math.floor(Math.random() * 10); //random number
let guess = Math.floor(Math.random() * 10);
while (true) {
  if (target === guess) {
    break;
  }
  console.log(`target: ${target}   guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`target: ${target}   guess: ${guess}`);
console.log("congrats you win");

//for-of
let subReddits = ["soccer", "popheads", "cringe", "books"];
for (let sub of subReddits) {
  console.log(sub);
}

let shows = [
  "Breaking Bad",
  "Money Heist",
  "Game of Thrones",
  "River Monsters",
];
for (let tvName of shows) {
  console.log(tvName);
}

for (let char of "cockadoodledoo") {
  console.log(char.toUpperCase());
}

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

//ex where for-of is disadvantage because we need to know index
const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];
for (let i = 0; i < words1.length; i++) {
  console.log(words1[i] + words2[i]);
}

//for of with objects
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In Bruges": 9,
  Amedeus: 10,
  "Kill Bill": 8,
  "Little Miss Sunshine": 8.5,
  Coraline: 7.5,
};

//gives us list of the movies/keys
for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]); //this will give us the movies and then ratings
}
//to find avg rating
const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
  total += r;
}
let avg = total / ratings.length;
console.log(avg);

//for in loops are used for objects ---for of are good for arrays

const jeopardyWinnings = {
  regularPlay: 24552340,
  watsonChallenge: 300000,
  tournamentOfChampions: 50000,
  battleOfTheDecades: 100000,
};

for (let prop in jeopardyWinnings) {
  console.log(prop); //used to log out the keys
  console.log(jeopardyWinnings[prop]); //logs out the values
}

let totalWinnings = 0;
for (let prop in jeopardyWinnings) {
  totalWinnings += jeopardyWinnings[prop];
}
console.log(`Ken Jennings Total Earnings: ${totalWinnings}`);

const season = {
  wins: 30,
  ties: 3,
  losses: 10,
};
let totalGames = 0;
let winPercent = 0;
for (let amount in season) {
  console.log(amount, season[amount]);
  totalGames += season[amount];
}
console.log(`number of games played :${totalGames}`);
