const topics_router = require('express').Router();
const { User, Post, Topic } = require('../models')

topics_router.get('/', (req, res) => {
    Topic.findAll()
        .then(data => res.json(data))
})

topics_router.post('/', (req, res) => {
    Topic.create({
        name: req.body.name
    }).then(data => res.json(data));
});

module.exports = topics_router;