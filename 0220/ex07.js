//모든 요소에 2를 곱학 짝수들의 총합을 구해라

const number = [1,2,3,4,5,6];

const result = 
number.map(item => item*2)
.filter(item => item%2==0)
.reduce((acc,num) => acc+num);
console.log(result);

// var sum = 0;

// for(var i = 0; i<number.length; i++){
//     number[i] = number[i]*2
// }

// var sum = 0;
// for(var i = 0; i<number.length; i++){
//     if(number[i]%2==0){
//         sum = sum + number[i];
//     }
// }

// console.log(sum);