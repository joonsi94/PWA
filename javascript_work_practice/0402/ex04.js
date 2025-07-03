const str = "is this all is?";

const re = /is/ig;
// i 대소문자 구분없이
// g 글로벌 전체에서 검색해줘

console.log(re.test(str));
console.log(re.exec(str));
console.log(str.match(re));

const aa = "a1b2c3d4e5";
console.log(aa.split(/\d/));