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
const firstReq = new XMLHttpRequest();

firstReq.addEventListener("load", function () {
  console.log("first req worked");
  const data = JSON.parse(this.responseText);
  const filmURL = data.results[0].films[0]; //getting first planet->film
  const filmReq = new XMLHttpRequest("load", function () {
    console.log("second req worked");
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  });
  filmReq.addEventListener("error", function (e) {
    console.log("error", e);
  });
  filmReq.open("GET", filmURL);
  filmReq.send();
  // for (let planet of data.results) {
  //   console.log(planet.name);
  // }
});
firstReq.addEventListener("error", () => {
  console.log("error..");
});

firstReq.open("GET", "https://swapi.dev/api/planets");
firstReq.send();
console.log("request sent");

//output error having to do with CORS
