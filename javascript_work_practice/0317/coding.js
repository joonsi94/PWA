function solution(n) {
    var answer = [];
    var b = String(n)
    var a = b.split('');
    for(let i = a.length-1; i > -1;i--) {
        answer.push(a[i]);
    }
    return answer;
}

console.log(solution(12345))