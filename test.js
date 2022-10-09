const time1 = "9-10:30AM";
const time2 = "9:30-10AM";
const time3 = "9:20-10:30PM";
const time4 = "9-10AM";

let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
let minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
let arr = new Array(24);
for (var i = 0; i < 24; i++){
    arr[i] = new Array(minutes);
}



for (var i = 0; i < 24; i++){
    console.log(arr[i]);
    console.log(i);
}