'strict mode';

let numberOfFilms;

function start(){

    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');    
    }

}

start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){

    for (let i = 0; i < 2; i++) {

        const a = prompt('Один из поcледних просмотренных фильмов', ''),
            b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDb.movies[a] = b;
        } else {
            i--;
        }
    }

}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDb.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDb.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDb);
    }
}

showMyDB(personalMovieDb.privat);

function writeYourGenres(){

    for (let i = 1; i <= 3; i++){
        const favorite = prompt(`Ваш любимый жанр под номером ${i}`, '');
        if(favorite != '' && favorite != null){
            personalMovieDb.genres[i-1] = favorite;    
        } else {
            i--;
        }
    }
}

writeYourGenres();