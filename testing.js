// import myJson from './example.json' assert {type: 'json'};

// import schedule from './public/schedule.json' assert {type: 'json'};
const schedule = require('./public/schedule.json');
const cecsLabs = ["ECS-405", "ECS-413", "ECS-414", "ECS-407", "ECS-411", "ECS-412", "ECS-416", "ECS-403", "ECS-404", "ECS-305"];


// Get all classes and times that are in the cecs lab rooms
// for (let i = 0; i < schedule.childCount; i++){
//     if (schedule.children[i].role.toString() == "table"){
//         for (let j = 1; j < schedule.children[i].childCount; j++){
//             if (cecsLabs.includes(schedule.children[i].children[j].children[9].children[0].name.toString())) {
//                 console.log(schedule.children[i].children[j].children[6].children[0].name); // Days String
//                 console.log(schedule.children[i].children[j].children[7].children[0].name); // Time String
//                 console.log(schedule.children[i].children[j].children[9].children[0].name); // Room Number
//             }            
//         }
//     }
// }



/**
 * Time object for tuple of start and end time in minutes
 */
class Time {
    #start;
    #end;
    #time;

    constructor(start, end) {
        this.#start = start;
        this.#end = end;
        this.time = [this.#start, this.#end];
    }

    set start(start) {
        this.#start = start;
    }

    get start() {
        return this.#start;
    }

    set end(end) {
        this.#end = end;
    }

    get end() {
        return this.#end;
    }

    set time(time) {
        this.#time = time;
    }

    get time() {
        return this.#time;
    }
}

/**
 * 
 * @param {*} hours  String of hours
 * @param {*} minutes  String of minutes
 * @returns INTEGER the time of the day in minutes
 */
function toMinutes(hours, minutes) {
    return ((Number(hours) * 60) + Number(minutes));
}

/**
 * 
 * @param {*} time String time 
 * @returns start and end time in minutes
 */
function parseTimeString(time) {
    if (time.includes("AM")) {
        var splitTimes = time.split("-");
        // console.log(splitTimes);
        var startTime = splitTimes[0].split(":");
        // console.log(startTime);
        var startTimeMinutes = toMinutes(startTime[0], startTime[1]);
        var endTime = splitTimes[1].substring(0, splitTimes[1].indexOf("AM"));
        // var endTime = time.substring(0, time[1].indexOf("AM"));
        // console.log(endTime);
        var endTimeSplit = endTime.split(":");
        // console.log(endTimeSplit);
        var endTimeMinutes = toMinutes(endTimeSplit[0], endTimeSplit[1]);
        // console.log(endTimeMinutes);

        const result = new Time(startTimeMinutes, endTimeMinutes);
        return result;
    }
    else if (time.includes("PM")) {
        var splitTimes = time.split("-");
        console.log(splitTimes);
        var startTime = splitTimes[0].split(":");
        console.log(startTime);
        console.log(endTime);
        var endTimeSplit = endTime.split(":");
        console.log(endTimeSplit);
        var endTimeMinutes = toMinutes(endTimeSplit[0], endTimeSplit[1]);
        console.log(endTimeMinutes);

        const result = new Time(startTimeMinutes, endTimeMinutes);
        return result;
    }
    else {
        console.log("Time not right format or N/A");
    }
    return 0;
}

let am = "10:30-11:45AM";
let pm = "12:00-1:30PM";

// ECS-405", "ECS-413", "ECS-414", "ECS-407", "ECS-411", "ECS-412", "ECS-416", "ECS-403", "ECS-404", "ECS-305

// M W Tu Th F Sa
class Class {
    sunday = [];
    monday = [];
    tuesday = [];
    wednesday = [];
    thursday = [];
    friday = [];
    saturday = [];
    constructor(days, times, room) {
        this.days = days;
        this.times = times;
        this.room = room;
    }
}

const classInfo = `TuTh
12-1:15PM
ECS-413
MW
1-2:15PM
ECS-413
MW
1-2:15PM
ECS-414
MW
10:30-11:45AM
ECS-403
MW
1-2:15PM
ECS-403
F
1-3:30PM
ECS-404
F
8-10:30AM
ECS-403
F
1-3:30PM
ECS-405
F
1-3:30PM
ECS-411
MW
9-10:15AM
ECS-413
MW
10:30-11:45AM
ECS-413
TuTh
10:30-11:45AM
ECS-411
F
12-2:30PM
ECS-412
F
10-12:45PM
ECS-411
MW
6:30-7:45PM
ECS-411
TuTh
10:30-11:45AM
ECS-403
TuTh
10:30-11:45AM
ECS-404
TuTh
10:30-11:45AM
ECS-412
MW
12-1:15PM
ECS-404
MW
12-1:15PM
ECS-412
MW
12-1:15PM
ECS-416
TuTh
4:30-5:45PM
ECS-416
TuTh
3-4:15PM
ECS-416
MW
6:30-7:45PM
ECS-403
Sa
1-2:40PM
ECS-414
Sa
3-5:30PM
ECS-305
TuTh
5-5:50PM
ECS-413
TuTh
6-7:15PM
ECS-413
MW
9-10:15AM
ECS-411
F
9-11:30AM
ECS-412
MW
12:30-1:45PM
ECS-411
Sa
8-10:30AM
ECS-414
TuTh
6:30-7:45PM
ECS-411
MW
11-12:15PM
ECS-405
F
10-11:50AM
ECS-414
F
12-2:45PM
ECS-414
MW
10-10:50AM
ECS-414
MW
11-12:15PM
ECS-414
TuTh
11-11:50AM
ECS-416
TuTh
12-1:15PM
ECS-416
TuTh
4:30-5:45PM
ECS-411
TuTh
4:30-5:45PM
ECS-411
MW
2-3:15PM
ECS-412
MW
3-3:50PM
ECS-414
MW
4-5:15PM
ECS-414
F
12-2:45PM
ECS-403
MW
8-9:15AM
ECS-405
TuTh
6-6:50PM
ECS-416
TuTh
7-8:15PM
ECS-416
Sa
8-9:40AM
ECS-407
Sa
10-12:30PM
ECS-305
MW
12:30-1:45PM
ECS-405
MW
2-3:15PM
ECS-411
TuTh
7:30-8:45PM
ECS-414
TuTh
8-9:15PM
ECS-413
TuTh
11-12:15PM
ECS-405
TuTh
2-3:15PM
ECS-405
TuTh
5-6:15PM
ECS-414
F
11-1:45PM
ECS-413
MW
3:30-4:45PM
ECS-412
TuTh
2-3:15PM
ECS-414`;

const arrayOfClasses = classInfo.split('\n');
console.log(arrayOfClasses.length);

let i = 0;
while(i < arrayOfClasses.length) {

    i += 3;
}




// var timeTest = "9:30-12:15PM";
//upd`up console.log(timeTest.includes("AM"));
// var timeSplit = timeTest.split('-');
// var startTime = timeSplit[0].split(":");
// var endTime = timeSplit[1].substring(0, timeSplit[1].indexOf("PM"));
// var endTimeSplit = endTime.split(":");
// console.log(timeTest.indexOf("PM"));

// var startTimeMinutes = toMinutes(startTime[0], startTime[1]);
// var endTimeMinutes = toMinutes(endTimeSplit[0], endTimeSplit[1]);
// // console.log(startTimeMinutes);
// // console.log(endTimeMinutes);

// class Time {
//     #start;
//     #end;

//     constructor(start, end) {
//         this.#start = start;
//         this.#end = end;
//         this.time = [this.#start, this.#end];
//     }

//     get start() {
//         return this.#start;
//     }

//     get end() {
//         return this.#end;
//     }
// }

// const time1 = new Time(startTimeMinutes, endTimeMinutes);
// console.log(time1.start);
// console.log(time1.end);