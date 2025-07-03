function solution(s) {
    var answer = [];
    let a = s.split('');
    console.log(a)
    for (let i = 0; i < a.length; i++) {
        if (a.slice(0, i).lastIndexOf(a[i]) < 0) {
            answer.push(a.slice(0, i).indexOf(a[i]));
        } else {
            answer.push(i - a.slice(0, i).lastIndexOf(a[i]));
        }
    }
    return answer;
}
// let aa = a[i];
// // if (s[0]) {
// //     return -1
// // }
// for (let j = 1; j < a.length; j++) {
//     let bb = a[j];
//     if (aa == bb){
//         return bb-aa
// }
// }
//indexOf 해당하는 첫번째 인덱스 번호
//lastIndexOf 해당하는 마지막 인덱스 번호

const ret = solution("banana")
console.log(ret)