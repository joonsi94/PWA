function solution(my_string) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === "a") { }
        else if (my_string[i] === "e") { }
        else if (my_string[i] === "i") { }
        else if (my_string[i] === "o") { }
        else if (my_string[i] === "u") { }
        else{
            answer = answer + my_string[i];
        }
    }
    return answer;
}

const ret = solution("bus");
console.log(ret)
const ret2 = solution("nice to meet you");
console.log(ret2)