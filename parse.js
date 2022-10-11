var fs = require('fs');
const schedule = require('./public/schedule.json');

const cecsLabs = ["ECS-405", "ECS-413", "ECS-414", "ECS-407", "ECS-411", "ECS-412", "ECS-416", "ECS-403", "ECS-404", "ECS-305"];

/**
 * Data that is needed for each class
 * 1. Days
 * 2. Time
 * 3. Location/Classroom
 * 4. className
 *
 */

// 

// Class for class objects
class Class {
    // #height = 0;
    // #width;
    #sunday = new Array();
    #monday = new Array();
    #tuesday = new Array();
    #wednesday = new Array();
    #thursday = new Array();
    #friday = new Array();
    #saturday = new Array();
    
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

