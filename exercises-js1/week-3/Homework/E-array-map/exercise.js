// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// function multiple(n) {
//   return n * 100;
// }
// nn = numbers.map(multiple);


// nn = numbers.map(function multiple(n) {
//   return n * 100;
// });


// nn = numbers.map(function (n) {
//   return n * 100;
// });

//nn = numbers.map((n) => {return n * 100;});

//nn = numbers.map((n) => return n * 100;);

nn = numbers.map(n => n * 100);