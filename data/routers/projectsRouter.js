const express = require('express');
const { resource } = require('../../api/server.js');

const db = require('../models/db-model.js');
const router = express.Router();

// Requests for projects

// GET
router.get('/', (req, res) => {
    db.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            res.status(500).json({message: 'Could not retrieve projects.', error: err})
        })
})

// POST
router.post('/', (req, res) => {
    db.addProject(req.body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({message: 'There was an issue adding the project.', error: err})
        })
})

// Requests for resources

// GET
router.get('/resources', (req, res) => {
    db.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(err => {
            res.status(500).json({message: 'Could not retrieve resources.', error: err})
        })
})

// POST
router.post('/resources', (req, res) => {
    const resourceData = req.body;

    db.addResource(resourceData)
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Failed to add resource, the project may not exist.', error: err})
        })
})

// Requests for tasks

// GET
router.get('/tasks', (req, res) => {
    db.getTasks()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.json(500).json({message: 'Failed to retrieve tasks.', error: err})
        })
})

// POST 
router.post('/tasks', (req, res) => {
    const taskData = req.body;
    db.addTask(taskData)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: 'Failed to add task, the project may not exist.', error: err})
        })
})

module.exports = router;