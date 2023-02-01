import fetch from 'node-fetch';
const response = await fetch('http://web.csulb.edu/depts/enrollment/registration/class_schedule/Spring_2023/By_College/CECS.html');
const body = await response.text();

console.log(body);
