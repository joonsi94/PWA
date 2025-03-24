function doA(...arr) {
    console.log(arr);

    const sum = arr.reduce((a, b) => {
        console.log('a=' + a);
        console.log('b=' + b);
        return a+b;
    },0/*a값의 초기값(생략하면 처음 수가 들어감)*/)
    console.log(sum);
}

console.log(doA(1, 2, 3, 4, 5));