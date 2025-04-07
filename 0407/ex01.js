console.log(Math.abs(-5));
console.log(2 ** 3);
console.log(Math.cbrt(27));

/*
0~1
0.00000009~0.9999999999
*50
0.00000049999~49.99999995
Math.trunc()
0~49
+50
50~99
*/

//50~100 사이의 난수를 만들어라.
// console.log(Math.trunc(Math.random()*50)+50);
function getNumber(min, max) {
  return Math.trunc(Math.random() * (max - min)) + min;
}

console.log(getNumber(50, 100));

//최소~최대 몇까지 난수를 만들어라
for(let i = 0; i < 6; i++)console.log(getNumber(1,47));