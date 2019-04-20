const express = require('express');
const homeController = require('./Controllers/homeController');
const userController = require('./Controllers/userController');
const handlebars  = require('express-handlebars');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', homeController.index);
app.get('/about', homeController.about);

app.get('/login', userController.loginGET);
app.post('/login', userController.loginPOST);

app.listen(port, ()=>console.log(`app-demo is listening on localhost:${port}!`));