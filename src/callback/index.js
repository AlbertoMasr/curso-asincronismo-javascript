function sum(num1, num2) {
    return num1 + num2;
}

function res(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));
console.log(calc(2, 2, res));
console.log(calc(2, 2, mul));
console.log(calc(2, 2, div));

setTimeout(() => {
    console.log('Hola mundo');
}, 2000)

function greeting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'Alberto')