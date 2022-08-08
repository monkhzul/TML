const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome!" });
});

const db = require('./models');

db.sequelize.authenticate().then(() => {
  console.log("Connected to SMTTerms.")
}).catch(err => {
  console.log("Unable to connect", err);
});

require("./routes/routes")(app);


const PORT = 8088;
app.listen(PORT, "0.0.0.0")