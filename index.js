const express = require("express");
const projectsRouter = require("./projects/projectsRouter");
const resourcesRouter = require("./resources/resourcesRouter");
const taskRouter = require("./tasks/taskRouter");

const server= express();

server.use(express.json())
server.use("/api/projects", projectsRouter)
server.use("/api/resources", resourcesRouter)
server.use("/api/tasks", taskRouter)

server.get('/', (req, res) => {
    res.send("Look at this!");
  });

const port = process.env.PORT || 5000;

server.listen(port, ()=>{
    console.log(`Server running on port ${port}.`)
})