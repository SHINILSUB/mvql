let movies = [
  {
    id: 0,
    name: "starwars",
    score: 1,
  },
  { id: 1, name: "avengers", score: 2 },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = () => {
  const cleanedMoveis = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleanedMoveis.length) {
    movies = cleanedMoveis;
    return true;
  } else {
    return false;
  }
};
export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length+1}`,name, score

  };
  movies.push(newMovie)
  return newMovie;
}