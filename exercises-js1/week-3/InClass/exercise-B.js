let arr1 = ['Bips', 'Anudeep', 'Ramin'],
  arr2 = ['Juan', 'Maria', 'Mirabella'];

let arr3 = arr1.concat(arr2);

console.log(arr3.sort());

function isStudent(name, list) {
  return (list.includes(name)) ? `${name} is at the class with ${list.join()}` : `${name} is not at the class with ${list.join()}`;
}

console.log(isStudent('Maria', arr3));
console.log(isStudent('Clara', arr3));