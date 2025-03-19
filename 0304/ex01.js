

var a = 10;

console.log(a);

console.log(globalThis.a);

var b = 20.5;

console.log(Math.ceil(b));
console.log(Math.floor(b));
console.log(Math.round(b));

const c = 20;
console.log(c);

//var 호이스팅이 되면서 undefined 출력
//let const 호이스팅이 되긴 하지만 자바스크립트에서 에러로 진행