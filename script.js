let numberOfFilms = prompt("Скільки фільмів ви уже подивилися", "");

const PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    print: false
};
let i = 0;
while (i < 2) {
    let questionLastMovieWatched = prompt("Назовіть останній переглянутий фільм", "");
    let questionsFilmRating = prompt("На скільки оціните його", "");
    PersonalMovieDB.movies[questionLastMovieWatched] = questionsFilmRating;
    i++;
}
console.log(PersonalMovieDB.movies);
