const express = require("express");
const app = express();
var cors = require("cors");
const connection = require("./db/config");
const router = require("./router/data.model");

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  connection();
});
