//https://www.youtube.com/watch?v=wiozYyXQEVk
//Dev Ed dom manip video

// const text = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");

// text.classList.remove("change");

// changeColor.addEventListener("click", () => {
//   text.classList.toggle("change");
// });
//when you click the button called changeColor it will toggle on the css class of change to the text/h1

const userList = document.querySelector(".name-list");

// for (let user of userList) {
//   user.addEventListener("click", function () {
//     this.style.color = "red";
//   });
// }

const listInput = document.querySelector(".list-input");

const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function () {
  //create new li
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);
  //add the input value inside that new li
  newLi.appendChild(liContent);
  //attach the li to the user list
  userList.appendChild(newLi);
});
