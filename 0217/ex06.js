function solution(str, number) {
    let answer = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < number; j++) {
            answer = answer + str[i];
        }
    }
    return answer;
}

const res = solution('abc, 3');
console.log(res);