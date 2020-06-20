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
const changeColor = function (box) {
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
