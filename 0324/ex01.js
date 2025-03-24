/*
    프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 
    고객들의 전화번호의 일부를 가립니다.
    전화번호가 문자열 phone_number로 주어졌을 때, 
    전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 
    문자열을 리턴하는 함수, solution을 완성해주세요.

    제한 조건
    phone_number는 길이 4 이상, 20이하인 문자열입니다.
*/

// function solution(p) {
//     var answer = '';
//     var a = p.split('')
//     for (let i = 0; i < a.length - 4; i++) {
//         a.splice(i, 1, '*');
//     }
//     answer = answer + a.join('');
//     return answer;
// }

const arr = [1,2,3,4,5];
const brr = new Array(5).fill("0");

console.log(arr);
console.log(brr);

console.log(arr.slice(0,3));
//-1은 뒤에서부터 시작
console.log(arr.slice(0,-1));
//제일 마지막인 -1에서 -4까지
console.log(arr.slice(-4,-1));

//slice 함수는 배열, 문자열에서 사용 가능

function solution(phone_number){
    const front_str = phone_number.slice(0,-4);
    var answer = new Array(front_str.length).fill('*').join("")+phone_number.slice(-4);
    return answer;
}

console.log(solution("027778888"))