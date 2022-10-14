// import myJson from './example.json' assert {type: 'json'};

// import schedule from './public/schedule.json' assert {type: 'json'};
const schedule = require('./public/schedule.json');

// console.log(schedule.role);
// role = 'table'

// for (let i = 0; i < schedule.childCount; i++){
//     if (schedule.children[i].role.toString() == "table"){
//         for (let j = 1; j < schedule.children[i].childCount; j++){
//             console.log(schedule.children[i].children[j].children[6].children[0].name);
//             console.log(schedule.children[i].children[j].children[7].children[0].name);
//             console.log(schedule.children[i].children[j].children[9].children[0].name);
            
//         }
//     }
    // for (let j = 0; i < schedule.children[i].childCount; j++){
    //     console.log(schedule.children[i].children[j].role);
    // }
    // }

// Create 
// const classes = new Array();
// for (let i = 0; i < schedule.childCount; i++){
//     // console.log(schedule.children[i]);
//     let obj = schedule.children[i];
//     if (schedule.children[i].role.toString() == 'table'){
//         // classes.push(schedule.children[i].children)
//         // console.log(schedule.children[i].role);
//         for (let j = 1; j < schedule.children[i].children.length; j++) {
            
//             console.log(schedule.children[i].children[j].children[6].children[0].name);
//             console.log(schedule.children[i].children[j].children[7].children[0].name);
//             console.log(schedule.children[i].children[j].children[9].children[0].name);

//             // console.log("in inner loop");

//         }

//     }


    // console.log(classes);
// }


/**
 * 
 * @param {*} hours  String of hours
 * @param {*} minutes  String of minutes
 * @returns INTEGER the time of the day in minutes
 */
function toMinutes(hours, minutes){
    return ((Number(hours) * 60) + Number(minutes));
}

var timeTest = "9:30-12:15PM";
var timeSplit = timeTest.split('-');
var startTime = timeSplit[0].split(":");
var endTime = timeSplit[1].substring(0, timeSplit[1].indexOf("PM"));
var endTimeSplit = endTime.split(":");
console.log(timeTest.indexOf("PM"));

var startTimeMinutes = toMinutes(startTime[0], startTime[1]);
var endTimeMinutes = toMinutes(endTimeSplit[0], endTimeSplit[1]);
console.log(startTimeMinutes);
console.log(endTimeMinutes);

class Time {
    #start;
    #end;

    constructor(start, end) {
        this.#start = start;
        this.#end = end;
        this.time = [this.#start, this.#end];
    }

    get start() {
        return this.#start;
    }

    get end() {
        return this.#end;
    }
}

const time1 = new Time(startTimeMinutes, )