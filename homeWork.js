// Место для первой задачи
function findMaxNumber(a, b, c, d){

    if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number'){
        return 0;
    }

    let maxNumber = 0;
    let arr = [a, b, c, d];

    arr.forEach(element => {
        if(element > maxNumber){
            maxNumber = element;
        }
        
    });

    return maxNumber;
}

console.log(findMaxNumber(3, -15551, 501));