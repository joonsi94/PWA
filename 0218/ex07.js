// function solution(numer1, denom1, numer2, denom2) {
//     a = numer1 * denom2;
//     c = numer2 * denom1;
//     b = denom1 * denom2;
//     i = a + c;
//     j = b;
//     if (i % 2 == 0 && j % 2 == 0) {
//         answer = [i / 2, j / 2];
//     } else if (i % 3 == 0 && j % 3 == 0) {
//         answer = [i / 3, j / 3];
//     } else {
//         answer = [i, j];
//     }
//     return answer;
// }

// const res = solution(9, 2, 1, 3);
// console.log(res);

function solution(numer1, denom1, numer2, denom2) {
    var answer = []
    a = numer1 * denom2;
    c = numer2 * denom1;
    b = denom1 * denom2;
    i = a + c;
    j = b;
    while (i % 2 == 0 && j % 2 == 0) {
        answer = [i / 2, j / 2];
    }
    while (i % 3 == 0 && j % 3 == 0) {
        answer = [i / 3, j / 3];
    }
    return answer;
}

const res = solution(9, 2, 1, 3);
console.log(res);