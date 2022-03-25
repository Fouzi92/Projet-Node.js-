const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("./models/dbConfig.js");
const postsRoutes = require("./routes/postsController");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use("/posts", postsRoutes);

app.listen(5500, () => console.log("server started: 5500"));
