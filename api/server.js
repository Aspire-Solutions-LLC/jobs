// Dependencies
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// Server instance
const server = express();

// Library Middleware
server.use(cors(), helmet(), express.json());

// Routers
const usersRouter = require("../controllers/user");
const jobsRouter = require("../controllers/job");
const authRouter = require("../controllers/auth");
         

// Internal middleware
const errorHandler = require("../middleware/errorHandling");

// API endpoints
server.use("/users", usersRouter);
server.use("/jobs", jobsRouter);
server.use("/auth", authRouter);


// sanity check
server.get("/", (req, res) => {
  res.send("Welcome to Remote Jobs Board!");
});

// async error handling. must come AFTER API routes or will raise TypeError
server.use(errorHandler);

module.exports = server;
