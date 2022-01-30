const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
//innitialitations
const app = express();
require('./db')

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'view'));
app.engine('.hbs', engine({
    defaultLayout : 'main',
    layoutsDir :path.join(app.get('views'), 'layouts'),
    partialsDir :path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs')
//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use(session({
    secret: 'warever',
    saveUninitialized: true,
    resave: true
}))
//Global variables
app.use(express.static(path.join(__dirname, 'public')));
//routers
app.use(require('./routers/index'));
app.use(require('./routers/notes'));
app.use(require('./routers/users'));
//static files

//server
app.listen(app.get('port'), ()=>{
    console.log('listening on port',app.get('port'));
});