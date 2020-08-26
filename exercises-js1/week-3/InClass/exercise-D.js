/**
 * Modify your callback function from theprevious exercise so that it also:
 * Sorts abracaArray in alphabetical order
 */

function abracaFunction(yourFunc) {
  console.log("I am abracaFunction! Watch as I mutate an array of strings to your heart's content!");
  const abracaArray = ["James", "Elamin", "Ismael", "Sanyia", "Chris", "Antigoni",];
  const abracaOutput = yourFunc(abracaArray);
  return abracaOutput;
}

function yourFunc(arr) {
  return arr.map((item) => { return item.toUpperCase(); }).sort();
}

console.log(abracaFunction(yourFunc));