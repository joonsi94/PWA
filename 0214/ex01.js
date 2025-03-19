// null 병합 연산자

console.log(Boolean(""));
console.log(Boolean([]));
console.log(Boolean({}));

// || 좌항의 피연산자가 false이면 우항의 피연산자를 대입한다.
// ?? 좌항의 피연산자가 null,undefined 이면 우항의 피연산자를 대입한다.
const a = "" || "기본문자열";

console.log(a);
console.log(a.length);


//str의 길이를 반환해주는 함수를 만들고 싶어요.
// 1. optional ?
// 2. ||
// 3. ??
function aa(str){
    str = str || '';
    return str.length;
}

console.log(aa());
console.log(aa('문자열'));