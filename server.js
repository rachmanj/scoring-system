const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const xss = require("xss-clean");
const cors = require("cors");
const mongoseSanitize = require("express-mongo-sanitize");

const routes = require("./routes");

// connect to database
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_URI);

// PARSING
app.use(bodyParser.json());

//CORS
app.use(cors());

// SANITIZATION
app.use(xss());
app.use(mongoseSanitize());

//ROUTES
app.use("/api", routes);

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
