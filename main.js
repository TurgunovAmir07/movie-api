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
  localStorage.setItem('addToFavourites', JSON.stringify(favoriteMovies));
  alert("Фильм добавлен в избранное!");
}

// функция удаления из избранного
function removeFromFavorites() {
  let movieTitle = title.textContent;

  favoriteMovies = favoriteMovies.filter(function (movie) {
    return movie.title !== movieTitle;
  });
  localStorage.setItem('addToFavourites', JSON.stringify(favoriteMovies));
  alert("Фильм удален из избранного!");
}



window.onloadFavourites = function() {
  let savedFavourites = localStorage.getItem('addToFavourites');
  if (savedFavourites) {
    favoriteMovies = JSON.parse(savedFavourites);
  } else {
    favoriteMovies = [];
  }
};


// чтобы увидеть фильмы добавленные в избранное вызовите массив favoriteMovies в консоль
// чтобы увидеть фильмы добавленные в избранное вызовите массив favoriteMovies в консоль
// чтобы увидеть фильмы добавленные в избранное вызовите массив favoriteMovies в консоль
// чтобы увидеть фильмы добавленные в избранное вызовите массив favoriteMovies в консоль
// чтобы увидеть фильмы добавленные в избранное вызовите массив favoriteMovies в консоль



// переменные смены темы
let themeContainer = document.querySelector('.theme_container')
let theme = document.querySelector('.theme')
let body = document.getElementsByTagName('body')[0]

// кнопка и функция смены темы
themeContainer.addEventListener("click", function () {
  if (
    theme
      .getAttribute("src")
      .includes("./img/free-icon-sun-1857296.png")
  ) {
    theme.setAttribute("src", "./img/moon.png");
    body.style.backgroundColor = 'black'
    body.style.color = 'yellow'
    movieInput.style.backgroundColor = 'yellow'
    poster.style.border = '2px'
    poster.style.borderStyle = 'solid'
    poster.style.borderColor = 'white'
    themeContainer.style.backgroundColor = '#222'
    themeContainer.style.border = '1px'
    themeContainer.style.borderStyle = 'solid'
    themeContainer.style.borderColor = 'white'
    localStorage.setItem('theme', 'dark')
  } else {
    theme.setAttribute("src", "./img/free-icon-sun-1857296.png");
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    movieInput.style.backgroundColor = 'white'
    themeContainer.style.backgroundColor = 'white'
    themeContainer.style.border = '1px'
    themeContainer.style.borderStyle = 'solid'
    themeContainer.style.borderColor = 'black'
    localStorage.setItem('theme', 'light')
  }
});

// функция сохранения в localstorage темы и проверки на ее наличие 
window.onload = function() {
  let savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    theme.setAttribute("src", "./img/moon.png");
    body.style.backgroundColor = 'black';
    body.style.color = 'yellow';
    movieInput.style.backgroundColor = 'yellow';
    poster.style.border = '2px';
    poster.style.borderStyle = 'solid';
    poster.style.borderColor = 'white';
    themeContainer.style.backgroundColor = '#222';
    themeContainer.style.border = '1px';
    themeContainer.style.borderStyle = 'solid';
    themeContainer.style.borderColor = 'white';
  } else {
    theme.setAttribute("src", "./img/free-icon-sun-1857296.png");
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    movieInput.style.backgroundColor = 'white';
    themeContainer.style.backgroundColor = 'white';
    themeContainer.style.border = '1px';
    themeContainer.style.borderStyle = 'solid';
    themeContainer.style.borderColor = 'black';
  }
};
