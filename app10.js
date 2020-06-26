//section 15 communicating with events

//2 ways to not add events
// const btn = document.querySelector("#clicker");

// //also dont do this
// btn.ondblclick = function () {
//   console.log("double click");
// };

// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   alert("you clicked me");
// });

// btn.addEventListener("mouseover", function () {
//   btn.innerText = "stop touching me";
// });

// btn.addEventListener("mouseout", function () {
//   btn.innerText = "click me";
// });

// window.addEventListener("scroll", function () {
//   console.log("stop scrolling now");
// });

//impossible button game
// const btn = document.querySelector("button");

// btn.addEventListener("mouseover", function () {
//   const height = Math.floor(Math.random() * window.innerHeight);
//   const width = Math.floor(Math.random() * window.innerWidth);
//   btn.style.left = `${width}px`;
//   btn.style.top = `${height}px`;
// });

// btn.addEventListener("click", function () {
//   btn.innerText = "you got me";
//   document.body.style.backgroundColor = "green";
// });

//random qoute gen
// const qoutes = ['"have a great day"', '"life is too short"', '"carpe diem"', '"dont hold grudges"'];
// let randomQoute = qoutes[Math.floor(Math.random() * qoutes.length)];
// const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   btn.innerText = randomQoute;
// });

//

//quick color picker
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const changeColor = function (evt) {
  console.log(evt);
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor; //use of this to select the thing being used for the eventListener
};

const container = document.querySelector("#boxes");

for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);
  box.addEventListener("click", changeColor); //calling printColor function from above
}

//key events
//tells us when we type a key
document.body.addEventListener("keypress", function (e) {
  console.log(e); //event
});

const input = document.querySelector("#username");

//keydown: any input fires even like shift, a number, caps lock etc, fires when key is pressed down initially
input.addEventListener("keydown", function (e) {
  console.log("keydown!!");
});

//fires when you lift up from pressing a key/ i.e the release
input.addEventListener("keyup", function (e) {
  console.log("keyup!!");
});

//differs from browser to broswer, shift won't show as output for a keypress, but shift+a letter to capitalize it will show
input.addEventListener("keypress", function (e) {
  console.log("keypress!!");
});

//generally keypress wouldn't be good for a game

//note return is a keypress

//shopping list logic
const addItemInput = document.querySelector("#addItem");
const itemsUL = document.querySelector("#items");

addItemInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!this.value) return; //check if it's truthy or falsy (empty string)
    const newItemText = this.value;
    const newItem = document.createElement("li");
    newItem.innerText = newItemText;
    itemsUL.append(newItem);
    this.value = ""; //clear it
  }
});

//counter incorporate into game just made
let counter = document.querySelector("#count"),
  count = 0;
counter.addEventListener("click", function () {
  count += 1;
  counter.innerHTML = `count: ` + count;
});

//form ex
const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggiesSelect = document.querySelector("#veggie");
const form = document.querySelector("#signup-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); //prevent the default behavior
  console.log("cc", creditCardInput.value);
  console.log("terms", termsCheckbox.checked);
  console.log("veggiesSelect", veggiesSelect.value);
});

//changes right away/syncs
const formData = {};

for (let input of [creditCardInput, termsCheckbox, veggiesSelect]) {
  input.addEventListener("input", ({ target }) => {
    //destructed target from event then destructed again for next line
    const { name, type, value, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;
  });
}

// creditCardInput.addEventListener("input", (e) => {
//   console.log("cc changed", e);
//   formData["cc"] = e.target.value;
// });
// veggiesSelect.addEventListener("input", (e) => {
//   console.log("veggie changed", e);
//   formData["veggie"] = e.target.value;
// });
// termsCheckbox.addEventListener("input", (e) => {
//   console.log("checkbox changed", e);
//   formData["agreeToTerms"] = e.target.checked;
// });
