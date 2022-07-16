'strict mode';

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// ***** version 1
for (let i = 0; i < 2; i++) {

    const a = prompt("Один из поcледних просмотренных фильмов", ''),
        b = prompt("На сколько оцените его?", '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDb.movies[a] = b;
    } else {
        i--;
    }
}

//***** version 2
// let i = 0;

// do  {

//     const a = prompt("Один из поcледних просмотренных фильмов", ''),
//         b = prompt("На сколько оцените его?", '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//         personalMovieDb.movies[a] = b;
//         i++;
//     } else {
//     }
// }
// while (i < 2);

//***** version 3
// let i = 0;

// while (i < 2){

//     const a = prompt("Один из поcледних просмотренных фильмов", ''),
//         b = prompt("На сколько оцените его?", '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//         personalMovieDb.movies[a] = b;
//         i++;
//     } else {
//     }
// }

console.log(personalMovieDb);