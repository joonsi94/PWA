// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, 
// numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 
// solution 함수를 완성해주세요.

// var arr = [];
// arr.push(10);
// arr.push(20);
// arr.push(30);
// console.log(arr);

function solution(n, numlist) {
    // console.log(n);
    // console.log(numlist);
    // for구문 다른 방법의 문법
    // for (const elem of numlist) {
        //     console.log(elem);
        // }
        var answer = [];
        var count = 0;
        for (let i = 0; i < numlist.length; i++) {
            // console.log(numlist[i]);
            // numlist[i]에 값이 3의 배수 일때
            // 3/3 값은 1 나머지는 0
            // 6/3 값은 2 나머지는 0
            // 9/3 값은 3 나머지는 0
            if (numlist[i] % n == 0){
                answer[count] = numlist[i];
                count++;
                // answer.push(numlist[i]);
            }
        }
        return answer;
    }
        
const value = solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(value);