'strict mode';

function extractCurrencyValue(str){
    let ds = str.slice(1);
    console.log(ds);
    console.log(typeof(ds));
    console.log(Number(ds));
    console.log(typeof(Number(ds)));
    return Number(ds);
}

console.log(extractCurrencyValue(`$120`));