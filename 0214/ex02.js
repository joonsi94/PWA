function solution(n,t){
    var answer = n;
    for(let i = 0; i < t; i++){
        answer = answer * 2;
    }
    return answer;
}

console.log(solution(2,10));
console.log(solution(7,15));