const express = require("express");
const app = express();

const todoRoutes = require("./routes/todo");

app.use(express.json());

app.use("/todo", todoRoutes);
// localhost:3000/todo
app.get("/", function (req, res) {
  res.send("Hello how are you today!");
});

app.delete("/", (req, res) => {});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("app started"));
