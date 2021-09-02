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
