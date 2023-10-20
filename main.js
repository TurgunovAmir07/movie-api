// все ключи
// poster api/get: http://www.omdbapi.com/?apikey=[yourkey]&
// key api:  http://www.omdbapi.com/?i=tt3896198&apikey=35c08a4c

let searchForm = document.getElementById("searchForm");
let movieInput = document.getElementById("movieInput");
let movieInfo = document.getElementById("movieInfo");
let poster = document.getElementById("poster");
let title = document.getElementById("title");
let year = document.getElementById("year");
let director = document.getElementById("director");
let actors = document.getElementById("actors");
let plot = document.getElementById("plot");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let movieTitle = movieInput.value;

fetch(`http://www.omdbapi.com/?apikey=35c08a4c&t=${movieTitle}`)
.then((response) => response.json())
.then((data) => {
  if (data.Response === "True") {
    movieInfo.style.display = "block";
    poster.src = data.Poster;
    title.textContent = data.Title;
    year.textContent = data.Year;
    director.textContent = data.director;
    actors.textContent = data.Actors;
    plot.textContent = data.Plot;
  } else {
    alert('Фильм не найден');
  }
})
.catch((error) => {
  console.log(error);
  alert('Error');
});
});