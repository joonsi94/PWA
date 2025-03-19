// function solution(numer1, denom1, numer2, denom2) {
//     a = numer1/denom1;
//     b = numer2/denom2;
//     i=a + b;
//     console.log([i,j])
//     return answer;
// }


function solution(numer1, denom1, numer2, denom2) {
    a = numer1*denom2;
    c = numer2*denom1;
    b = denom1*denom2;
    i = a+c;
    j = b;
    answer = [i,j];
    return answer;
}

console.log(solution(9, 2, 1, 3))