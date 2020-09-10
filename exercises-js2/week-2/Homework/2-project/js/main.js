const themes = [
  {
    name: 'blue',
    jamboColor: '#588fbd',
    donateColor: '#ffa500',
    volunteerColor: {
      bgColor: 'black',
      textColor: 'white'
    }
  },
  {
    name: 'orange',
    jamboColor: '#f0ad4e',
    donateColor: '#5751fd',
    volunteerColor: {
      bgColor: '#31b0d5',
      textColor: 'white'
    }
  },
  {
    name: 'green',
    jamboColor: '#87ca8a',
    donateColor: 'black',
    volunteerColor: {
      bgColor: '#8c9c08',
      textColor: ''
    }
  }
];


buttons = document.querySelectorAll('button.colorButton');


buttonsArray = Array.from(buttons);


buttonsArray.forEach(function (element) {
  element.addEventListener("click", function (event) {

    idOfbutton = event.target.getAttribute('id');


    if (idOfbutton === 'blueBtn') {
      setCollorsTheme('blue');
    } else if (idOfbutton === 'orangeBtn') {
      setCollorsTheme('orange');
    } else if (idOfbutton === 'greenBtn') {
      setCollorsTheme('green');
    }
  });

});



function setCollorsTheme(name) {

  let theme = themes.find(function (item) {
    return item.name === name;
  });


  jambo = document.querySelector('div.jumbotron');
  donateBtn = document.querySelector('.buttons a.btn-primary');
  voloteerBtn = document.querySelector('.buttons a.btn-secondary');

  jambo.style.backgroundColor = theme.jamboColor;
  donateBtn.style.backgroundColor = theme.donateColor;
  voloteerBtn.style.backgroundColor = theme.volunteerColor.bgColor;
  voloteerBtn.style.color = theme.volunteerColor.textColor;


}


/*
 *  PART 2
 */

formEmailField = document.querySelector('#exampleInputEmail1');
formNameField = document.querySelector('#example-text-input');
formDescribeField = document.querySelector('#exampleTextarea');

submitBtn = document.querySelector('form button.btn-primary');



submitBtn.addEventListener("click", function (event) {
  event.preventDefault();


  let error = false;

  if (formEmailField.value.length == 0) {
    formEmailField.style.borderColor = "red";
    error = true;
  }

  if (formNameField.value.length == 0) {
    formNameField.style.borderColor = "red";
    error = true;
  }

  if (formDescribeField.value.length == 0) {
    formDescribeField.style.borderColor = "red";
    error = true;
  }

  emailArray = formEmailField.value.split('@');
  if (emailArray.length < 2) {
    formEmailField.style.borderColor = "red";
    error = true;
  }


  if (error === false) {
    alert('Thank you wery mach godd people!!!');
    formEmailField.value = '';
    formNameField.value = '';
    formDescribeField.value = '';

    formEmailField.style.borderColor = "grey";
    formNameField.style.borderColor = "grey";
    formDescribeField.style.borderColor = "grey";


  }




});