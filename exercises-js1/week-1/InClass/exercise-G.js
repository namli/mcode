let numberOfStudents = 10, numberOfMentors = 5;

let a = numberOfStudents + numberOfMentors;
let pocOfStudent = Math.round(numberOfStudents / a * 100);
let pocOfMentor = Math.round(numberOfMentors / a * 100);
console.log(`Percentage students: ${pocOfStudent}%`);
console.log(`Percentage mentors: ${pocOfMentor}%`);
