let numberOfFilms;
// This method asks the user how many movies they have watched. If the user left an empty string, 
// or specified a text, or canceled, we ask again.


function start() {
    numberOfFilms = prompt("Скільки фільмів ви уже подивилися?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви уже подивилися?', '');
    }
}
start();

// The main object, the database of the received data.
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// The method asks the user about the last watched movies and how much the user rated them. It checks
// in the movie title, whether the string is not empty, and whether the length of the title is no more than 50 characters. If the check does not pass,
// then we repeat the request. The received data is written to the main object. 

function rememberMyFilms() {
    start: for (let i = 0; i < 2; i++) {
        let questionLastMovieWatched = prompt("Назовіть останній переглянутий фільм", "");
        let questionsFilmRating = prompt("На скільки оціните його", "");

        if (questionLastMovieWatched.length !== 0) {
            if (questionLastMovieWatched.length < 51) {
                personalMovieDB.movies[questionLastMovieWatched] = questionsFilmRating;
            } else {
                alert('Назва фільму занадто велика. Введіть коректну назву або відмініть відповідь');
                i--;
                continue start;
            }
        } else {
            alert('Вкажіть назву фільму або відмініть відповідь');
            i--;
            continue start;
        }
    }

}
rememberMyFilms();

// Determines the cinephile level of the user, depending on the answer received at the start of the program.
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Переглянуто мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Ви звичайний переглядач");
    } else if (personalMovieDB.count >= 30) {
        console.log("Ви кіноман");
    } else {
        console.log("Виникла помилка");
    }
}

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }

}
showMyDB();

function writeYourGenres() {
    let questionYourLikeGenres;
    for (let i = 0; i < 2; i++) {
        while (questionYourLikeGenres == '' || questionYourLikeGenres == null || isNaN(questionYourLikeGenres)) {
            questionYourLikeGenres = +prompt('Ваший улюблений жанр під номером', '');
        }
        questionYourLikeGenres[i] = questionYourLikeGenres;
    }

}
