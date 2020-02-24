const db = require('../data/dbConfig.js');

module.exports = {
    getResources,
    addResource,
    getAllResources
}

function getAllResources(){
    return db('Resources')
}
function getResources(id){
    return db('Resources')
        .join('Projects_Resources', 'Resources.id', 'Projects_Resources.resources_id')
        .join('Projects', 'Projects.id', 'Projects_Resources.project_id')
        .select('Resources.id','Resources.name','Resources.description')
        .where('Projects.id', id)
}

function addResource(newResource){
    return db('Resources').insert(newResource, "id")
} 