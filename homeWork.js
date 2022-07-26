// Место для первой задачи
function fib(x){

    if(typeof(x)!=='number'){
        return "";
    }

    let str = '0 1';
    let firstNum = 0;
    let secondNum = 1;
    let tempNum = 0;
    
    for (let i = 2; i <= x; i++){
        tempNum = firstNum;
        firstNum = secondNum;
        secondNum += tempNum;
        str += ` ${secondNum}`;
    }

    return str;

}

console.log(fib(7));