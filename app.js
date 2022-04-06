const express = require("express");
const app = express();
const cors = require("cors");
const toDosRouter = require("./routes/toDosRoutes.js");

const PORT = process.env.port || 8081;


app.use(express.json());
app.use(cors());
app.use(toDosRouter);


app.listen(PORT);