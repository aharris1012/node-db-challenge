const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    getProject,
    addProject,
    updateProject,
    deleteProject
}

function getProjects(){
    return db('Projects')
}

function getProject(id){
    return db('Projects').where('Projects.id', id).first()
}

function addProject(newProject){
    return db('Projects').insert(newProject, "id")
}

function updateProject(updatedProject, id){
    return db('Projects').where('Projects.id',id).update(updatedProject)
}

function deleteProject(id){
    return db('Projects').where('Projects.id',id).delete(id)
}