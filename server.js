const express = require("express");
const firebase = require("./app_server/config/firebase");
const bodyParser = require("body-parser");
const usersRouter = require("./app_server/routes/users");
const cartRouter = require("./app_server/routes/cart");
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//Firebase
firebase.initialize();

// Routes
app.use("/users", usersRouter);
app.use("/cart", cartRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
