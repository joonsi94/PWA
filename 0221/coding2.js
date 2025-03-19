function solution(n) {
    var answer = 0;
    let p = 7;
    answer = Math.ceil(n / p)
    return answer;
}

const res = solution(15);
console.log(res)