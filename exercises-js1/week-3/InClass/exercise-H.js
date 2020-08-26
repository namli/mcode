/**
 * Create a function which:
 * ●Takes an array of names
 * ●Looks to see if your name is in the array
 * ●If it is, return Found me!; if not, return Haven't found me :(
 */

const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];



function inArray(arr, name) {
  return (arr.find((item) => name === item)) ? "Found me!" : "Haven't found me :(";
}

console.log(inArray(names, 'Daniel'));
console.log(inArray(names, 'tuysdtu'));