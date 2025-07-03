// function sum(...numbers){
//     console.log(numbers);
//     const ret = numbers.reduce((a,b)=>{
//         console.log(`a = ${a}`);
//         console.log(`b = ${b}`);
//         return a+b;
//     }, 0)
//     return ret;
// }

function sum(...numbers){
    console.log(numbers);
    const ret = numbers.reduce((a,b)=>{
        console.log(`a = ${a}`);
        console.log(`b = ${b}`);
        return a+b;
    }, '')
    return ret;
}

const value = sum(1,2,3,4,5);
console.log(value);