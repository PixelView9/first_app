'strict mode';

let bases = 5;
let numTimes = 10;
let str = '';
for (let i = 0; i < 5; i++){

if(i%2 === 0){
    str += `${bases * i}-----`;
} else {
    str += `${bases * i}+++++`;
}

}
console.log(str);