/**
 * You can drive in the UK at the age of 17.
 * 
 * Write another function that takes a birth year and returns a string Born in {year} candrive or Born in {year} can drive in {x} years
 * Use the array of birth years, [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ], to get an arrayof strings saying if these people can drive
 * console.log the answers
 * 
 */

let arr = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function yearsOld(years) {
  const curY = new Date();
  let res = years.map((item) => {
    isDrive(item);
    return curY.getFullYear() - item;
  });
  return res;
}
function isDrive(year) {
  const curY = new Date();
  console.log(((curY.getFullYear() - year) >= 17) ? `Born in ${year} candrive` : `Born in ${year} can drive in ${year + 17} year`);
}
// console.log(isDrive(2000));
// console.log(isDrive(2010));
console.log(yearsOld(arr));