/**
 * Create a function which accepts an array of"messy" strings. 
 * Example to the right ->This function should:
 * ●Remove all non-string entries
 * ●Change the strings to upper case, andadd an exclamation mark to the end
 * If you're using the above example, youshould expect to return an array with 2xELAMIN!, 1x SANYIA!, 2x ISMAEL! and 1x JAMES!
 * 
 */
const trash = [100, "iSMael", 55, 45, "sANyiA", 66, "JaMEs", "eLAmIn", 23, "IsMael", 67, 19, "ElaMIN"];

function cleanerArray(arr) {
  return arr.filter((item) => { return typeof item === 'string' }).map((item) => { item = item.toUpperCase(); return item = item + '!'; });
}

console.log(cleanerArray(trash));