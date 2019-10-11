const express = require("express");

const ProjectsRouter = require("./routes/projectRoutes.js");
// const ResourcesRouter = require("./routes/resourcesRoutes.js");
// const TasksRouter = require("./routes/taskRoutes.js");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectsRouter);
// server.use("/api/resources", ResourcesRouter);
// server.use("/api/task", TasksRouter);

module.exports = server;
