function solution(n) {
    var answer = 0;
    let j = 0;
    for (let i = 0; i <= n; i++) {
        if (n/i === j, j<=n, n%i ==0 ) {
            console.log([i, j])
            answer++;
        }
    }
    return answer;
}

console.log(solution(100))
// function solution(n) {
//     var answer = 0;
//     var i = 0;
//     var j = 0;
//     while (i, j <= n, i++, j++) {
//         if (i * j === n) {
//             console.log([i, j])
//             answer++;
//         }
//     }
//     return answer;
// }
// console.log(solution(100))