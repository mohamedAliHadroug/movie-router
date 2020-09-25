import React, { useState } from "react";
import MovieList from "./components/movieList";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Rating from "./components/Rating";
import AddFilm from "./components/addFilm";

const MovieInfos = [
  {
    title: "Maze Runner",
    rate: 3,
    description:
      "Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow runners for a shot at escape.",
    posterUrl:
      "https://lh3.googleusercontent.com/V3W_1uLiraX9RdqmRYI7SCYgI8UgK80Ta_95OmCfGrQYhJxjLwy55ggja_2AEE77h76oCg",
    video: `64-iSYVmMVY`,
  },
  {
    title: "Maze Runner: The scorch trials",
    rate: 3,
    description:
      "After having escaped the Maze, the Gladers now face a new set of challenges on the open roads of a desolate landscape filled with unimaginable obstacles.",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE3MDU2NzQyMl5BMl5BanBnXkFtZTgwMzQxMDQ3NTE@._V1_.jpg",
    video: `SDofO3P2HpE`,
  },
  {
    title: "Maze Runner: Death Cure",
    rate: 3,
    description:
      "Young hero Thomas embarks on a mission to find a cure for a deadly disease known as The Flare.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/eb/MazeRunnerDeathCureFinalPoster.jpeg",
    video: `4-BTxXm8KSg`,
  },
  {
    title: "THE END GAME",
    rate: 4,
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/I/91xPEyDUNcL._AC_SL1500_.jpg",
    video: `TcMBFSGVi1c`,
  },
  {
    title: "Joker",
    rate: 4,
    description:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime",
    posterUrl:
      "https://img6.cdn.cinoche.com/images/2410039474f50c57115d6e6f97302965.jpg",
    video: `zAGVQLHvwOY`,
  },
  {
    title: "The GodFather",
    rate: 5,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
    video:`sY1S34973zA`,
  },
  {
    title: "The GodFather 2",
    rate: 5,
    description:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8Hn_NlQp2MC1X_kQd49MHo4ooqUkpYwequA&usqp=CAU",
    video: `9O1Iy9od7-A`,
  },
  {
    title: "The GodFather 3",
    rate: 4,
    description:
      "In the midst of trying to legitimize his business dealings in New York City and Italy in 1979, aging Mafia Don Michael Corleone seeks to avow for his sins.",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNTc1YjhiNzktMjEyNS00YmNhLWExYjItZDhkNWJjZjYxOWZiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    video: `z8h3LVb8cl8`,
  },
  {
    title: "The irish Man",
    rate: 4,
    description:
      "An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.",
    posterUrl:
      "https://fr.web.img5.acsta.net/pictures/19/09/18/09/17/1349272.jpg",
    video: `sY1S34973zA`,
  },
];

const App = () => {
  // searching by title of the movie
  const [input, setInput] = useState("");
  //searching by Rating
  const [rating, setRating] = useState("");
  //movie list
  const [movies, setMovies] = useState(MovieInfos);

  return (
    <div className="App">
      <SearchBar setInput={setInput} />
      <Rating setRating={setRating} />
      <MovieList
        movies={movies.filter(
          (searchMovie) =>
            searchMovie.title
              .toLowerCase()
              .includes(input.toLowerCase().trim()) &&
            searchMovie.rate >= rating
        )}
      />
      <AddFilm setMovies={setMovies} movies={movies} />
    </div>
  );
};

export default App;
