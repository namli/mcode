function getYear(yOld) {
  const date = new Date();
  const year = date.getFullYear();
  return parseInt(year) - parseInt(yOld);
}
function getMessage(name, year) {
  return `My name is ${name} and i was born at ${year}`;
}

console.log(getMessage('Aleksey', getYear(15)));