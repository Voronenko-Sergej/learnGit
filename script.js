let numberOfFilms;
// Цей метод запитує у користувача, скільки фільмів він переглянув. Якщо користувач залишив порожню строку, 
// або вказав текс, чи відмінив, повторно запитуємо.

function start() {
    numberOfFilms = prompt("Скільки фільмів ви уже подивилися?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви уже подивилися?', '');
    }
}
start();

// Головний об'єкт, база отриманих даних.
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Метод запитує у користувач про останні переглянуті фільми, і на скільки користувач їх оцінює. Проводиться перевірка
// в назві фільму, чи не порожня строка, та чи довжина назви не більша 50 символів. Якщо провірку не проходить,
// то повторно запитуємо. Отримані дані записуємо в головний об'єкт. 

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

// Визначає рівень кіномана користувача, взалежності від отриманої відповіді на старті програми.
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
