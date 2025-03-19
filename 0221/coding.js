function solution(array, height) {
    var answer = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if(array[i]>height) count++
        // for (let j = height; j < array[i]; j++) {
        //         count++
        // }
        answer = [count]
    }
    return answer;
}

const res = solution([149, 180, 192, 170], [167]);
console.log(res);