const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/toDosRoutes.js");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use("/todos", router);

app.listen(PORT);
