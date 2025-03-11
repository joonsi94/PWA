//정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, 
// array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

function solution(array, n) {
    var answer = 0;
    for(let index = 0; index<array.length; index++){
        const element = array[index];
        console.log(element);
        if(n==element)
            answer++
    }
    return answer;
}

const ret = solution([1, 1, 2, 3, 4, 5], 1);
console.log(ret);