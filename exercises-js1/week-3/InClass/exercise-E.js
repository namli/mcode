/**
 * Create a function that takes a birthYear, and returns the age of someone
 * You are given an array with year that 7 people were born, [1964, 2008, 1999, 2005, 1978,1985, 1919]. 
 * Take this array and create another array containing their ages.
 * console.log the birth years array
 */

let arr = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function yearsOld(years) {
  const curY = new Date();
  let res = years.map((item) => {
    return curY.getFullYear() - item;
  });
  return res;
}

console.log(yearsOld(arr));