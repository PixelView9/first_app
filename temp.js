'strict mode';

function getTimeFromMinutes(quantity) {

    if (typeof (quantity) !== 'number' || !Number.isInteger(quantity) || quantity < 0) {
        return 'Ошибка проверьте данные';
    } else {
        const wholeHours = Math.floor(quantity / 60);
        const minutes = quantity % 60;

        const hoursNumeric = calculateEnding(wholeHours);

        return `Это ${wholeHours} ${hoursNumeric}, ${minutes} минут.`;
    }

}

function calculateEnding(wholeHours) {
    
    switch (wholeHours) {
        case 1:
            return 'час';
        case 2:
            return 'часа';
        case 3:
            return 'часа';
        case 4:
            return 'часа';
            // break;
        default:
            return 'часов';

    }
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));