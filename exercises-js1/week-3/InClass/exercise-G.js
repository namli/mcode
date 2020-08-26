/**
 * Takes an array of birthYears
 * Uses console.log to print the message 
 * These are the birth years of people who can drive:<filtered birth years>
 * Returns an array of people who can drive (remember, you can drive if you are 17 yearsor older)
 */

let arr = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function filterYears(listOfYears) {
  let listFiltredYears = listOfYears.filter((item) => { return (2020 - item) > 17; });
  console.log(`These are the birth years of people who can drive:${listFiltredYears.join()}`);
  return listFiltredYears;
}

console.log(filterYears(arr));