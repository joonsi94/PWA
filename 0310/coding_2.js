// function solution(n) {
//     var answer = [];
//     var count = 1;
//     for (let i = 0; i < n; i++) {
//         answer.push(count);
//         count++
//     }
//     return answer;
// }
function solution(n) {
    var answer = [];
    var count = 1;
    for (let i = 0; i < n; i++) {
        answer.push(count);
        count++
        if (count % 2 !== 0){
            answer.pop();
        }else answer
    }
    return answer;
}

const ret = solution(10);
console.log(ret)
const ret2 = solution(15);
console.log(ret2)