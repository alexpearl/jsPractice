//JS in the browser/ DOM manipulation
//document object model

// const allLis = document.querySelectorAll("li");

// for (let li of allLis) {
//   li.innerHTML = "we are <b> the champions<b>";
// }

// //altering styles
// const h1 = document.querySelector("h1");
// h1.style.color = "orchid";

// const p = document.querySelector("p");
// p.style.color = "white";

// p.style.backgroundColor = "black";
// //style properties are camelCased

// //this all adds in line style to the html

// //alternative to styling
// const allLi = document.querySelectorAll("li");
// const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
// allLi.forEach((li, i) => {
//   const color = colors[i];
//   li.style.color = color;
// });

// const li = document.querySelector("li");
// const styles = getComputedStyle(li);

const todo = document.querySelector("#todos .todo");
// todo.style.color = "gray";
// todo.style.textDecoration = "line-through";
// todo.style.opacity = "50%";

//using class instead

//document.createElement

const newImg = document.createElement("img");
newImg.src =
  "https://images.unsplash.com/photo-1560167016-022b78a0258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80";
newImg.style.width = "350px";
document.body.appendChild(newImg);

const newLink = document.createElement("a");
newLink.innerText = "mr. bubz video! CLICK ME";
newLink.href = "https://www.youtube.com/watch?v=QQNL83fhWJU";
const firstP = document.querySelector("p");
firstP.appendChild(newLink);
