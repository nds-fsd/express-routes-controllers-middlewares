const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const tasksRouter = require("./routers/tasks");

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use("/tasks", tasksRouter);

app.listen(3000, () => {
  console.log("App is listening on port", port);
});
