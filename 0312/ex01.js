const reg = /[a-b]+/;
// const str = "123";
// const str1 = new String("!23");

// /^\d+$/
// ^ -> 문자열 시작의 의미
// \d+ -> 숫자0~9 하나 이상 의미
// $ 문자열의 끝을 의미
// 즉 전체 문자열이 숫자로만 이루어져있는지 확인하는 정규 표현식

// id가 영어랑 숫자로만 이루어져있는지 확인할 때
// /^[A-Za-z0-9+$]/
// [A-Za-z0-9]
console.log(reg.test('abc'));
console.log(reg.test('1020'));

console.log(typeof reg);