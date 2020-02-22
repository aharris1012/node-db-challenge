const express = require("express");
const ProjectRouter =require("./projects/projects-router");
const server = express();

server.use(express.json());
server.all("/api/project", ProjectRouter);

module.exports = server;
