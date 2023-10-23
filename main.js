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
        alert("Фильм не найден");
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Error");
    });
});

let favoriteMovies = [];

// кнопка в избранное
let btnStar = document.querySelector(".btnStar");
let starContainer = document.querySelector(".starContainer");

starContainer.addEventListener("click", function () {
  if (
    btnStar
      .getAttribute("src")
      .includes("./img/free-icon-favourites-star-20424.png")
  ) {
    btnStar.setAttribute("src", "./img/favourites-star.png");
    addToFavorites();
  } else {
    btnStar.setAttribute("src", "./img/free-icon-favourites-star-20424.png");
    removeFromFavorites();
  }
});

// функция в избранное
function addToFavorites() {
  let movieTitle = title.textContent;
  let movieYear = year.textContent;
  let movieDirector = director.textContent;
  let movieActors = actors.textContent;
  let moviePlot = plot.textContent;

  let favoriteMovie = {
    title: movieTitle,
    year: movieYear,
    director: movieDirector,
    actors: movieActors,
    plot: moviePlot,
  };

  favoriteMovies.push(favoriteMovie);

  alert("Фильм добавлен в избранное!");
}

// функция удаления из избранного
function removeFromFavorites() {
  let movieTitle = title.textContent;

  favoriteMovies = favoriteMovies.filter(function (movie) {
    return movie.title !== movieTitle;
  });

  alert("Фильм удален из избранного!");
}


// чтобы увидеть фильмы добавленные в избранное вызовите массив favoriteMovies в консоль
