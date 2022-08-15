const Post = require('./Post');

const db = require('../config/connection')

db.sync({force: false}).then(() => {
    Post.create({
        title: 'title of my post',
        author: 'me',
        topic: 'being cool',
        content: 'this and that and this and that and this and that and some other stuff too',
        userId: 2
    });
})


