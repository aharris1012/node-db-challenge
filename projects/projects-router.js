const express = require("express");
 const Projects = require("./projects-module");

 const router = express.Router();


//resources//
router.post('/resources', (req, res)=>{
    const newResource = req.body;

    Projects.create(newResource)
    .then(resource =>{
        res.staturs(200).json(resource);
    })
    .catch(err =>{
      console.log(err)
      res.status(500).json({message: 'OHH OHH Cant create new resource'});
    });
});

router.get('/resources', (req, res) => {
    Projects.listResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });


//projects//
 router.post('/', (req, res)=>{
     const newProject = req.body;

     Projects.create(newProject)
     .then(project =>{
         res.staturs(200).json(project);
     })
     .catch(err =>{
       console.log(err)
       res.status(500).json({message: 'OHH OHH Cant create new project'});
     });
 });

 router.get('/',(req,res)=>{
     Projects.list()
     .then(projects =>{
         res.json(projects);
     })
     .catch(err =>{
         console.log(err)
         res.status(500).json({message: 'Unable to get list of projects'})
     });
 });



 //tasks//
 router.post('/:id/tasks', (req, res)=>{
    const newTask = req.body;
    const {id} =req.params;

    Projects.create(newTask, id)
    .then(task =>{
        res.staturs(200).json(task);
    })
    .catch(err =>{
      console.log(err)
      res.status(500).json({message: 'OHH OHH Cant create new task'});
    });
});

router.get('/:id/tasks', (req, res) => {
    const {id} = req.params

    Projects.listTasks(id)
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });

module.exports = router;