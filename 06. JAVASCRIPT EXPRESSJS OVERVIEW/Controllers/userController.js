const userController = {

    loginGET: (Request, Response)=>{
        Response.render('login.handlebars')
    },
    loginPOST: (Request, Response)=>{
        let body = Request.body;

        Response.render('index.handlebars', body)
    }
};

module.exports = userController;