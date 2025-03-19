//두 정수 a, b가 주어졌을 때 a와 b 사이에 
// 속한 모든 정수의 합을 리턴하는 함수, 
// solution을 완성하세요.
//예를 들어 a = 3, b = 5인 경우, 
// 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// function solution(a, b) {
//     var answer = 0;
//     var d = 0;
//     var c = 0;
//     for (let i = 0; i < b || i < a; i++) {
//         c++
//     }
//     if (a < c < b || b < c < a) {
        
//         // d = d + c
//     } else if (a == b) {
//         return a
//     }
//     // answer = a + b + d
//     return answer;
// }

function solution(a, b) {
    let answer = 0;
    if (a === b) {
        return a;
    }
    if (a > b) {
        [a, b] = [b, a]; // a와 b를 swap
    }
    for (let i = a; i <= b; i++) {
        answer += i;
    }
    return answer;
}

console.log(solution(3, 5))
console.log(solution(3, 3))
console.log(solution(1, 10))
console.log(solution(5, 3))