'strict mode';

const options = {
    name: `test`,
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }

};
// delete options.name;

console.log(options);

for (let key in options) {
    if (typeof(options[key]) === 'object'){
        for (let i in key){
        console.log(`Свойство ${i}: ${options[key][i]}`);
        }
    }

    console.log(`Свойство ${key}: ${options[key]}`);
}


