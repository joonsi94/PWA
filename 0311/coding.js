// function solution(s) {
//     var arr = s.split('');
//     console.log(arr);
//     if (arr.length == 4 || arr.length == 6 && String !== arr) {
//         return true
//     }
//     else return false
// }
// function solution(s) {
//     if (s.length == 4 || s.length == 6) {
//         for(let i = 0; i < s.length; i++){
//             if (isNaN(s[i])) {
//                 return false
//             }
//             else return true
//         }
//     }
// }

// function solution(s) {
//     if (s.length == 4 || s.length == 6) {
//         if (isNaN(s) || s.includes('e') || s.includes('x')) {
//             return false
//         }
//         else return true
//     }
// }
function solution(s) {
    var answer = true;
    if (s.length == 4 || s.length == 6) {
        if (isNaN(s) || s.includes('e') || s.includes('x')) 
            return false
    }else return false
    return answer
}

const ret = solution("a234");
console.log(ret);
const ret2 = solution("1234");
console.log(ret2);
const ret3 = solution("0x16");
console.log(ret3);