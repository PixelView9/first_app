'strict mode';

function calculateNumberOfCoupe(seat){

    if(typeof(seat) !== 'number' || seat < 0 || Number.isInteger(seat)){
        return ('Ошибка. Проверьте правильность введенного номера места'); 
    } else if (seat === 0 || seat > 36){
        return ('Таких мест в вагоне не существует');
    } else {
        return (Math.floor(seat/4) + 1);
    }
}

calculateNumberOfCoupe(15);