// Место для первой задачи
function getTimeFromMinutes(quantity) {

    if (typeof (quantity) !== 'number' || !Number.isInteger(quantity) || quantity < 0) {
        return 'Ошибка, проверьте данные';
    } else {
        const wholeHours = Math.floor(quantity / 60);
        const minutes = quantity % 60;

        // const hoursNumeric = calculateEnding(wholeHours);

        let hoursNumeric;

        switch (wholeHours) {
            case 1:
                hoursNumeric = 'час';
                break;
            case 2:
                hoursNumeric = 'часа';
                break;
            case 3:
                hoursNumeric = 'часа';
                break;
            case 4:
                hoursNumeric = 'часа';
                break;
            default:
                hoursNumeric = 'часов';
                break;
        }

        return `Это ${wholeHours} ${hoursNumeric} и ${minutes} минут`;
}
}