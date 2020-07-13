//single page apps dont need to refresh to get data, staying on a single page

//json and xml are formats for sending data

//xml formatting similar to html
/* <name>
    <first>todd</first>
    <last>smith</last>
</name>
<email>togg@gmail.com</email>
 */

//XMLHttpRequest -doesn't support callbacks

//working with star wars api
// const firstReq = new XMLHttpRequest();

// firstReq.addEventListener("load", function () {
//   console.log("first req worked");
//   const data = JSON.parse(this.responseText);
//   const filmURL = data.results[0].films[0]; //getting first planet->film
//   const filmReq = new XMLHttpRequest();

//   filmReq.addEventListener("load", function () {
//     console.log("second req worked");
//     const filmData = JSON.parse(this.responseText);
//     console.log(filmData);
//   });

//   filmReq.addEventListener("error", function (e) {
//     console.log("error", e);
//   });
//   filmReq.open("GET", filmURL);
//   filmReq.send();
//   // for (let planet of data.results) {
//   //   console.log(planet.name);
//   // }
// });
// firstReq.addEventListener("error", () => {
//   console.log("error..");
// });

// firstReq.open("GET", "https://swapi.dev/api/planets/");
// firstReq.send();
// console.log("request sent");

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", function () {
//   console.log("FIRST REQUEST WORKED!!!");
//   const data = JSON.parse(this.responseText);
//   const filmURL = data.results[0].films[0];
//   const filmReq = new XMLHttpRequest();
//   filmReq.addEventListener("load", function () {
//     console.log("SECOND REQUEST WORKED!!!");
//     const filmData = JSON.parse(this.responseText);
//     console.log(filmData.title);
//   });
//   filmReq.addEventListener("error", function (e) {
//     console.log("ERROR!!", e);
//   });
//   filmReq.open("GET", filmURL);
//   filmReq.send();
// });
// firstReq.addEventListener("error", (e) => {
//   console.log("ERROR!!!!!!");
// });
// firstReq.open("GET", "https://swapi.dev/api/planets/");
// firstReq.send();
// console.log("Request Sent!");

//fetch syntax - supports promises, not supported in IE but who cares about IE

// const checkStatusAndParse = (response) => {
//   if (!response.ok) throw new Error(`status code error: ${response.status}`);
//   return response.json();
// };

// const printPlanets = (data) => {
//   console.log("loaded ten more planets");
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url) => {
//   return fetch(url);
// };

// fetch("https://swapi.dev/api/planets/")
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .catch((err) => {
//     console.log("something went wrong", err);
//   }); //even if 404 status code catch will not run, fetch isn't like the xmlhttpreqs in that case
//but when we throw a new error we have acess to it in our catch
//json method makes it fully read and returns a promise already in a promise so to return the data we need another .then

//wds https://www.youtube.com/watch?v=cuEtnrL9-H0
fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "User 1",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("errror"));

//back to colt course

//axios - an external library , uses fetch behind the scenes, unlike fetch its json parsed already
// axios
//   .get("https://swapi.dev/api/planets/")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log("in catch callback", error);
//   });

const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
  return axios.get(url);
};

const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log("error", err);
  });
