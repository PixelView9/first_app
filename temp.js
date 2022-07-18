const lines = 9;
let result = '';

for (let i = 0; i <= lines; i++) {

    let lengthOfString = i + lines + 1;
    let countOfBreaks = lines - i;
    for (let j = 0; j < lengthOfString; j++) {

        if (j < countOfBreaks) {
            result += ' ';
        } else {
            result += '*';
        }
    }
    result += '\n';
}
console.log(result);

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr){
    return (curr * amount);
}

convert(500, usdCurr);

function promotion(result){
    console.log(result * discount);
}

const res = convert(500, usdCurr); 

promotion(res);