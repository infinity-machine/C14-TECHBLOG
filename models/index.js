// IMPORT MODELS
const User = require('./User');
const Post = require('./Post');
const Topic = require('./Topic');

// USER - POST ONE TO MANY
User.hasMany(Post);
Post.belongsTo(User);

// POST - TOPIC ONE TO MANY
Topic.hasMany(Post);
Post.belongsTo(Topic)

// EXPORTS
module.exports = {User, Post, Topic}