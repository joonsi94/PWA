function solution(str){
    var answer = "";
    for(let i = str_length-1; i > -1;i--){
        console.log(str[i]);
        answer = answer + str[i];
    }
    return answer;
}

console.log(solution("jaron"));