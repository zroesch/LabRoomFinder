var fs = require('fs');
const schedule = require('./public/schedule.json');

const cecsLabs = ["ECS-405", "ECS-413", "ECS-414", "ECS-407", "ECS-411", "ECS-412", "ECS-416", "ECS-403", "ECS-404", "ECS-305"];

/**
 * Time object for tuple of start and end time in minutes
 */
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

    get time() {
        return this.time;
    }
}

/**
 * 
 * @param {*} hours  String of hours
 * @param {*} minutes  String of minutes
 * @returns INTEGER the time of the day in minutes
 */
 function toMinutes(hours, minutes){
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
        var startTime = splitTimes[0].split(":");
        var startTimeMinutes = toMinutes(startTime[0], startTime[1]);
        var endTime = time.substring(0, time[1].indexOf("AM"));
        var endTimeSplit = endTime.split(":");
        var endTimeMinutes = toMinutes(endTimeSplit[0], endTimeSplit[1]);

        const result = new Time(startTimeMinutes, endTimeMinutes);
        return result;
    }
    else if (time.includes("PM")) {
        var splitTimes = time.split("-");
        var startTime = time[0].split(":");
        var endTime = time.substring(0, time[1].indexOf("PM"));
        var endTimeSplit = endTime.split(":");
        var endTimeMinutes = toMinutes(endTimeSplit[0], endTimeSplit[1]);

        const result = new Time(startTimeMinutes, endTimeMinutes);
        return result;
    }
    else {
        console.log("Time not right format or N/A");
    }
    return 0;
}

// Class for class objects
class Class {
    // #height = 0;
    // #width;
    #sunday = new Array();  //0
    #monday = new Array(); //1
    #tuesday = new Array(); // 2
    #wednesday = new Array(); // 3
    #thursday = new Array(); // 4
    #friday = new Array(); //5
    #saturday = new Array(); // 6
    
    #week = [this.#sunday, this.#monday, this.#tuesday, this.#wednesday, this.#thursday, this.#friday, this.#saturday];

    #startTime = new Date();
    #endTime = new Date();

    /**
     * 
     * @param {*} classroom the classroom name and number
     * @param {*} days  String of days that the class is on ("MW", "TuTh", "F", "Sa", "M", "W", "Tu", "Th") 
     * @param {*} times String of the time duration of the class. "8-9:15AM" or "5:30-6:45pm"
     */
    constructor(classroom, days, times){
        this.classroom = classroom;
    }
}

for (let i = 0; i < schedule.childCount; i++){
    if (schedule.children[i].role.toString() == "table"){
        for (let j = 1; j < schedule.children[i].childCount; j++){
            if (cecsLabs.includes(schedule.children[i].children[j].children[9].children[0].name.toString())) {
                console.log(schedule.children[i].children[j].children[6].children[0].name); // Days String
                console.log(schedule.children[i].children[j].children[7].children[0].name); // Time String
                console.log(schedule.children[i].children[j].children[9].children[0].name); // Room Number
            }            
        }
    }
}
// const numm = new Date(Date.now());
// console.log(numm.getDay());
/**
 * new Date(year, monthIndex, day, hours, minutes, seconds)
 * new Date(dateString)
 * date.getDay(): returns the day of the week (0-6)
 * M-Th = 1-4
 * 
 */

// var testing = "8-10:30AM";
// console.log(testing.split("-"));



/**
 * Start: Enter specific time. Thu 2 pm. find the room with the most time.
 * steps could be:
 *  check if the class is open at that specific time
 *  
 * Return the open lab rooms in order of time remaining
 */






// console.log(Date.parse("8-10:30AM"));

