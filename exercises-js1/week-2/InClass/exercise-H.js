function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

for (let i = 5; i < 20; i++) {

  if (isEven(i)) {
    console.log(`The exponential of ${i} is ${exponential(i)}`);
  }

}