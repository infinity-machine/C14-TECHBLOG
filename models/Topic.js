const { DataTypes, Model } = require('sequelize');

class Topic extends Model {};

Topic.init({
    name: {
        type: DataTypes.STRING
    }
}, {
    sequelize: require('../config/connection'),
    modelName: 'topic'
});

module.exports = Topic;