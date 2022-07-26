// Место для первой задачи
function fib(x){

    if(typeof(x)!=='number'){
        return "";
    }

    let str = '';
    let firstNum = 0;
    let secondNum = 0;
    let tempNum = 0;
    
    for (let i = 0; i < x; i++){
        tempNum = firstNum;
        firstNum = secondNum;
        secondNum += tempNum;
        if(i === 1){
            secondNum = 1;
        }
        if(i === 0){
            str += `${secondNum}`;
        } else {
            str += ` ${secondNum}`;
        }
        
    }

    return str;

}

console.log(fib(9));