
// This method asks the user how many movies they have watched. If the user left an empty string, 
// or specified a text, or canceled, we ask again.

// The main object, the database of the received data.
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    // This method asks the user how many movies they have watched. If the user left an empty string, 
    // or specified a text, or canceled, we ask again.

    // The main object, the database of the received data.

    start() {
        personalMovieDB.count = prompt("Скільки фільмів ви уже подивилися?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви уже подивилися?', '');
        }
    },

    // methods
    // The method asks the user about the last watched movies and how much the user rated them. It checks
    // in the movie title, whether the string is not empty, and whether the length of the title is no more
    // than 50 characters. If the check does not pass,
    // then we repeat the request. The received data is written to the main object. 

    rememberMyFilms() {
        start: for (let i = 0; i < 2; i++) {
            personalMovieDB.movies = prompt("Назовіть останній переглянутий фільм", "");
            let questionsFilmRating = prompt("На скільки оціните його", "");

            if (personalMovieDB.movies.length !== 0) {
                if (personalMovieDB.movies.length < 51) {
                    personalMovieDB.movies[personalMovieDB.movies] = questionsFilmRating;
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

    },
    // Determines the cinephile level of the user, depending on the answer received at the start of the program.\
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Переглянуто мало фільмів");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Ви звичайний переглядач");
        } else if (personalMovieDB.count >= 30) {
            console.log("Ви кіноман");
        } else {
            console.log("Виникла помилка");
        }
    },

    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres() {
        for (let i = 1; i < 3; i++) {
            let genre = prompt(`Ваший улюблений жанр під номером ${i}`, '');
            if (genre === '' || genre === null) {
                console.log('Ви вказали не коректні дані, або не вкази їх зовсім');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} - це ${item}`);
        });
    },
};

