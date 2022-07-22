'strict mode';

function calculate(length){

    if(typeof(length) !== 'number' || parseInt(length) != length || length < 0) {
        return 'При вычислении произошла ошибка';
    } else {
        return (`Объем куба: ${length * length * length}, площадь всей поверхности: ${length * length * 6}`);
    }
    
}

console.log(calculate(0));