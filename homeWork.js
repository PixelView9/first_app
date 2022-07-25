// Место для первой задачи
function findMaxNumber(a, b, c, d){

    if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number'){
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }

}

console.log(findMaxNumber(3, -15551, 501, 15));