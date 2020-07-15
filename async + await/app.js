//async and await functions rely on promises kinda

//wes bos yt talk on the subject https://www.youtube.com/watch?v=DwQJ_NPQWWo&t=113s

function getInfo() {
  const info = axios.get("http://swapi.dev/api/planets/");
  console.log(info);
}
//above doesn't work but would be nice if it did...

//async functions always return a promise
async function greet() {
  return "hello";
}
//Promise {<resolved>: "hello"}

greet().then((val) => {
  console.log("promise resolved with ", val);
});
//promise resolved with  hello

// below example done without asyc
// function add(x,y){
//   return new Promise((resolve, reject)=>{
//     if (typeof x !== "number" || typeof y !== " number") {
//       reject ("x and y must be numbers");
//     }
//     resolve(x+y)
//   })
// }
async function add(x, y) {
  if (typeof x !== "number" || typeof y !== " number") {
    throw "x and y must be numbers";
  }
  return x + y;
}

add("e", "r")
  .then((val) => {
    console.log("promise resovled with :", val);
  })
  .catch((err) => {
    console.log("promise rejected with :", err);
  });
//promise rejected with : x and y must be numbers

//await - put inside a async function and will apuse the execution of the function waiting for the promise to be resolved
// async function getPlanets() {
//   const res = await axios.get("https://swapi.dev/api/planets/");
//   console.log(res.data);
// }
// //can only use await within async
// getPlanets().catch((err) => {
//   console.log("error", err);
// });

async function getPlanets() {
  try {
    const res = await axios.get("https://swapi.dev/api/planets/");
    console.log(res.data);
  } catch (e) {
    console.log("error", e);
  }
}
//can just chain on a try/catch

//multiple awaits
