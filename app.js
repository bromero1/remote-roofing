const express = require("express");
const bodyParser = require("body-parser");

// Database
const db = require("./config/db");

const app = express();
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

// Index route
app.get("/", function (req, res) {
  res.send('<h1 style="text-align: center">Remote Roofing Backend test</h1>');
});

// Routes to API
app.use("/API/users", require("./routes/users"));
app.use("/API/tasks", require("./routes/tasks"));
app.use("/API/projects", require("./routes/projects"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
