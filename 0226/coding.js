function solution(my_string) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] !== "a"){
            answer = answer + my_string[i];
        }
    }
    return answer;
}

const ret = solution("bus");
console.log(ret)
const ret2 = solution("nice to meet you");
console.log(ret2)