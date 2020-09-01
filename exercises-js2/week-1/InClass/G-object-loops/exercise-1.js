// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};


// Object.keys(studentGrades).map(function (key) {
//   if (studentGrades[key] > 18) {
//     console.log(key.toUpperCase() + ' - ' + studentGrades[key]);
//   }
// });


for (let key in studentGrades) {

  if (studentGrades[key] > 18) {
    console.log(key.toUpperCase() + ' - ' + studentGrades[key]);
  }

}



  // Prints
  // TOM - 20
  // ABDUL - 19