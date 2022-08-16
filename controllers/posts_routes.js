const posts_router = require('express').Router();
const { User, Post, Topic } = require('../models');

// GET ALL POSTS 
posts_router.get('/', (req, res) => {
    Post.findAll()
        .then(data => res.json(data))
})

// CREATE BLOG POST ON USER
posts_router.post('/', (req, res) => {
    const user_id = req.session.user_id
    User.findOne({
        where: {
            id: user_id
        },
        attributes: ['username']
    }).then(user => {
        // console.log(user.username)
        // console.log(req.body)
        Post.create({
            title: req.body.title,
            author: user.username,
            topic_name: req.body.topic_name,
            content: req.body.content,
            userId: user_id
        }).then(data => res.json(data))
    })
})

// posts_router.get('/test', (req, res) => {
//     const user_id = req.session.user_id
//     User.findOne({
//         where: {
//             id: user_id
//         },
//         attributes: ['username']
//     }).then(user => {
//         Topic.findOne({
//             where: {
//                 name: req.body.topic
//             }, attributes: ['topicId']
//         })
//     })
// })

module.exports = posts_router;