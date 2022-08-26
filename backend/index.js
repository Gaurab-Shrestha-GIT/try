const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", require("./routes/Home"));

app.listen(5000, () => {
  console.log("Server is running in port 5000");
});
