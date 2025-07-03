const doA = a => a();

const arrow = () => { 
    // return 2 ** 3 
    const x = 2**3;
    return x;
};

console.log(arrow);
console.log(arrow());

const result = doA(arrow);
console.log(result);