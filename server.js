var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var client = require('./routes/client');
var alert=require('./routes/alert');
var ai=require('./routes/ai');

var port = 80;
var app = express();


// Database setup
let mongoose=require('mongoose');
let DB = require('./config/db');
//point Mongoose to the DB URI
mongoose.connect(DB.URI,{ useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

let mongoDB= mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=>{
  console.log("Connected to MongoDB...");
})

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', client);
app.use('/api', alert);
app.use('/api', ai);

app.listen(port, function(){
    console.log('Server started on port '+port);
});