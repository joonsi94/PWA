const a = { x: 10 };
const b = { x: 10 };

console.log(a === b); //참조값이 다르기 때문에 false
console.log(a === a);

console.log(a.x = b.x);