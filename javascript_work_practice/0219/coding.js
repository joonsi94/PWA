function solution(money) {
    var answer = 0;
    var a = 5500;
    var count = 0;
    for (let i = 0; i <= a; i++) {
        if (money >= a) {
            money = money - a;
            count++;
        }
        answer = [count, money];
    }
    return answer;
}

// function solution(money) {
//         var count = 0;
//         var b = 0;
//         while (money >= 5500) {
//             money = money - 5500;
//             count++;
//         }
//     return [count, b];
// }

const res = solution(5500)
console.log(res)