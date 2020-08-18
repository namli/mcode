function userLogin(userName, userType) {
  if (userType === 'admin' || userType === 'manager') {
    return "Username valid";

  }
  let userNameFirstChar = userName.substring(1, 0);

  if (userName.length > 5 && userName.length < 10 && userNameFirstChar == userNameFirstChar.toUpperCase()) {
    return "Username is valid ";
  }

  return "Username invalid ";
}

console.log(userLogin('happy', 'admin'));
console.log(userLogin('sad', 'manager'));
console.log(userLogin('sadsadasd', 'user'));
console.log(userLogin('Sadsasd', 'user'));

