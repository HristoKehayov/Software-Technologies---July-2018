const homeController = {

    index: (Request, Response)=>{
        Response.render('index.handlebars')
    },

    about: (Request, Response)=>{
        Response.render('about.handlebars')
    }
};

module.exports = homeController;