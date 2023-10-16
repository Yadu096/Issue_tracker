const express = require('express');
const { url } = require('inspector');
const app = express();
const port = 8000;
const sassMiddleware = require('node-sass-middleware');
const expressLayouts = require('express-ejs-layouts');
// const flash = require('connect-flash');
// const customFlashMiddleware = require('./config/flash-middleware');
const db = require('./config/mongoose');


//Configure Node-SASS-Middleware
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));

//Parse the form data
app.use(express.urlencoded({extended:false}));

//Setup the static folder
app.use(express.static('./assets'));

//Setup layouts
app.use(expressLayouts);
//Extract styles and scripts from sub pages to the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//Setup the template/view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Setup the flash messages
// app.use(flash());
// app.use(customFlashMiddleware.flashMiddleware);

//Route to the routers
app.use('/', require('./routes/index'));

//Configure app to listen on the port
app.listen(port, function(err){
    if(err){
        console.log(err, "***Error in running the server***");
    }
    console.log(`Server is running on the port ${port}`);
});