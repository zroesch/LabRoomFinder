// Load Node modules
var express = require('express');
const ejs = require('ejs');
const { response } = require('express');
// const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
// const fetch = require('node-fetch');
// Initialise Express
var app = express();

// Render static values
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Class for class objects
class Class {
    // #height = 0;
    // #width;
    constructor(name, days, time, location){
        this.name = name;
        this.days = days;
        this.time = time;
        this.location = location;
    }
}

  
// const http = require('http');
async function getClassroomSchedules(){
    const classes = new Array();
    try{
        const class_response = await fetch('http://web.csulb.edu/depts/enrollment/registration/class_schedule/Fall_2022/By_Subject/CECS.html');
        const body = await class_response.text();
        // console.log(body);
        const $ = cheerio.load(body);

        // const main = $('.main-content > .container.page-content > .row > .col-md-12 > #pageContent > .subjectContainer');
        // console.log(main.text());
        // $('.main-content > .container.page-content > .row > .col-md-12 > #pageContent').map((i, el) => {
        //     // const name = $(el).find('h4').text();
        //     // console.log(name);
        //     console.log(el.text);
        // })
        // let el9 = $('tr:nth-child(9)')
        $('.main-content > .container.page-content > .row > .col-md-12 > #pageContent > .subjectContainer > .session > .courseBlock > .sectionTable > tbody').each((_, e) => {

            /**
             * for each tr 
             * 0 is the class number
             * 4 is term length
             * 5 is days
             * 6 is time
             * 8 is room
             */
            // if (_ == 4 || _ == 5 || _ == 6 || _ == 8){
            //     console.log($(e).text());
            // }

            // let element = $(e).html();
            // console.log(element);

            // console.log(e.tagName);
            // console.log(e.children.toString());
            // console.log(_.valueOf())

            // console.log(e.children.at(0).tagName);
            console.log(e.firstChild.tagName);
            // if(e.children.at(0))
            console.log(e.children.length);


            let test = $(e).children();
            // console.log(test.toString());
            // let text = $(e).text();
            // console.log(text);

        })

    }catch(error){
        console.log(error);
    }
}



// Run getFormulaOneDrivers
getClassroomSchedules();

// const schedule_response = await fetch('http://web.csulb.edu/depts/enrollment/registration/class_schedule/Fall_2022/By_Subject/CECS.html');
// const body = await schedule_response.text;

// console.log(body);

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
const port = 8000;
app.listen(port);

app.get('/', function(req, res) {
    res.render('pages/index', {
        // EJS variable to server-side variable
        //perseveranceLink: perseveranceLink
    });
})