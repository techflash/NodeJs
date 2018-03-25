var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');

var app = express();

// Body parser middle-ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Static content middleware
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Program objects
var notes = [
    {
        name: "Sunil",
        topic: "JavaScript",
        summary: "Closure",
        description: "A closure is a function having access to the parent scope, even after the parent function has closed."
    },
    {
         name: "Deepankar",
         topic: "Java",
         summary: "Hash Code and Equals",
         description: "hashCode and equals methods are declared in Object class and they provide uniqueness to each object"
    }
];
var counter = 1;
// Controllers
app.get('/', function(req, res){
    res.render('main', {"notes": notes});
});

app.post('/add-note/', function(req, res){
    notes[++counter] = req.body;
    res.render('main', {'notes': notes});
});





app.listen(3000, function(){
    console.log('Running on port number : 3000');
});
