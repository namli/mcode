const students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];
const studentsa = ["Ahmed", "Amy", "Atanas", "Nahidul", "Jack"];

function secondMatchesAmy(array) {
  if (array[1] == "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(students));
console.log(secondMatchesAmy(studentsa));