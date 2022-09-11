// import myJson from './example.json' assert {type: 'json'};

// import schedule from './public/schedule.json' assert {type: 'json'};
const schedule = require('./public/schedule.json');


// role = 'table'
//
// console.log(schedule.children.name);
const classes = new Array();
for (let i = 0; i < schedule.childCount; i++){
    // console.log(schedule.children[i]);
    let obj = schedule.children[i];
    if (schedule.children[i].role.toString() == 'table'){
        // classes.push(schedule.children[i].children)
        // console.log(schedule.children[i].role);
        for (let j = 1; j < schedule.children[i].children.length; j++) {
            console.log(schedule.children[i].children[j].children[6].children[0].name);
            console.log(schedule.children[i].children[j].children[7].children[0].name);
            console.log(schedule.children[i].children[j].children[9].children[0].name);

            // console.log("in inner loop");

        }

    }


    // console.log(classes);
}



