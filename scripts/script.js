const list = document.querySelector("#list");

const addMoviesList = movies.map((movie) => movie.Title);

const addMoviesToDom = (movie) => {
  const newLi = document.createElement("li");
  const newImage = document.createElement("img");
  newImage.classList.add("posters");
  newImage.src = movie.Poster;
  const link = document.createElement("a");
  link.setAttribute("target", "_blank");
  link.href = "http://www.imdb.com/title/" + movie.imdbID;
  list.appendChild(newLi);
  newLi.appendChild(link);
  link.appendChild(newImage);
};

const addAllMovies = (movies) => {
  movies.forEach((movie) => {
    addMoviesToDom(movie);
  });
};
addAllMovies(movies);

const removeMovies = () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

const filterMovies = (filter) => {
  removeMovies();
  const filteredMovies = movies.filter((m) => m.Title.includes(filter));
  filteredMovies.forEach((m) => {
    addMoviesToDom(m);
  });
};

// const filterAvengersMovies = () => {
//   removeMovies();
//   const filteredAvengers = movies.filter((movie) =>
//     movie.Title.includes("Avengers")
//   );
//   filteredAvengers.forEach((movie) => {
//     addMoviesToDom(movie);
//   });
// };

// const filterXmenMovies = () => {
//   removeMovies();
//   const filteredXmen = movies.filter((movie) => movie.Title.includes("X-Men"));
//   filteredXmen.forEach((movie) => {
//     addMoviesToDom(movie);
//   });
// };

// const filterPrincessMovies = () => {
//   removeMovies();
//   const filteredPrincess = movies.filter((movie) =>
//     movie.Title.includes("Princess")
//   );
//   filteredPrincess.forEach((movie) => {
//     addMoviesToDom(movie);
//   });
// };

// const filterBatmanMovies = () => {
//   removeMovies();
//   const filteredBatman = movies.filter((movie) =>
//     movie.Title.includes("Batman")
//   );
//   filteredBatman.forEach((movie) => {
//     addMoviesToDom(movie);
//   });
// };

const filterLatestMovies = () => {
  removeMovies();
  const filteredLatest = movies.filter((movie) => movie.Year >= 2014);
  filteredLatest.forEach((movie) => {
    addMoviesToDom(movie);
  });
};

const radioButtons = document.getElementsByName("films");

radioButtons.forEach((button) =>
  button.addEventListener("change", (event) => {
    let target = event.target;
    switch (target.id) {
      case "latest":
        filterLatestMovies();
        break;
      case "avengers":
        filterMovies("Avengers");
        break;
      case "xmen":
        filterMovies("X-Men");
        break;
      case "princess":
        filterMovies("Princess");
        break;
      case "batman":
        filterMovies("Batman");
        break;
    }
  })
);
