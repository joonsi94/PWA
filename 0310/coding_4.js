function solution(n) {
    var answer = 0;
    var count = 0;
    for (let i = 0; i < n; i++) {
        count++
    }
    if ((Math.ceil(n**(1/2))**2) == count) {
        return 1
    } else return 2
    // return answer = count
}

const ret = solution(144);
console.log(ret);
const ret2 = solution(976);
console.log(ret2);