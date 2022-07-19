'strict mode';

// Сравните этот результат с результатом Math.round(1.005, -2) из следующего примера
let x = Math.round(1.005*100)/100;
console.log(x);
console.log(Math.round(1.005, -2));