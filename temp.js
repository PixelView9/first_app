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