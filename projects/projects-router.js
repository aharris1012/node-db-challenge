const express = require("express");
 const Projects = require("./projects-module");

 const router = express.Router();


 router.post('/', (req, res) => {
  const newProject = req.body;

  Projects.create(newProject)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
      console.log(err)
    res.status(500).json({ message: 'Failed to create new project' });
  });
});


router.get('/', (req, res) => {
  Projects.list()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
      console.log(err)
    res.status(500).json({ message: 'Failed to get projects' });
  });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;

  Projects.listById(id)
  .then(project => {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {
      console.log(err)
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

// RESOURCES//


router.post('/resources', (req, res) => {
  const newResource = req.body;

  Projects.createResource(newResource)
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
      console.log(err)
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});



router.get('/:id/resources', (req, res) => {
  const {id} = req.params

  Projects.listProjectResources(id)
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
      console.log(err)
    res.status(500).json({ message: 'Failed to get resources' });
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


// TASKS //


router.post('/:id/tasks', (req, res) => {
  const newTask = req.body;
  const {id} = req.params;

  Projects.createTask(newTask, id)
  .then(task => {
    res.status(201).json(task);
  })
  .catch (err => {
      console.log(err)
    res.status(500).json({ message: 'Failed to create new task' });
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