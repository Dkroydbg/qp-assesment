require("dotenv").config({ path: `${process.cwd()}/.env` });
const express = require("express");

const app = express();
const authRoute = require("./routes/authRoute.js");
const catchAsync = require("./utils/catchAsync.js");
const AppError = require("./utils/appError.js");
const globalErrorHandler = require("./controllers/globalErrorHandler.js");
const grocceryRoute = require("./routes/grocceryRoute.js");

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello postgres",
  });
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/groccery", grocceryRoute);

app.use(
  "*",
  catchAsync(async (req, res, next) => {
    throw new AppError("This is error ", 404);
  })
);

app.use(globalErrorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("port is listening", PORT);
});
