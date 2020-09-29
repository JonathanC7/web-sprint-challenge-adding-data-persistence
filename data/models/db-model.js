const db = require('../../dbConfig.js');

module.exports = {
    getProjects,
    addResource,
    getResources,
    addProject,
    getTasks,
    addTask
}

function getProjects(){
    return db('projects');
}

function getProjectById(id){
    return db('projects')
        .where({id})
        .first();
}

function addProject(project){
    return db('projects').insert(project)
        .then(ids => {
            return getProjectById(ids[0]);
        })
}

// Resources

function getResources(){
    return db('resources');
}

function findResourceById(id){
    return db('resources')
        .where({id})
        .first();
}
function addResource(resource){
    return db('resources').insert(resource)
        .then(ids => {
            return findResourceById(ids[0]);
        })
}

// Tasks

function getTasks(){
    return db('tasks')
        .join('projects')
        .select('projects.name', 'projects.description as projectDescription', 'tasks.description as taskDescription', 'tasks.notes', 'projects.id')
        .orderBy('projects.id')
}

function getTaskById(id){
    return db('tasks')
        .where({id})
        .first();
}

function addTask(task){
    return db('tasks').insert(task)
        .then(ids => {
            return getTaskById(ids[0]);
        })
}