/* ---- Initiating An Express app to serve api  ---- */
const express = require("express");
const app = express();

/* ---- using dotenv for Accessing Enviornmental Variables ---- */
require("dotenv").config();

/* ---- Importing JSON files (all the data) ---- */
const quotes = require("./quotes.json");
const theme = require("./src/themes.json");

/* ---- Importing Card template ---- */
const { quoteCard } = require("./src/quoteCard");

/* ---- Importing utility functions ---- */
const { isValidHexColor } = require("./src/utils");

/* ---- Handling get requests on all routes ----*/
app.get("/", async (req, res) => {
  res.send(
    "Hello There! Welcome to our quote app. To get A Rendered Quote go to /quote route"
  );
});

app.get("/quote", async (req, res) => {
  const query = req.query;
  /* Generating Our Random Quote on Each Request By default */
  const quoteObject = quotes[Math.floor(Math.random() * quotes.length)];
  if (query.type == "json") {
    /* #############################################
     Serving JSON if user goes to /quotes?type=json
    ##############################################*/
    /* ----- Sets the type of content sent  ----- */
    res.setHeader("Content-Type", "text/html; charset=UTF-8");
    /* Set the Cache type to public (Any cache can store the data) and the max-age */
    res.setHeader("Cache-Control", `max-age=N, public`);
    /* ---- sending svg as a response ---- */
    res.send(quoteObject);
  } else {
    /* #######################################
     Serving SVG by direct endpoint to /quotes
    #########################################*/

    const quote = `${quoteObject.quote} - ${quoteObject.author}`;

    /* ---- Calculate card parameters based on query values ---- */
    const textColor = isValidHexColor(query.textColor)
      ? `#${query.textColor}`
      : theme.dark.textColor;
    const bgColor = isValidHexColor(query.bgColor)
      ? `#${query.bgColor}`
      : theme.dark.bg;
    const borderColor = isValidHexColor(query.borderColor)
      ? `#${query.borderColor}`
      : theme.dark.borderColor;
    const hideBorder = query.hideBorder
      ? query.hideBorder === "true"
      : theme.dark.hideBorder;

    /* ---- Setting up card properties,data---- */
    let card = quoteCard(
      textColor,
      bgColor,
      borderColor,
      quote,
      hideBorder
    );

    /* ----- Sets the type of content sent  ----- */
    res.setHeader("Content-Type", "image/svg+xml");

    /* Set the Cache type to public (Any cache can store the data) and the max-age */
    res.setHeader("Cache-Control", `max-age=N, public`);
    /* ---- sending svg as a response ---- */
    res.send(card);
  }
});

app.get("/all", (req, res) => {
  /* ----Sending all quotes as a response ---- */
  res.send(quotes);
});

/* 
    Using an Environmentable variable to 
    check if it's running on develoment 
    server - onlyu run in dev else vercel 
    will handle in next method
*/

if (process.env.NODE_ENV === "development") {
  /* Default port is set to 3000 You can define any other port here as per your requirement */
  const port = 3000;

  /* Starting a server at local system using the app listener */
  app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
  });
}

/* For Deployment on Vercel to work */
module.exports = app;
