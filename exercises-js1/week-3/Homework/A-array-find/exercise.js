/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

function findLongNameThatStartsWithA(arr) {
  return arr.find((item) => { return (item[0] === 'A') && (item.length > 7) });
}


console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
