/**
 * Having a function defined as the one inthe right
 * This function does not need to be modified.
 * Can you pass in a callback function which will mutate abracaArray such that it:
 * Upper cases all letters in the array
 */

function abracaFunction(yourFunc) {
  console.log("I am abracaFunction! Watch as I mutate an array of strings to your heart's content!");
  const abracaArray = ["James", "Elamin", "Ismael", "Sanyia", "Chris", "Antigoni",];
  const abracaOutput = yourFunc(abracaArray);
  return abracaOutput;
}

function yourFunc(arr) {
  return arr.map((item) => { return item.toUpperCase(); });
}

console.log(abracaFunction(yourFunc));