const Article = require('../models').Article;
const User = require('../models').User;


module.exports = {
    createGet: (req, res) =>{
        res.render('article/create');
    },

    createPost: (req, res) =>{
        let articleBody = req.body;
        let errorMsg = '';

        if (!req.isAuthenticated()) {
            errorMsg='You should be logged in to create articles!'
        } else if (!articleBody.title) {
            errorMsg='Invalid title!';
        } else if (!articleBody.content) {
            errorMsg='Invalid content!';            
        }

        if (errorMsg) {
            res.render('article/create', {error: errorMsg});
            return;
        }
        articleBody.authorId = req.user.id;
        articleBody.author = req.user.fullName

        Article.create(articleBody).then(article =>{
            res.redirect('/');
        }).catch(err=>{
            console.log(err.message);
            res.render('article/create', {error: errorMsg});
        });
    },

    details:(req, res)=>{
        let id = req.params.id;
        Article.findById(id, {include: [
            {
                model: User,
            }
        ]
    }).then(article=>{
        res.render('article/details', article.dataValues)
        });
    },
};