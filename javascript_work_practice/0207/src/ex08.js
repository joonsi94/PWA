//그 외 연산자

var a = {a: 10, b: 20};


var b = a. b;
var c = a. c;

console.log(`b=${b}`);
console.log(`c=${c}`);

a.c = {aa:30, bb:40};

console.log(a);

c = a.c ?.aa;
console.log(`c=${c}`);

a.c = null;
c = a.c?.aa;
console.log(`c=${c}`);