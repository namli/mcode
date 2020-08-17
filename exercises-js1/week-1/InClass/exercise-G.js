let numberOfStudents = 10;
let numberOfMentors = 5;


/**
 *  Count procent of first number(a) from summ of two number(a+b) 
 */
function countProcents(a, b) {
  let procent = Math.round(a / (a + b) * 100);
  return procent;
}
/**
 * Generate message and call countProcents from inside.
 * 
 */
function getMessage(text, numOne, numTwo) {
  let procent = countProcents(numOne, numTwo);
  let message = text + procent + '%';
  return message;

}
let text1 = getMessage('Percentage students:', numberOfStudents, numberOfMentors);
console.log(text1);

let text2 = getMessage('Percentage mentors:', numberOfMentors, numberOfStudents);
console.log(text2);
