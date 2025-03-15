const {add, sub, mul} = require('./aa.js');
const {default: div} = require('./aa.js');

const value = add(10,5);
console.log(value);

const value1 = sub(10,7);
console.log(value1);

const value2 = mul(3,4);
console.log(value2);

const value3 = div(12,3);
console.log(value3);