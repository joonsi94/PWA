function solution(n) {
    // n = String(n);
    n = n + '';
    // n = n.tostring();
    const arr = n.split('');
    console.log(arr);

    const brr = arr.map(item => Number(item));
    console.log(brr);

    const sum = brr.reduce((a, b) => a + b, 0);
    return sum;
}

//짧은 풀이
//n = n + '';
//const sum = n.split('')
        //.map(item=>Number(item))
        //.reduce((a,b)=>a+b,0);
//return sum;

const ret = solution(1234);
console.log(ret);