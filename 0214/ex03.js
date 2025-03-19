function solution(my_string, letter) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        //my_string[i] 랑 letter 다르면 더해서 answer 넣고
        // console.log(my_string[i]);
        if (my_string[i] !== letter)
            answer = answer + my_string[i];
        //아니면 더해서 answer 넣는거 하지마
    }
    return answer;
}

solution(solution('abcdef', 'f'));
// solution('qwerqwer','w');

