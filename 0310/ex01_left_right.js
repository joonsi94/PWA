//문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장되어 있습니다. 
// str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 기준으로 왼쪽에 있는 
// 문자열들을 순서대로 담은 리스트를, 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 
// 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 return하도록 solution 함수를 완성해주세요. 
// "l"이나 "r"이 없다면 빈 리스트를 return합니다.

function solution(str_list) {
    let lindex = str_list.indexOf('l') //2
    let rindex = str_list.indexOf('r') //3

    if(lindex == -1) lindex = 21;
    if(rindex == -1) lindex = 21;

    console.log(lindex);
    console.log(rindex);
    //l이 r보다 먼저 나온 상황
    if (lindex < rindex)
        return str_list.slice(0, lindex)
    else if (lindex > rindex)
        return str_list.slice(rindex + 1)

    return [];
}

console.log(solution(["u", "u", "l", "r"]))