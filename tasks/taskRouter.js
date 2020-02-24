const express = require("express");
const Tasks = require("./tasksDB.js")
const router = express.Router()

router.get('/', (req,res) => {
    Tasks.getLiterallyAllTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(500).json({error: "Could not get ALL tasks."})
        })
})

// In order to post to this URL of "/api/tasks" you MUST include project_id in req.body
router.post('/', (req,res) => {
    Tasks.addTask(req.body)
        .then(id => {
            res.status(201).json({
                message: "Successfully added a new task.",
                newTask: {
                    id: id[0],
                    description: "this will be replaced by req.body spread-in",
                    notes: null,
                    completed: false,
                    project_id: "this will be replaced by req.body spread-in",
                     ...req.body
                    }
            })
        })
        .catch(err => {
            res.status(500).json({error: "Could not add task."})
        })
})

module.exports = router;