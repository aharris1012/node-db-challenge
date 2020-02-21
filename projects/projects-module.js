const db =require("../data/dbConfig");

module.exports = {
    list, 
    listById, //takes id 
    listTasks, // takes in id
    listResources,
    listProjectResources, //takes id
    create, //takes in param object === request.body
    createTask, //takes task object and project id
    createResource, //takes resource object 
}

function list(){
    return db('projects');
};

function listById(id){
    return db("projects")
    .where({id})
    .first();
};

function listTasks(id){
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('p.project_name','p.description','t.id', 't.task_description', 't.notes', 't.completed')
        .where('p.id', id);
};

function listProjectResources(id){
    return db('project_resources as pr')
        .join('resources as r', 'r.id', 'pr.resource_id')
        .join('projects as p', 'p.id', 'pr.project_id')
        .select('p.project_name', 'p.description', 'r.resource_name', 'r.description')
        .where('p.id', id);
}

function listResources(){
    return db('resources');
};

function create(requestBody){
    return db("projects")
        .insert(requestBody)
        .then(([id]) => {
            return listById(id);
        })
};

function createTask(task, id){
    return db('tasks as t')
        .insert(task)
        .then(([id]) => {
            return listTasks(id);
        })
};

function createResource(resource, id){
    return db('resources as r')
        .insert(resource)
        .then(() => {
            return listResources();
        })
};