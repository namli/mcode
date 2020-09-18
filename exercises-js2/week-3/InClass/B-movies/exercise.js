/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"




Task 2
Atend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

movieList = document.querySelector('#all-movies');
movieNum = document.querySelector('#movies-number');
mContainer = document.createElement("div.movielist");
// create showMovies function
function showMovies() {
  movieNum.innerText = 0;
  let i = 0;
  mContainer.innerText = '';
  movieList.appendChild(mContainer);
  movies.forEach(el => {
    setTimeout(function (el) {
      p = document.createElement('p');
      p.innerText = `${el.title} - ${el.director}`;
      mContainer.appendChild(p);
      movieNum.innerText = parseInt(movieNum.innerText) + 1;
    }, 1000 * i++, el);
  });
}


//create a new movie object for your favorite movie
let myMovie = {
  title: "Fear and loathing in las vegas",
  director: "Terry Gilliam",
  type: "Adventure",
  haveWatched: false,
};

// create addMovies function

function addMovies(movie, func) {
  movies.push(movie);
  func();
}

addMovies(myMovie, showMovies);

document.addEventListener('click', addMovieFromForm);

function addMovieFromForm(e) {
  if (e.target.id === "movie-formsubmit") {
    let movie = {};
    movie.name = document.querySelector('#movie-title').value;
    movie.director = document.querySelector('#movie-director').value;
    movie.type = document.querySelector('#movie-type').value;
    movie.haveWatched = document.querySelector('#movie-haveWatched').checked;

    addMovies(movie, showMovies);
  }
}