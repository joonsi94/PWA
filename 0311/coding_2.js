// function solution (n){
//     if(n%2==0){
//         return `${n} is even`
//     }else return `${n} is odd`
// }

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [100];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
});

// const ret = solution(100);
// console.log(ret)
// const ret2 = solution(1);
// console.log(ret2)