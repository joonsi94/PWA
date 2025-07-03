const str = 'abc245@naver.com';
const re = /[A-Za-z0-9 /* = \d*/ ]+@[A-Za-z]+.[A-Za-z]+/;

const arr = str.match(re);
console.log(arr);

console.log(re.test(str));
