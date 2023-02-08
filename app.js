// Load Node modules
var express = require('express');
const ejs = require('ejs');
// const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
// const e = require('express');
// const fetch = require('node-fetch');
// Initialise Express
var app = express();

// Render static values
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set the view engine to ejs
app.set('view engine', 'ejs');

function toIsoString(date) {
    var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function (num) {
            return (num < 10 ? '0' : '') + num;
        };

    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes());
}

const d = new Date();
let current_date = toIsoString(d);


// const schedule_response = await fetch('http://web.csulb.edu/depts/enrollment/registration/class_schedule/Fall_2022/By_Subject/CECS.html');

// const address = "192.168.254.130";
const port = 8000;
app.listen(port);
app.get('/', function (req, res) {
    res.render('pages/home', {
        // EJS variable to server-side variable
        current_date: current_date
    });
})