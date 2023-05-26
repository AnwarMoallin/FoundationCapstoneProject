const express = require("express");
const cors = require("cors");
const db = require("./models");
const shoes = require("./controllers/index");

const app = express();

// db.sequelize.sync({ force: true });
db.sequelize.sync();

app.use(cors());
app.use(express.json());

app.post("/", shoes.create);
app.get("/", shoes.findAll);
app.delete("/", shoes.delete);
app.put("/", shoes.update);

app.listen(3005, () => {
  console.log(`server is running on port: 3005`);
});
