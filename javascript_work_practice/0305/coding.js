// function solution(array) {
//     var answer = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > array[i + 1]) {
//             array[i] = array[i + 1]
//         }
//         answer = answer + array[Math.floor(array.length/2)];
//     }
//     return answer;
// }

function solution(array) {
    var answer = [];
    const arr = array.length.filter(array => array[Math.floor(array.length/2)])
    answer = answer + arr
    return answer;
}

const ret = solution([1, 2, 7, 10, 11]);
console.log(ret);