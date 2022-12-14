const { DataTypes, Model } = require('sequelize');

class Post extends Model {};

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    topic_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: require('../config/connection'),
    modelName: 'post'
});

module.exports = Post;