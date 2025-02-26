function Circle(radius){
    console.log(radius);
    return 'aa';
}

const ret1 = Circle(10); //반환되는 값
const ret2 = new Circle(5); // 자동으로{}

console.log(ret1);
console.log(ret2);

// const circle = new Circle(5);