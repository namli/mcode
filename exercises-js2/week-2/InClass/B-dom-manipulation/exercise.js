/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let pTags = document.querySelectorAll("p");
console.log(pTags);


let firstDiv = document.querySelector("div");
console.log(firstDiv);

let jumbotronText = document.querySelector("#jumbotron-text");
console.log(jumbotronText);

let primaryContent = document.querySelector(".primary-content");
let pInsidePrimary = primaryContent.querySelectorAll("p");
console.log(pInsidePrimary);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let myButton = document.querySelector("#alertBtn");

myButton.addEventListener("click", alertSomething);

function alertSomething() {
    alert("Thanks for visiting Bikes for Refugees!");
}



/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
// let changeBtn = document.querySelector("#bgrChangeBtn");

// changeBtn.addEventListener("click", changeColor);

// function changeColor() {
//     let body = document.querySelector("body");
//     body.style.backgroundColor = 'red';
// }



/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
let addTextBtn = document.querySelector("#addTextBtn");
let learnMoreSection = document.querySelector("#mainArticles");
let ptag = document.createElement("p");
ptag.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

addTextBtn.addEventListener("click", addTestToSection);

function addTestToSection() {
    learnMoreSection.appendChild(ptag);
    return false;
}




/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let makeATagsBigerBtn = document.querySelector("#largerLinksBtn");

let aTags = document.querySelectorAll("a");

let aTagArray = Array.from(aTags);

makeATagsBigerBtn.addEventListener("click", makeTextBiger);

function makeTextBiger() {
    aTagArray.forEach(function (item) {
        item.style.fontSize = '22px';
    });
}



/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

let addTextBtnFromInput = document.querySelector("#addArticleBtn");

let learnMoreSectionForInput = document.querySelector("#mainArticles");

let inpitField = document.querySelector("input.addArticle");

let ptagFromInput = document.createElement("p");


addTextBtnFromInput.addEventListener("click", addTextToSectionByAddBtn);


function addTextToSectionByAddBtn() {
    text = inpitField.value;

    ptagFromInput.innerText = text;

    learnMoreSectionForInput.appendChild(ptagFromInput);
}






/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/


colorsArray = ['red', 'blue', 'green', 'yellow', 'purple'];

let changeBtn = document.querySelector("#bgrChangeBtn");

changeBtn.addEventListener("click", changeColor);

counter = 0;

function changeColor() {
    let body = document.querySelector("body");

    body.style.backgroundColor = colorsArray[counter];

    counter = counter + 1;

    if (counter > 4) {
        counter = 0;
    }
}

