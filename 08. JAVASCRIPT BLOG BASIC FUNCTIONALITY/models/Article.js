const Sequеlize = require('sequelize');

module.exports = function (sequelize) {
    const Article = sequelize.define('Article', {
        title:{
            type: Sequеlize.STRING,
            allownull: false,
            required: true
        },
        content:{
            type: Sequеlize.STRING,
            allownull:false,
            required:true,
        },
        date:{
            type: Sequеlize.DATE,
            allownull: false,
            required:true,
            defaultValue:Sequеlize.NOW, 
        },
        author:{
            type: Sequеlize.STRING,
            allownull: false,
            required:true, 
        },

    });
    Article.associate = function(models){
        Article.belongsTo(models.User, {
            foreignKey: 'authorId',
            targetKey: 'id'
        });
    };

    return Article;
}