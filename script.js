'strict mode';

const numberOfFilms = +prompt ('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 1; i < 3; i++){
// }


    const answer1 = prompt("Один из псоледних просмотренных фильмов", ''),
          answer2 = prompt("На сколько оцените его?", ),
          answer3 = prompt("Один из псоледних просмотренных фильмов", ''),
          answer4 = prompt("На сколько оцените его?", );

    personalMovieDb.movies[answer1] = answer2;
    personalMovieDb.movies[answer3] = answer4;



console.log(personalMovieDb);

let ham = 3,
    fries = 3,
    cola = 0,
    nuggets = 5;

console.log(ham === 3 && cola === 2 || fries === 3 && nuggets === 2);
console.log(ham === 3 && cola === 2 || fries === 3 && nuggets === 5);
console.log(ham === 3 && cola === 2 || fries === 3 && nuggets);

