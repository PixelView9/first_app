'strict mode';

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    // const answer1 = prompt("Один из поcледних просмотренных фильмов", ''),
    //       answer2 = prompt("На сколько оцените его?", ),
    //       answer3 = prompt("Один из псоледних просмотренных фильмов", ''),
    //       answer4 = prompt("На сколько оцените его?", );

    let answer1;
    let answer2;

    for(let i = 0; i < 4; i++){
       
        if(i%2 === 0){
            answer1 = prompt("Один из поcледних просмотренных фильмов", '');
        } else {
            answer2 = prompt("На сколько оцените его?", );

            personalMovieDb.movies[answer1] = answer2;
        } 
    }  

console.log(personalMovieDb);


