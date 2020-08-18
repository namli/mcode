/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function tFun(arr) {
  arr.forEach((val) => {
    if (val.startsWith('T')) {
      console.log(val);
    }
  });
}

console.log(tFun(daysOfWeek));