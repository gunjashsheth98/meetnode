const express = require("express");
const fs = require("fs");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");

// Load Config File
const config = require("./config/config");

//Connect to database
connectDB();

// Route Files
const meeting = require("./routes/Meeting");

const app = express();

if (config.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Body Parser
app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  next();
});

// URLS
app.use("/api/v1/meetingdata", meeting);
app.use("/", (req, res) => {
  res.send("Welcome");
});
app.use(errorHandler);

const PORT = config.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${config.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close Server and Exit Process
  server.close(() => {
    process.exit(1);
  });
});
