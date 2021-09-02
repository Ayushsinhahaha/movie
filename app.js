const express =require("express");
const https = require("https");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/movie.html");
});

app.post("/", (req, res) => {
  const searchquery = req.body.search;
  console.log(searchquery);

  const api_key = "lrrINFrE1gYkr0hT1tyMmMNPz5cEaQsDnHesMzrj2Z0";
  const url = `https://api.unsplash.com/search/photos?query=${searchquery}`;

});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//API KEY=client_id=lrrINFrE1gYkr0hT1tyMmMNPz5cEaQsDnHesMzrj2Z0


//commented
  // async function postData(url = "") {
  //   const response = await fetch(url, {
  //     method: "GET", // *GET, POST, PUT, DELETE, etc.
  //     mode: "cors", // no-cors, *cors, same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: "same-origin", // include, *same-origin, omit
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     redirect: "follow", // manual, *follow, error
  //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     // body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   });
  //   return await response.json(); // parses JSON response into native JavaScript objects
  // }

  // postData(`https://api.unsplash.com/search/collections?page=3&query=${searchquery}`)
  //   .then((data) => {
  //      console.log(data)
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });