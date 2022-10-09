// Load Node modules
var express = require('express');
const ejs = require('ejs');
const { response } = require('express');
// const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const e = require('express');
// const fetch = require('node-fetch');
// Initialise Express
var app = express();

// Render static values
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set the view engine to ejs
app.set('view engine', 'ejs');

const dateTest = new Date(Date.now());
const dateNow = dateTest.toISOString().slice(0, 10);
console.log(dateNow);





// const schedule_response = await fetch('http://web.csulb.edu/depts/enrollment/registration/class_schedule/Fall_2022/By_Subject/CECS.html');

const address = "192.168.254.130";
const port = 8000;
app.listen(port, address);
app.get('/', function(req, res) {
    res.render('pages/index', {
        // EJS variable to server-side variable
        dateNow: dateNow
    });
})