/**
 * Time object for tuple of start and end time in minutes
 */
class Time {
    #startMinutes;
    #endMinutes;

    constructor(startTimeMinutes, endTimeMInutes) {
        this.#startMinutes = startTimeMinutes;
        this.#endMinutes = endTimeMInutes;
    }

    set start(start) {
        this.#startMinutes = start;
    }

    get start() {
        return this.#startMinutes;
    }

    set end(end) {
        this.#endMinutes = end;
    }

    get end() {
        return this.#endMinutes;
    }

    toTimeString(){
        var returnValue;
        if(this.#startMinutes >= 720){
            
        }

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
 * @param {*} time String  of time 
 * @returns parse the time string according to am or pm and return the time in minutes
 */
function parseTimeString(time) {
    if (time.includes("AM")) {
        var splitTimes = time.split("-");
        var startTimeSplit = splitTimes[0].split(":");
        var startTimeMinutes = toMinutes(startTimeSplit[0], startTimeSplit[1]);
        var endTime = splitTimes[1].substring(0, splitTimes[1].indexOf("AM"));
        var endTimeSplit = endTime.split(":");
        var endTimeMinutes = toMinutes(endTimeSplit[0], endTimeSplit[1]);

        const result = new Time(startTimeMinutes, endTimeMinutes);
        return result;
    }
    else if (time.includes("PM")) {
        var splitTimes = time.split("-");
        var startTimeSplit = splitTimes[0].split(":");
        var startTimeMinutes;
        if(startTimeSplit[0] < 12){
            startTimeMinutes = toMinutes(startTimeSplit[0], startTimeSplit[1]);
        }
        else{
            startTimeMinutes = toMinutes((parseInt(startTimeSplit[0])), startTimeSplit[1]);
        }
        var endTime = splitTimes[1].substring(0, splitTimes[1].indexOf("PM"));
        var endTimeSplit = endTime.split(":");

        var endTimeMinutes = toMinutes((parseInt(endTimeSplit[0]) + 12), endTimeSplit[1]);

        const result = new Time(startTimeMinutes, endTimeMinutes);
        return result;
    }
    else {
        console.log("Time not right format or N/A");
    }
    return 0;
}
var test = 750;
var hour = Math.floor(750/60);
var minutes = 750%60;
console.log(hour);
console.log(minutes);