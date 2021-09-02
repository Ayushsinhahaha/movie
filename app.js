const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const { response } = require("express");
const axios = require("axios").default;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/movie.html");
});

app.get("/books", (req, res) => {
  const searchquery = req.body.search;
  console.log(searchquery);

  const api_key = "lrrINFrE1gYkr0hT1tyMmMNPz5cEaQsDnHesMzrj2Z0";
  const url = `https://api.unsplash.com/search/photos?query=${searchquery}&client_id=${api_key}`;

  axios.get(url)
  .then(function (response) {
    res.send(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
